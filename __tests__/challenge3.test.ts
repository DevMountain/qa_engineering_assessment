import { Driver } from "selenium-webdriver/chrome";
import { Widgets } from "./pages/Widgets";

describe("Sum widget testing", () => {
    let widget = new Widgets();
    beforeEach(async () => {
      await widget.navigate();
    });
    afterAll(async () => {
      await widget.driver.quit();
    });

    test("Sum", async()=>{
        await widget.setSumInputOne(4);
        await widget.setSumInputTwo(5);
        await widget.addButton();
        let sum = (await widget.getSumResult()).toString();
        expect(sum).toContain("9");
    })
    
});