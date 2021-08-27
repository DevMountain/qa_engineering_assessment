import { Driver } from "selenium-webdriver/chrome";
import { Widgets } from "./pages/Widgets";

describe("widget filter tests", () => {
    let widget = new Widgets();
    beforeEach(async () => {
      await widget.navigate();
    });
    afterAll(async () => {
      await widget.driver.quit();
    });
    test("2+3 = 5", async () => {
        await widget.setNumber1([2]);
        await widget.setNumber2([3]);
        let results = await widget.getSum();
        expect(results).toContain("5");
      });
});