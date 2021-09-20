// npm --global command, comes with node
// npm --version

// local dependecy - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file(stores important info about project/packages)'
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y ( everything default)



// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it
customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id:${id}`)
  })
  
  customEmitter.on('response', () => {
    console.log('some other logic here')
  })


customEmitter.emit('response', 'Shreya', 45)