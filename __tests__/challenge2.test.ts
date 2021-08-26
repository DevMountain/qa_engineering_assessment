import { Widgets } from "./pages/Widgets";
import * as palindromes from "./assets/palindromes.json";
import * as notPalindromes from "./assets/notPalindromes.json";

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
  notPalindromes.forEach((word) => {
    test(`"${word}" should not be a palindrome`, async() => {
      let results = await widget.checkPalindrome(word);
      expect(results).toContain("false");
    });

  });
});
