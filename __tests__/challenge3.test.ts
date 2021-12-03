import { Widgets } from "./pages/Widgets";

describe("widget sum tests", () => {
  let widget = new Widgets();
  beforeEach(async () => {
    await widget.navigate();
  });
  afterAll(async () => {
    await widget.driver.quit();
  });
  test("Test Sum", async () => {
    let int1 = 19;
    let int2 = 36;
    await widget.setSum(int1, int2);
    let results = await widget.getSum();
    expect(results).toContain("55");
  });
});
