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
    await this.setInput(By.name("nameFilterInput"), filter);
    return this.click(By.name("nameFilterButton"));
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
  /**
   * Enters two numbers into the sum widget and returns the widget's output.
   * 
   * @param firstNum - number to be entered into the first input line
   * @param secondNum - number to be entered into the second input line
   */
  async getSumResult(firstNum: string, secondNum: string) {
    // Enter firstNum into the first input field.
    await this.setInput(By.name("sumInput1"), firstNum);
    await this.click(By.name("sumInput1"));
    // Enter secondNum into the second input field.
    await this.setInput(By.name("sumInput2"), secondNum);
    await this.click(By.name("sumInput2"));
    // Click "Add"
    await this.click(By.name("sumButton"));
    // Return widget's calculated sum
    return this.getText(By.name("sumResults"));      
  }
}
