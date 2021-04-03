import { Widgets } from "./pages/Widgets";

describe("widget add tests", () => {
  let widget = new Widgets();
  beforeEach(async () => {
    await widget.navigate();
  });
  afterAll(async () => {
    await widget.driver.quit();
  });
  test("Sum two numbers", async () => {
     await widget.setTwoNumbersForSum(1, 3);
    let result = await widget.getSumResult();
    expect(result).toContain(4);
    
  });
});
