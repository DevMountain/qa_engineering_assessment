import { Widgets } from "./pages/Widgets";
import * as palindromes from "./assets/palindromes.json";
import * as nonpalindromes from "./assets/nonpalindromes.json";

describe("palindrome testing", () => {
  let widget = new Widgets();
  beforeEach(async () => {
    await widget.navigate();
  });
  afterAll(async () => {
    await widget.driver.quit();
  });
  palindromes.forEach((palindrome) => {
    test(`"${palindrome}" should be a palindrome`, async () => {
      let results = await widget.checkPalindrome(palindrome);
      expect(results).toContain("true");
    });
  });
  /**
   * This test uses the nonpalindromes JSON file to create a 
   * forEach loop to test nonpalindrome phrases. 
   * Results in this test are verified by the expect statement in 
   * this case the words should return with a "false" result.
   */
  nonpalindromes.forEach((nonpalindrome) => {
    test(`"${nonpalindrome}" should not be a palindrome`, async () => {
      let results = await widget.checkPalindrome(nonpalindrome);
      expect(results).toContain("false");
    });
  });
});
