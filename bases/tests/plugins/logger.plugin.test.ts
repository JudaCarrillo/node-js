import { buildLogger, logger as winstonLogger } from "../../src/plugins";

describe("plugins/logger.plugin.ts", () => {
  it("buildLogger should return a function logger", () => {
    const logger = buildLogger("test");

    expect(logger.error).toBeInstanceOf(Function);
    expect(logger.log).toBeInstanceOf(Function);
  });

  it("logger.log should log a message", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "log");
    const message = "test message";
    const service = "test";

    const logger = buildLogger(service);
    logger.log(message);
    expect(winstonLoggerMock).toHaveBeenCalled();

    const expectedResult = {
      level: "info",
      message,
      service,
    };

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining(expectedResult)
    );
  });

  it("logger.error should log an error message", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "log");
    const message = "test message";
    const service = "test";

    const logger = buildLogger(service);
    logger.error(message);
    expect(winstonLoggerMock).toHaveBeenCalled();

    const expectedResult = {
      level: "error",
      message,
      service,
    };

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "error",
      expect.objectContaining(expectedResult)
    );
  });
});
