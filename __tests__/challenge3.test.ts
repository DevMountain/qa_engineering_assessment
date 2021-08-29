import { Widgets } from "./pages/Widgets";
import * as palindromes from "./assets/palindromes.json";

describe("sum testing", () => {
  let widget = new Widgets();
  beforeEach(async () => {
    await widget.navigate();
  });
  afterAll(async () => {
    await widget.driver.quit();
  });
  test("Can add 5 + 5", async ()=>{
    await widget.add(5,5)
    let sum = await widget.getSum()
    expect(sum).toContain('10')
  });
  test("Can add 4 + 9", async  ()=>{
    await widget.add(4,9)
    let sum = await widget.getSum()
    expect(sum).toContain('13')
  })
  test("Can add 4 + 4", async  ()=>{
    await widget.add(4,4)
    let sum = await widget.getSum()
    expect(sum).toContain('8')
  })
});
