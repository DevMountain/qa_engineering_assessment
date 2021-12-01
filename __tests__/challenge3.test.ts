import { Widgets } from "./pages/Widgets";

describe("widget filter tests", () => {
  let widget = new Widgets();
  beforeEach(async () => {
    await widget.navigate();
  });
  afterAll(async () => {
    await widget.driver.quit();
  });
  /**
   * This test passes two small numerical values into the calculateSum method created in
   * the Widgets file. Results are retreived by the getSumResult method and
   * checked for accuracy by the expect statement.
   */
  test("A small sum can be calculated", async () => {
    await widget.calculateSum(1,2);
    let results = await widget.getSumResult();
    expect(results).toContain("3");
  });
   /**
   * This test passes two large numerical values into the calculateSum method created in
   * the Widgets file. Results are retreived by the getSumResult method and
   * checked for accuracy by the expect statement.
   */
  test("A large sum can be calculated", async () => {
    await widget.calculateSum(10000000,20000000);
    let results = await widget.getSumResult();
    expect(results).toContain("30000000");
  });
    /**
   * This test passes two negative numerical values into the calculateSum method created in
   * the Widgets file. Results are retreived by the getSumResult method and
   * checked for accuracy by the expect statement.
   */
  test("A sum can be calculated between negative numbers", async () => {
    await widget.calculateSum(-1,-2);
    let results = await widget.getSumResult();
    expect(results).toContain("-3");
  });
    /**
   * This test passes a positive and negative numerical value
   *  into the calculateSum method created in
   * the Widgets file. Results are retreived by the getSumResult method and
   * checked for accuracy by the expect statement.
   */
  test("A sum can be calculated between a negative and positive number", async () => {
    await widget.calculateSum(-1,2);
    let results = await widget.getSumResult();
    expect(results).toContain("1");
  });
});