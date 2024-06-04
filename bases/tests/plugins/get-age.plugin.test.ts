import { getAge } from "../../src/plugins";

describe("plugins/get-age.plugin.ts", () => {
  const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(2006);

  it("getAge should return the age of a person", () => {
    const birthDate = "2006-01-08";
    const age = getAge(birthDate);
    expect(typeof age).toBe("number");
  });

  it("getAge should return current age", () => {
    const birthDate = "2006-01-08";
    const age = getAge(birthDate);

    const calculaterAge =
      new Date().getFullYear() - new Date(birthDate).getFullYear();

    expect(age).toBe(calculaterAge);
  });

  it("getAge should return 0 years", () => {
    const birthDate = "2006-01-08";
    const age = getAge(birthDate);

    expect(age).toBe(0);
    expect(spy).toHaveBeenCalled();
  });
});
