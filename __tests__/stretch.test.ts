import { Widgets } from "./pages/Widgets";

describe("Evens and Odds scenarios", () => {
    let widget = new Widgets();
    beforeEach(async () => {
      await widget.navigate();
    });
    test("Decimals are not returned as evens or odds", async () => {
        await widget.splitEvensAndOdds([0.4, 1.3, 2.6, 3.3, 4.2, 5.7, 6.1, 7.2, 8, 9, 10]);
    let results = await widget.getEvensAndOdds();
        expect(results.odds).not.toContain("1");
        expect(results.evens).not.toContain("2");
        expect(results.odds).not.toContain("4");
        expect(results.evens).not.toContain("5");
      });
        test(`"String should return null`, async () => {
          let results = await widget.singleEvensOdds(true, "hello")
          expect(results.odd).toContain("null");
          expect(results.even).toContain("null");    
        });
afterAll(async () => {
  await widget.driver.quit();
});
});

// Only one field returns null value from non-number inputs, hence why this is a bug
// Only whole numebrs can be evens and odds - hence why the first test is a bug