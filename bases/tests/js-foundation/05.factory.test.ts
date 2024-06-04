import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("js-foundation/05-factory.ts", () => {
  const getUUID = () => "123";
  const getAge = (birthdate: string) => 30;

  it("buildMakePerson should return a function", () => {
    const makePerson = buildMakePerson({ getAge, getUUID });
    expect(makePerson).toBeInstanceOf(Function);
  });

  it("makePerson should return a person", () => {
    const makePerson = buildMakePerson({ getAge, getUUID });

    const expectedResult = {
      id: "123",
      name: "John Doe",
      birthdate: "1990-01-01",
      age: 30,
    };

    const person = makePerson({ name: "John Doe", birthdate: "1990-01-01" });
    expect(person).toEqual(expectedResult);
  });
});
