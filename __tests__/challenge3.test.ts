import { Widgets } from "./pages/Widgets";

describe("sums working", () => {
  let myWidget = new Widgets();
  beforeEach(async () => {
    await myWidget.navigate();
  });
  afterAll(async () => {
    await myWidget.driver.quit();
  });
  test("we get a valid sum", async () => {
    await myWidget.add(1, 2);
    let results = await myWidget.getSumResult();
    expect(results).toBe(3);
  });
});