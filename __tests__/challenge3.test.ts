import { Widgets } from "./pages/Widgets";

describe("widget sums", () => {
  let widget = new Widgets();
  beforeEach(async () => {
    await widget.navigate();
  });
  afterAll(async () => {
    await widget.driver.quit();
  });
  test("sum success", async () => {
    await widget.addNumbers(2, 2);
    let results = await widget.getSum();
    expect(results).toBe(4);
  });
});