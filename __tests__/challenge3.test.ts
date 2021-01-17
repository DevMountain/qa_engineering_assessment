import { Driver } from "selenium-webdriver/chrome";
import { Widgets}  from "./pages/Widgets"
import * as numbers from "./assets/numbers.json"

describe("Sum Testing", () => {
    let widget = new Widgets
    beforeEach(async () => {
        await widget.navigate();
    });
    afterAll(async () => {
        await widget.driver.quit();
    });
    numbers.forEach((equation) => {
        test(`"Case: ${equation.case}`, async () => {
            let result = await widget.getSumResult(equation.first, equation.second);
            expect(result).toBe(equation.sum);
        });
    });
});

