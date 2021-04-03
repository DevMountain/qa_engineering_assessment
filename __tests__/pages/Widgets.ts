import { By, Actions, WebDriver } from "selenium-webdriver";
import { Executor } from "selenium-webdriver/http";
import { BasePage, Options } from "./BasePage";



export class Widgets extends BasePage {
  constructor(options?: Options) {
    super(options);
    this.url = "https://devmountain-qa.github.io/Automation-Basics/build/";
  }
  async splitEvensAndOdds(numbers: Array<number>) {
    await this.setInput(By.name("evenOddInput"), numbers.join(","));
    return this.click(By.name("evenOddButton"));
  }
  async getEvensAndOdds() {
    let results = {
      evens: "",
      odds: "",
    };
    results.evens = await this.getText(By.name("evenResults"));
    results.odds = await this.getText(By.name("oddResults"));
    return results;
  }
  async singleEvensOdds(even: any, odd: any) {
    let results = {
      even: even,
      odd: odd
    };
    results.even = await this.getText(By.name("evenResults"));
    results.odd = await this.getText(By.name("oddResults"));
    return results;  
  }
  async setObjectFilter(filter: string) {
    await this.setInput(By.name("objectFilterInput"), filter);
    return this.click(By.name("objectFilterButton"));
  }
  async getFilteredObjects() {
    return this.getText(By.name("objectFilterResults"));
  }
  async setNameFilter(filter: string) {
    await this.setInput(By.xpath(`//input[@id="nameFilterInput"]`), filter);
    return this.click(By.xpath(`//button[@id="nameFilterButton"]`));
  }
    async getFilteredNames() {
        let element = await this.getElement(By.xpath(`//span[@name="nameFilterResults"]`))
        return await element.getText();
  }
  async checkPalindrome(maybePalindrome: string) {
    await this.setInput(By.name("palindromeInput"), maybePalindrome);
    await this.click(By.name("palindromeButton"));
    return this.getText(By.name("palindromeResults")).then(
      (text) => text.split(" ")[1]
    );
  }
  async inputAddValues(topNum: any, botNum: number) {
    await this.setInput(By.xpath(`//input[@type="number"]`)[0], topNum);
    await this.setInput(By.xpath(`//input[@type="number"]`)[1], botNum);
      return this.click(By.xpath(`//button[@class="confirmationButton"]`));

  }
  async getAddValue() {
    let element = await this.getElement(By.xpath(`//span[@name="sumResults"]`))
    return await element.getText();
  }
  async getAddInput() {
    let element = await this.getElement(By.xpath(`//span[@name="sumResults"]`))
    return await element.getText();
  }
  async checkSumType() {
    this.getAddValue()
  }
}
