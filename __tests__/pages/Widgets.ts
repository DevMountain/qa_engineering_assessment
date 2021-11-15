import { By, Key } from "selenium-webdriver";
import { BasePage, Options } from "./BasePage";

export class Widgets extends BasePage {

  sumInput1: By = By.name("sumInput1");
  sumInput2: By = By.name("sumInput2");
  sumButton: By = By.name("sumButton");
  sumResults: By = By.name("sumResults");

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

  async doSum(firstNum: number, secondNum: number){

      await this.clickSpinner(this.sumInput1, Key.ARROW_UP, firstNum);
    

    await this.clickSpinner(this.sumInput2, Key.ARROW_UP, secondNum);

    await this.click(this.sumButton);
  }


  async setFirstNumToSum(numToSum: number, useArrows: boolean){
    await this.setNumToSum(numToSum, useArrows, true);
  }

  async setSecondNumToSum(numToSum: number, useArrows: boolean){
    await this.setNumToSum(numToSum, useArrows, false);
  }

  /**
   * helper method to set the number fields for the Sum function therefore should *not* be called by the test class, only
   * internally in the Widgets class
   * The following assumptions have been made:
   * 1. This function assumes that the webpage page has just been reloaded so the number fields are blank
   * 2. The method does *not* use the pickers to increase or decrease the existing number in the number field. 
   * This is because the sum function on the web page as it stands does *not* do proper validation so would not 
   * be possible to do an increase or decrease of an invalid number (i.e. presently the sum function allows "--" as valid input
   * and also decimal numbers are not handled properly)
   * 3. Once validation on the sum fields has been implemented, this method can be updated to allow increase/decrease of existing number
   * @param numToSum {number} - the number to set the field
   * @param useArrows {boolean} - true if using the arrows to set the number, false if otherwise
   * @param isFirstField {boolean} - true if setting the first sum field, false if otherwise
   */
  async setNumToSum(numToSum: number, useArrows: boolean, isFirstField: boolean){
    let input = this.sumInput2;
    if(isFirstField)
      input = this.sumInput1;

    if(useArrows){
      let numTimesToClick = numToSum;
      let key = Key.ARROW_UP;

      if(numToSum < 0){
        key = Key.ARROW_DOWN;
        //need to set the number of times to click to the numToSum but a positive number
        numTimesToClick = numToSum * -1;
      }

      await this.clickSpinner(input, key, numTimesToClick);
    }
    else{
      await this.setInput(input, numToSum)
    }
  }

  async clickSumButton(){
    await this.click(this.sumButton);
  }
  async getSumResult(): Promise<string>{
    return await this.getText(this.sumResults);
  }
}
