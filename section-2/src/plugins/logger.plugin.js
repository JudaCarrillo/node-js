const winston = require("winston");
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  // defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //

    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

logger.add(new winston.transports.Console({ format: winston.format.simple() }));

function buildLogger(service) {
  return {
    log: (message) => {
      logger.log("info", { message, service });
    },
    error: (message) => {
      logger.log("error", {
        message,
        service,
        at: new Date().toISOString(),
      });
    },
  };
}

module.exports = {
  buildLogger,
};
