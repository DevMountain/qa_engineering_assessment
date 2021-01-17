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
    test("Sum of two positive numbers", async () => {
        let sum = await widget.getSumResult("1", "2");
        expect(sum).toBe("Sum: 3");
    });
    test("Sum of two negative numbers", async () => {
        let sum = await widget.getSumResult("-3", "-4");
        expect(sum).toBe("Sum: -7");
    })
})