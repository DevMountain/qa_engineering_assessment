import { Widgets } from "./pages/Widgets";

describe("sum testing", () => {
    let widget = new Widgets();
    beforeEach(async () => {
      await widget.navigate();
    });
    afterAll(async () => {
      await widget.driver.quit();
    });
    test("Can do addition", async () => {
        await widget.setNumbers(5,6);
        let results = await widget.getNumberSum();
        expect(results).toContain("11");
    
      });

});
