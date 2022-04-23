const fs = require("fs-extra");

module.exports = class Files {
  constructor() {}

  write(file, data, callback) {
    if (this.check([file])) {
      fs.ensureFileSync(file);
      var fileData = this.read(file);
      fs.writeFileSync(file, fileData + "\n\n" + data, callback);
    } else throw new Error("Eksik giriş.");
  }
  
  read(file) {
    if (this.check([file])) {
      return fs.readFileSync(file, "utf8");
    } else throw new Error("Eksik giriş.");
  }

  check(data) {
    var a = true;
    data.forEach((x) => {
      if (!x) a = false;
    });
    return a;
  }
};
