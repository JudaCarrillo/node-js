import { characters } from "../../src/js-foundation/02-destructuring";

describe("js-foundation/02-destructuring.ts", () => {
  it("characters should contain a list of characters", () => {
    expect(characters).toEqual([
      "Flash",
      "Superman",
      "Green Lantern",
      "Batman",
    ]);
  });

  it("characters should contain Batman and Superman", () => {
    expect(characters).toContain("Batman");
    expect(characters).toContain("Superman");
  });

  it("first character should be Flash, and second Superman", () => {
    const [flash, superman] = characters;

    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});
