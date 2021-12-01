import { Widgets } from "./pages/Widgets";

describe("widget filter tests", () => {
  let widget = new Widgets();
  beforeEach(async () => {
    await widget.navigate();
  });
  afterAll(async () => {
    await widget.driver.quit();
  });
  //In the expect statements evens and odds were flipped causing 
  //the expect statements to be incorrect. Changes have been made to 
  //correct this. The test is now passing.
  test("Evens and odds can be split", async () => {
    await widget.splitEvensAndOdds([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    let results = await widget.getEvensAndOdds();
    expect(results.evens).toContain("0,2,4,6,8,10");
    expect(results.odds).toContain("1,3,5,7,9");
  });
  test("The objects can be filtered", async () => {
    //the filter input "haircolor" was changed to "hairColor" to fix the error that
    //was occurring due to "haircolor" not being an exact match to the input associated
    //with Jeremy.
    await widget.setObjectFilter("hairColor");
    let results = await widget.getFilteredObjects();
    expect(results).toContain("Jeremy");
    expect(results).not.toContain("Jimmy");
    expect(results).not.toContain("Carly");
  });
  test("The names can be filtered", async () => {
    //Adjustments were made to the Widgets file to correct the error in this test.
    //The name filter input and name filter button had incorrect locators
    //causing the test to fail. This is now a running test as a result
    //of these changes.
    await widget.setNameFilter("a");
    let results = await widget.getFilteredNames();
    expect(results).toContain("Jessica");
    expect(results).not.toContain("Jennifer");
  });
});
