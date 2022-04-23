const chalk = require("chalk");

const filesModule = require("./files");
const files = new filesModule();

const moment = require("moment");
moment.locale("tr");

//files.write(process.cwd() + "/a.log", "ZORT", (data) => {});

module.exports = class Logger {
  constructor(s) {
    files.check([s.logPath]);
    this.LOGPATH = s.logPath;
    this.name = s.name;
    this.colorName = chalk.magenta(s.name);
    this.paths = {
      info: s.logPath + "/info.log",
      debug: s.logPath + "/debug.log",
      error: s.logPath + "/error.log",
      warn: s.logPath + "/warn.log",
    };
  }

  info(text, data, callback) {
    if (data) {
      var Text = `[${chalk.hex("#00ff00")("INFO")}]`;

      this.writePrivate(text, data, "info", callback);

      console.log(`${Text} ${this.colorName} ${this.colorTime()} ${text}`, data);
      return true;
    } else {
      var Text = `[${chalk.hex("#00ff00")("INFO")}]`;

      this.writePrivate(text, null, "info", callback);

      console.log(`${Text} ${this.colorName} ${this.colorTime()} ${text}`);
      return true;
    }
  }
  debug(text, data, callback) {
    if (data) {
      var Text = `[${chalk.hex("808080")("DEBUG")}]`;

      this.writePrivate(text, data, "debug", callback);

      console.log(`${Text} ${this.colorName} ${this.colorTime()} ${text}`, data);
      return true;
    } else {
      var Text = `[${chalk.hex("808080")("DEBUG")}]`;

      this.writePrivate(text, null, "debug", callback);

      console.log(`${Text} ${this.colorName} ${this.colorTime()} ${text}`);
      return true;
    }
  }

  error(text, data, callback) {
    if (data) {
      var Text = `[${chalk.hex("ff0000")("ERROR")}]`;

      this.writePrivate(text, data, "error", callback);

      console.log(`${Text} ${this.colorName} ${this.colorTime()} ${text}`, data);
      return true;
    } else {
      var Text = `[${chalk.hex("ff0000")("ERROR")}]`;

      this.writePrivate(text, null, "error", callback);

      console.log(`${Text} ${this.colorName} ${this.colorTime()} ${text}`);
      return true;
    }
  }
  warn(text, data, callback) {
    if (data) {
      var Text = `[${chalk.hex("ff7f00")("WARN")}]`;

      this.writePrivate(text, data, "warn", callback);

      console.log(`${Text} ${this.colorName} ${this.colorTime()} ${text}`, data);
      return true;
    } else {
      var Text = `[${chalk.hex("ff7f00")("WARN")}]`;

      this.writePrivate(text, null, "warn", callback);

      console.log(`${Text} ${this.colorName} ${this.colorTime()} ${text}`);
      return true;
    }
  }

  writePrivate(text, data, type, callback) {
    var writeText = "";
    if (data) {
      writeText += `[${this.time()}] ${text}

      ${JSON.stringify(data)}`;
    } else {
      writeText += `[${this.time()}] ${text}`;
    }

    return files.write(this.paths[type], writeText, callback);
  }
  colorTime() {
    return chalk.blue(`[${this.time()}]`);
  }

  time() {
    return moment().format("dddd, MMMM Do, h:mm:ss");
  }
};
