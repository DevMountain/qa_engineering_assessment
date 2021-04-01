import { Widgets } from "./pages/Widgets";

describe("widget sum tests", () => {
    let widget = new Widgets();
    beforeEach(async () => {
        await widget.navigate();
    });
    afterAll(async () => {
        await widget.driver.quit();
    });
    test("sum tesing", async () => {
        await widget.setNumbers(10, 2);
        let results = await widget.getSum();
        expect(results).toContain(12);
        expect(results).not.toContain("Jennifer");
        expect(results).not.toContain(8);
    });
});