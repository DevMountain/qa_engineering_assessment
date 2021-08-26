import { Widgets } from "./pages/Widgets";

describe("sum", async () => {
    let widget = new Widgets();
    beforeEach(async () => {
        await widget.navigate();
    });
    afterAll(async () => {
        await widget.driver.quit();
    });

    test("1+1", async () => {
        await widget.inputNumbers(1, 1);
        let results = await widget.getSum();
        expect(results).toBe("Sum: 2");
    });

    test("5+2", async () => {
        await widget.inputNumbers(5, 2);
        let results = await widget.getSum();
        expect(results).toBe("Sum: 7");
    });

    test("40+27", async () => {
        await widget.inputNumbers(40, 27);
        let results = await widget.getSum();
        expect(results).toBe("Sum: 67");
    });
});