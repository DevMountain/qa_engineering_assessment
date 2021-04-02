import { Widgets } from "./pages/Widgets";

describe("widget filter tests", () => {
  let widget = new Widgets();
  beforeEach(async () => {
    await widget.navigate();
  });
  afterAll(async () => {
    await widget.driver.quit();
  });
  test("Sum 2 and 3 works", async () => {
    let results = await widget.getSum("2","3");
    expect(results).toEqual("5");
  });
});
