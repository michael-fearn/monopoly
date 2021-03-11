import { Board } from "./board";

describe("Board", () => {
    test("has Tiles", () => {
        expect(new Board().tiles).toBeDefined();
        expect(new Board().tiles).toHaveLength(10);
    });
});
