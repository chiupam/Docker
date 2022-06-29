# coding=utf-8
from selenium import webdriver  # 必须


def main():
    driver.get('https://www.baidu.com/')
    print(driver.title)
    driver.quit()


if __name__ == "__main__":
    chrome_options = webdriver.ChromeOptions()  # 必须
    chrome_options.add_argument('--headless')  # 必须
    chrome_options.add_argument('--no-sandbox')  # 必须
    chrome_options.add_argument('--windows-size=1920, 1080')  # 建议
    driver = webdriver.Chrome(options=chrome_options)  # 必须
    main()
