import { getUUID } from "../../src/plugins";

describe("plugins/get-uuid.plugin.ts", () => {
  it("getUUID should return a UUID", () => {
    const uuid = getUUID();
    expect(typeof uuid).toBe("string");
    expect(uuid.length).toBe(36);
  });

  
});
