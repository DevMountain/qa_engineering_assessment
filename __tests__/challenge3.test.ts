import { Widgets } from "./pages/Widgets";
import * as numbersToSum  from "./assets/numbersToSum.json";
import { setConstantValue } from "typescript";

describe("sum tests", () => {
    let widget = new Widgets();
    beforeEach(async () => {
      await widget.navigate();
    });
    afterAll(async () => {
      await widget.driver.quit();
    });
    numbersToSum.forEach((numSet) =>{
        test(`Test valid numbers by setting number values ${numSet[0]} + ${numSet[1]}`, async () => {
            let useArrows = false;

            await widget.setFirstNumToSum(numSet[0], useArrows);
            await widget.setSecondNumToSum(numSet[1], useArrows);
            await widget.clickSumButton();
    
            let sumResult = await widget.getSumResult();
            expect(sumResult).toBe("Sum: "+ (numSet[0] + numSet[1]));
        });
    });
    numbersToSum.forEach((numSet) =>{
        test(`Test valid numbers by using number picker for number values ${numSet[0]} + ${numSet[1]}`, async () => {
            let useArrows = true;
            await widget.setFirstNumToSum(numSet[0], useArrows);
            await widget.setSecondNumToSum(numSet[1], useArrows);
            await widget.clickSumButton();
    
            let sumResult = await widget.getSumResult();
            expect(sumResult).toBe("Sum: "+ (numSet[0] + numSet[1]));
        });
    });
})