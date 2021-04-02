import { Widgets } from "./pages/Widgets";

describe("widget filter tests", () => {
  let widget = new Widgets();
  beforeEach(async () => {
    await widget.navigate();
  });
  afterAll(async () => {
    await widget.driver.quit();
  });
  test("Can add two positive numbers", async() => {
      let results = await widget.findSum(3,4);
      expect(results).toContain("Sum: 7");
  });
    test("Can add negative numbers", async() => {
        let results = await widget.findSum(-1,-2);
        expect(results).toContain("Sum: -3");
    });
    test("Can add a positive and negative number", async() => {
        let results = await widget.findSum(4,-3);
        expect(results).toContain("Sum: 1");
    })
});