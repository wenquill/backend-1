const os = require('os');
const fs = require('fs');

try {
  const file = fs.readFileSync('./myFile.js', { encoding: 'utf-8' });
  console.log(file);
} catch (err) {
  console.log('err :>> ', err);
}

fs.readFile('./myFile.js', { encoding: 'utf-8' }, (err, fileData) => {
  if (err) {
    console.log('err :>> ', err);
  } else {
    console.log('\nfileData :>> ', fileData);
  }
});

console.log('__filename :>> ', __filename);
console.log('__dirname :>> ', __dirname);

console.log('\nreaddirSync: ', fs.readdirSync('./', null));

fs.readdir('./', (err, files) => {
  if (err) {
    console.log('err :>> ', err);
  } else {
    console.log('\nreaddir: ', files);
    for (let i in files) {
      console.log(
        `\nfile ${files[i]}:\n`,
        fs.readFileSync(files[i], { encoding: 'utf-8' })
      );
    }
  }
});
