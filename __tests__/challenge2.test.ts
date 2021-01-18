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

  nonpalindromes.forEach((palindrome) => {
    test(`"${palindrome}" should be not a palindrome`, async () => {
      let results = await widget.checkPalindrome(palindrome);
      expect(results).toContain("false");
    });
  });
});
