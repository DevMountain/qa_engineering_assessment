import { Widgets } from "./pages/Widgets";

describe("summation", () => {
  let widget = new Widgets();
  beforeEach(async () => {
    await widget.navigate();
  });
  afterAll(async () => {
    await widget.driver.quit();
  });
  test("validate summation", async () => {
    await widget.addNumbers(3, 5);
    let results = await widget.getSum();
    expect(results).toBe(8);
    await widget.driver.sleep(3000)
  });

  
});