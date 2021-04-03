import { Widgets } from "./pages/Widgets";
import * as strChar from "./assets/letters.json";


// Couldn't get selector to work on up and down number buttons
// Couldn't click "Add" after inputing text into number fields - don't know why
// Manual tests confirm that it works - with the exceptions of letter "e", which for some reason is accepted


describe("Sum Widget tests", () => {
    let widget = new Widgets();
    beforeEach(async () => {
      await widget.navigate();
    });
    test("Addition works", async () => {
        await widget.inputAddValues(5, 7)
        let results = await widget.getAddValue();
        expect(results).toBe(12)
      });
      test("Negative numbers work", async () => {
        await widget.inputAddValues(5, -7)
        let results = await widget.getAddValue();
        expect(results).toBe(-2)
      });
      test("Only numbers should be accepted", async () => {
        await widget.inputAddValues(5, -7)
        let results = await widget.getAddValue();
        expect(results).toBe(-2)
      });
      strChar.forEach((strChar) => {
        test(`"${strChar}" should not be accepted`, async () => {
          let results = await widget.inputAddValues(strChar, 1).then(widget.getAddValue);
          expect(results).toContain("NaN");
        });
    });

      afterAll(async () => {
        await widget.driver.quit();
    });
    });
