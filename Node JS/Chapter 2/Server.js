const fsPromises = require('fs').promises
const path = require('path');

const fileOps = async() => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname,'../Files','Start.txt'), 'utf8')
      console.log(data);
    await fsPromises.writeFile(path.join(__dirname,'../Files','Ch2.txt'), 'Chapter 2 -> Read File and Write File')
      console.log('Write Completed');
    await fsPromises.appendFile(path.join(__dirname,'../Files','Ch2.txt'), '\n\n\nUpdate File(appendFile)')
      console.log('Append Completed');
    await fsPromises.rename(path.join(__dirname,'../Files','Ch2.txt'), path.join(__dirname,'../Files','Chapter2.txt'))
      console.log('Rename Completed');
    await fsPromises.unlink(path.join(__dirname,'../Files','delete.txt'), 'utf8')
    console.log('Delete Completed');
    
  }
  catch(err) {
    console.error(err);
  }
}
fileOps();

console.log("Hii");

//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1)
})