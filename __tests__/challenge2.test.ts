import { Widgets } from "./pages/Widgets";
import * as palindromes from "./assets/palindromes.json";
import * as non_palindromes from "./assets/non_palindromes.json";

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
  non_palindromes.forEach((non_palindrome) => {
    test(`"${non_palindrome}" should not be a palindrome`, async () => {
      let results = await widget.checkPalindrome(non_palindrome);
      expect(results).toContain("false");
    });
  });
});
