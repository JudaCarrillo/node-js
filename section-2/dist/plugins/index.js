"use strict";
const { getUUID } = require("./get-id.plugin");
const { getAge } = require("./get-age.plugin");
const { httpClient } = require("./http-client.plugin");
const { buildLogger } = require("./logger.plugin");
module.exports = {
    getAge,
    getUUID,
    httpClient,
    buildLogger,
};
