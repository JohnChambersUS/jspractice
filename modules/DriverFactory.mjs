import { MainDriver } from "./MainDriver.mjs";

export class DriverFactory {

    constructor() {
        console.log("driver factory constructor");
    }

    getFireFoxDriver() {
        console.log("firefox class");
        let currDriver = new MainDriver();
        return currDriver;
    } 

}