import {Widgets} from "./pages/Widgets"

describe("sum widget", () => {
    //jest.setTimeout(30000);
    let widget = new Widgets();
    beforeEach(async () => {
      await widget.navigate();
    });
    afterAll(async () => {
      await widget.driver.quit();
    });

test("sum", async () => {
    await widget.additionnumbers(3, 5);
    let results = await widget.getSum();
    expect(results).toEqual(8);
    });
});


