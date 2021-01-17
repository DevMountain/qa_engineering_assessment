import { Driver } from "selenium-webdriver/chrome";
import { Widgets}  from "./pages/Widgets"

describe("Sum Testing", () => {
    let widget = new Widgets
    beforeEach(async () => {
        await widget.navigate();
    });
    afterAll(async () => {
        await widget.driver.quit();
    })
    test("Adds two positive numbers correctly", async () => {
        let sum = await widget.getSumResult("1", "2");
        expect(sum).toBe("Sum: 3");
    });
})