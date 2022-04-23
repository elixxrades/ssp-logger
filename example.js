const loggerModule = require(".");
const logger = new loggerModule({
  logPath: process.cwd() + "/logs",
  name: "test",
});

logger.debug("without data");
logger.debug("with data", { BUM: "BUM" });

logger.info("without data");
logger.info("with data", { BUM: "BUM" });

logger.errpr("without data");
logger.errpr("with data", { BUM: "BUM" });

logger.warn("without data");
logger.warn("with data", { BUM: "BUM" });
