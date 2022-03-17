const basePath = process.cwd();
console.log("basePath ?? = ", basePath);
const { startCreating, buildSetup } = require(`${basePath}/smartcontract/src/main.js`);

(() => {
  buildSetup();
  startCreating();
})();
