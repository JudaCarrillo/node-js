import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("js-foundation/03-callbacks.ts", () => {
  it("getUserById should return an error if user does not exist", (done) => {
    const id = 10;
    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });

  it("getUserById should return a user", (done) => {
    const id = 1;
    getUserById(id, (err, user) => {
      // Destructuring - ! is used to tell TS that user is not null
      // const { id, name } = user!;

      expect(err).toBeUndefined();
      expect(user).toEqual({ id, name: "John Doe" });
      done();
    });
  });
});
