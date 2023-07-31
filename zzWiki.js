//const webdriver = import("selenium-webdriver");
import { Builder, By, Key, until } from 'selenium-webdriver';


async function testit() {
    let driver = await new Builder().forBrowser("firefox").build();
    try {
    await driver.get("https://www.wikipedia.com");
    await driver.wait(until.titleIs('Wikipedia'), 5000);
    } catch(error) {
        console.log(error.message);
        return false;
    } 

    try {
        let inputBox = await driver.findElement(By.id('searchInput'));
        let rc = await inputBox.sendKeys("archery", Key.RETURN);
        } catch(error) {
            console.log(error.message);
            return false;
        }

    return false;
}

var rc = await testit();
//var rc2 = await fillInput();


var y = 2;