# /usr/bin/env python
# -*- coding=utf-8 -*-

from time import sleep
from os import system

while True:
    try:
        system("crontab /data/cron.sh")
    except FileNotFoundError:
        continue
    sleep(5)
    