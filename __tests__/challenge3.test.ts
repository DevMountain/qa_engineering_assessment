import { Widgets } from "./pages/Widgets";

describe("widget filter tests", () => {
    let widget = new Widgets();
    beforeEach(async () => {
      await widget.navigate();
    });
    afterAll(async () => {
      await widget.driver.quit();
    });

    test("1 + 1 = 2", async () => {
        let results = await widget.getSumValues(1,1);
        expect(results).toEqual("Sum: 2");
    });

    test("7 + 11 = 18", async () => {
        let results = await widget.getSumValues(7,11);
        expect(results).toEqual("Sum: 18");
    })

    test("3 + 3 = 6", async () => {
        let results = await widget.getSumValues(3,3);
        expect(results).toEqual("Sum: 6");
    })

});