//const webdriver = import("selenium-webdriver");
import { Builder, By, Key, until } from 'selenium-webdriver';
//const firefox = require('selenium-webdriver/firefox');
var driver; // = new Builder().forBrowser("firefox").build();

export class MainDriver {

    constructor() { 
       
        //const driver = webdriver.Builder()
        //    .forBrowser('firefox')
        //    .setFirefoxOptions(options)
        //    .build();
    }

    startBrowser() {
        driver = new Builder().forBrowser("firefox").build();
    }

    async stopBrowser() {
        await driver.quit();
    }
   
    get driver() {
        return driver;
    }

    testMsg() {
        console.log("main driver running");
        //driver.get("http://www.google.com");
    }
}