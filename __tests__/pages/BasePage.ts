import {
  Builder,
  By,
  Capabilities,
  until,
  WebDriver,
  WebElement,
} from "selenium-webdriver";
const fs = require("fs");
const chromedriver = require("chromedriver");
const geckodriver = require("geckodriver");


export interface Options {
  
  driver?: WebDriver;
 
  browser?: "chrome" | "firefox";
  
  url?: string;
}

export class BasePage {
  driver: WebDriver;
  url: string;

  constructor(options?: Options) {
    if (options && options.driver) this.driver = options.driver;
    if (
      options &&
      options.browser &&
      options.browser == "firefox" &&
      options.driver == undefined
    )
      this.driver = new Builder()
        .withCapabilities(Capabilities.firefox())
        .build();
    else
      this.driver = new Builder()
        .withCapabilities(Capabilities.chrome())
        .build();
    if (options && options.url) this.url = options.url;
  }

  async navigate(url?: string): Promise<void> {
    if (url) return await this.driver.get(url);
    else if (this.url) return await this.driver.get(this.url);
    else
      return Promise.reject(
        "BasePage.navigate() needs a URL defined on the page object, or one passed in. No URL was provided."
      );
  }

  async getElement(elementBy: By): Promise<WebElement> {
    await this.driver.wait(until.elementLocated(elementBy));
    let element = await this.driver.findElement(elementBy);
    await this.driver.wait(until.elementIsVisible(element));
    return element;
  }

  async click(elementBy: By): Promise<void> {
    let element = await this.getElement(elementBy);
    await this.driver.wait(until.elementIsEnabled(element));
    return await element.click();
  }

  async setInput(elementBy: By, keys: any): Promise<void> {
    let input = await this.getElement(elementBy);
    await this.driver.wait(until.elementIsEnabled(input));
    await input.clear();
    return input.sendKeys(keys);
  }

  async getText(elementBy: By): Promise<string> {
    let element = await this.getElement(elementBy);
    await this.driver.wait(until.elementIsEnabled(element));
    return element.getText();
  }

  async getAttribute(elementBy: By, attribute: string): Promise<string> {
    let element = await this.getElement(elementBy);
    await this.driver.wait(until.elementIsEnabled(element));
    return element.getAttribute(attribute);
  }

  async takeScreenshot(filepath: string) {
    fs.writeFile(
      `${filepath}.png`,
      await this.driver.takeScreenshot(),
      "base64",
      (e) => {
        if (e) console.log(e);
        else console.log("screenshot completed");
      }
    );
  }
}