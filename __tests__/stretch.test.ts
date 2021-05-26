import { Widgets } from "./pages/Widgets";

describe("filter numbers", async () => {
    let widget = new Widgets();
  beforeEach(async () => {
    await widget.navigate();
  });

  test("Evens and odds can be split", async () => {
    await widget.splitEvensAndOdds([0, 1, 2, 3, 4,]);
    await widget.getEvensAndOdds();

  });
  
}




)
