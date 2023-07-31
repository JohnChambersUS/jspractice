import { DriverFactory } from './modules/DriverFactory.mjs';

let df = new DriverFactory();

var driver = df.getFireFoxDriver();

driver.startBrowser();

driver.driver.get("https://www.google.com");

setTimeout(() => {
    console.log('Pause');
  }, 2000);

driver.stopBrowser(); 