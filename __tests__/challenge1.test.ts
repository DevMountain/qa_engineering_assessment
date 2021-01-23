import { Widgets } from "./pages/Widgets";

describe("widget filter tests", () => {
  let widget = new Widgets();
  beforeEach(async () => {
    await widget.navigate();
  });
  afterAll(async () => {
    await widget.driver.quit();
  });
  test("Evens and odds can be split", async () => {
    await widget.splitEvensAndOdds([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    let results = await widget.getEvensAndOdds();
    expect(results.odds).toContain("1,3,5,7,9");
    expect(results.evens).toContain("0,2,4,6,8,10");
  });
  test("The objects can be filtered", async () => {
    await widget.setObjectFilter("hairColor");
    let results = await widget.getFilteredObjects();
    expect(results).toContain("Jeremy");
    expect(results).not.toContain("Jimmy");
    expect(results).not.toContain("Carly");
  });
  test("The names can be filtered", async () => {
    await widget.setNameFilter("a");
    let results = await widget.getFilteredNames();
    expect(results).toContain("Jessica");
    expect(results).not.toContain("Jennifer");
  });
});
