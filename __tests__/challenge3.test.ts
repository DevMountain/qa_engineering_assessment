import { Widgets } from "./pages/Widgets";

describe("sum testing", () => {
    let widget = new Widgets();
    beforeEach(async () => {
      await widget.navigate();
    });
    afterAll(async () => {
      await widget.driver.quit();
    });

    test("2 + 2 = 4", async () => {
        let result = await widget.sum(2, 2);
        expect(result).toBe("Sum: 4");
    });
    test("9 + 10 != 21", async () => {
        let result = await widget.sum(9, 10);
        expect(result).not.toBe("Sum: 21");
        expect(result).toBe("Sum: 19");
    });
    test("1287438 + 321879 = 1609317", async () => {
        let result = await widget.sum(1287438, 321879);
        expect(result).toBe("Sum: 1609317");
    });
})