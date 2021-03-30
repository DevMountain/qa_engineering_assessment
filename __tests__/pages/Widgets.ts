import { By } from "selenium-webdriver";
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
  async setObjectFilter(filter: string) {
    await this.setInput(By.name("objectFilterInput"), filter);
    return this.click(By.name("objectFilterButton"));
  }
  async getFilteredObjects() {
    return this.getText(By.name("objectFilterResults"));
  }
  async setNameFilter(filter: string) {
    await this.setInput(By.id("nameFilterInput"), filter);
    return this.click(By.id("nameFilterButton"));
  }
  async getFilteredNames() {
    return this.getText(By.name("nameFilterResults"));
  }
  async checkPalindrome(maybePalindrome: string) {
    await this.setInput(By.name("palindromeInput"), maybePalindrome);
    await this.click(By.name("palindromeButton"));
    return this.getText(By.name("palindromeResults")).then(
      (text) => text.split(" ")[1]
    );
  }
}
