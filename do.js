const glob = require('glob');
const fs = require('fs');


glob('./data/**/*.js', {}, (err, files) => {
  files.forEach(file => {
    let source = fs.readFileSync(file, 'utf8');

    let text = source.replace(/(powers_granted)/, ($0, $1) => {
      // let id = $1.toLowerCase();
      // let id = $2.toLowerCase().replace(/\W/g, '-').replace(/-{1,}/g, '-');
      console.log($1);
      return `powers`;
    });

    // console.log(text);

    fs.writeFileSync(file, text, 'utf8');
  });
});
