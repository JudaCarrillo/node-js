import { httpClient } from "../../src/plugins";

describe("plugins/http-client.plugin.ts", () => {
  const httpClientNoAuth = httpClient();

  it("httpClient should return a function", () => {
    expect(httpClient).toBeInstanceOf(Function);
  });

  it("httpClient should return a string", async () => {
    const response = await httpClientNoAuth.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const expectedResult = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    };

    expect(response).toEqual(expectedResult);
  });

  it("httpClient should have POST, PUT and DELETE methods", () => {
    expect(httpClientNoAuth.post).toBeInstanceOf(Function);
    expect(httpClientNoAuth.put).toBeInstanceOf(Function);
    expect(httpClientNoAuth.delete).toBeInstanceOf(Function);
  });
});
