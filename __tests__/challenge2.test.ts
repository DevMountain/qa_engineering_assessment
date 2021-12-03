import { Widgets } from "./pages/Widgets";
import * as palindromes from "./assets/palindromes.json";
import * as palindromesSet2 from "./assets/palindromesSet2.json";
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
  palindromesSet2.forEach((palindrome) => {
    test(`"${palindrome}" should be a palindrome`, async () => {
      let results = await widget.checkPalindrome(palindrome);
      expect(results).toContain("true");
    });
  });
  notPalindromes.forEach((palindrome) => {
    test(`"${palindrome}" should not be a palindrome`, async () => {
      let results = await widget.checkPalindrome(palindrome);
      expect(results).toContain("false");
    });
  });
});
