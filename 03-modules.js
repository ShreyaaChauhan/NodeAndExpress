// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
console.log(data)
console.log(data.items)
console.log(data.singlePerson.name)
require('./07-mind-gernade')
sayHi(names.Priya)
sayHi(names.Shivani)
