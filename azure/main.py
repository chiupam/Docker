import json
from asyncio import create_subprocess_shell as shell
from asyncio.subprocess import PIPE
from datetime import datetime

from telethon import TelegramClient, events

with open("./config.json", "r", encoding="utf-8") as config:
    tg = json.load(config)
api_id = tg['api_id']
api_hash = tg['api_hash']
user_id = tg['user_id']
ql_port = int(tg['ql_port'])
bot_id = int(tg['bot_api'].split(":")[0])
Azure = TelegramClient('./azure', api_id, api_hash)


async def cmd(_command):
    p = await shell(_command, stdout=PIPE, stderr=PIPE)
    _bytes, _error = await p.communicate()
    return _bytes.decode("utf-8")


async def hello():
    command = "az vm list-ip-addresses -n $(cat config.json | jq -r .az_name) -o json | " \
              "jq .[0].virtualMachine.network.publicIpAddresses[0].ipAddress"
    result = await cmd(command)
    if len(result) < 4:
        push = f"Azure 服务启动成功！\n" \
               f"但没能成功登录 Azure 账号\n" \
               f"请进入容器使用 `az login` 再次登录！"
    else:
        push = f"Azure 服务启动成功！\n" \
               f"当前 Azure 的 ip: `{str(result)[1:-2]}`\n" \
               f"当前青龙面板网址: {str(result)[1:-2]}:{ql_port}"
    await Azure.send_message(bot_id, push)


@Azure.on(events.NewMessage(chats=bot_id, from_users=user_id, pattern=r'^az(\?|？)?$'))
async def check(event):
    await event.reply("az!")


@Azure.on(events.NewMessage(chats=bot_id, from_users=user_id, pattern=r'^/azip$'))
async def get_azure_ip(event):
    msg = await event.reply("正在查询中……")
    try:
        command = "az vm list-ip-addresses -n $(cat config.json | jq -r .az_name) -o json | " \
                  "jq .[0].virtualMachine.network.publicIpAddresses[0].ipAddress"
        result = await cmd(command)
        await event.delete()
        await Azure.pin_message(bot_id, None, notify=False)
        msg = await Azure.edit_message(
            msg,
            f"当前 Azure 的 ip: `{str(result)[1:-2]}`\n"
            f"当前青龙面板网址: {str(result)[1:-2]}:{ql_port}"
        )
        await Azure.pin_message(bot_id, msg, notify=False)
    except Exception as error:
        await Azure.edit_message(msg, str(error))


@Azure.on(events.MessageEdited(chats=bot_id, from_users=bot_id, pattern=r"(\n|.)*错误代码493，IP可能黑了.*"))
@Azure.on(events.NewMessage(chats=bot_id, from_users=user_id, pattern=r'^/ghip$'))
async def change_azure_ip(event):
    msg = await event.reply("正在更换中……")
    try:
        command = "vm_group=$(cat config.json | jq -r .az_group); " \
                  "vm_name=$(cat config.json | jq -r .az_name); " \
                  "az vm deallocate -g $vm_group -n $vm_name; " \
                  "az vm start -g $vm_group -n $vm_name; " \
                  "az vm list-ip-addresses -n $vm_name -o json | " \
                  "jq .[0].virtualMachine.network.publicIpAddresses[0].ipAddress"
        now = datetime.now()
        result = await cmd(command)
        await event.delete()
        await Azure.pin_message(bot_id, None, notify=False)
        msg = await Azure.edit_message(
            msg,
            f"新的 Azure 的 ip: `{str(result)[1:-2]}`\n"
            f"新的青龙面板网址: {str(result)[1:-2]}:{ql_port}\n"
            f"更换 ip 耗时: {str(datetime.now() - now).split('.')[0]}"
        )
        await Azure.pin_message(bot_id, msg, notify=False)
    except Exception as error:
        await Azure.edit_message(msg, str(error))


with Azure:
    Azure.loop.create_task(hello())
    Azure.loop.run_forever()
