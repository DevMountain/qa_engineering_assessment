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
  //the name filter input and name filter button locators were incorrectly
  //labelled By.name when in fact the values labelled name on this page
  //were tied to the id of these objects. Changes have been made to reflect this.
  async setNameFilter(filter: string) {
    await this.setInput(By.id("nameFilterInput"), filter);
    return this.click(By.id("nameFilterButton"));
  }
  async getFilteredNames() {
    return this.getText(By.name("nameFilterResults"));
  }
  /**
   * This method was created to test the sum functionality.
   * @param input1 is the first numerical value of the equation
   * @param input2 is the second numerical value of the equation
   * @returns the sumButton is clicked to calculate the equation.
   */
  async calculateSum(input1: number, input2: number){
    await this.setInput(By.name("sumInput1"), input1);
    await this.setInput(By.name("sumInput2"), input2);
    return this.click(By.name("sumButton"));
  }
  /**
   * This method
   * @returns the result of the equation
   * and allows us to check the result for accuracy
   */
  async getSumResult() {
    return this.getText(By.name("sumResults"));
  }
  async checkPalindrome(maybePalindrome: string) {
    await this.setInput(By.name("palindromeInput"), maybePalindrome);
    await this.click(By.name("palindromeButton"));
    return this.getText(By.name("palindromeResults")).then(
      (text) => text.split(" ")[1]
    );
  }
}
