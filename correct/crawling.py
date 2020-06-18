import json
from selenium import webdriver
from collections import OrderedDict

def correct():
    try:
        driver = webdriver.Chrome('./driver/chromedriver.exe')

    except:
        driver = webdriver.Chrome('./driver/chromedriver')

    driver.maximize_window()

    site = ['https://m.blog.naver.com/shining0721', 'https://m.blog.naver.com/desbey7']
    Title = []
    Image = []

    for j in range(0, 2):
        driver.get(site[j])

        for i in range(1, 6):
            try:
                Title.append(driver.find_element_by_xpath(f'/html/body/ui-view/bg-nsc/div[9]/div[4]/div/div/div[1]/ul/li[{i}]/div/a/div[2]/strong/span').text)
                LoadImage = driver.find_elements_by_xpath(f'/html/body/ui-view/bg-nsc/div[9]/div[4]/div/div/div[1]/ul/li[{i}]/div/a/div[1]')
                for e in LoadImage:
                    Image.append(e.get_attribute("bg-lazy-img"))

            except:
                Title.append(driver.find_element_by_xpath(f'/html/body/ui-view/bg-nsc/div[9]/div[4]/div/div/div[1]/ul/li[{i}]/div/a/div/strong/span').text)
                Image.append('https://i.imgur.com/5QhPOLP.png')

        driver.back()

    driver.quit()
    
    data = OrderedDict()
    
    data.append(Title)
    data.append(Image)
    
    with open('data.json', 'w', encoding = "utf-8") as file:
        json.dump(data, file, ensure_ascii = False, indent = "\t")
        
    a = open('data.txt', 'w')
    a.close()
