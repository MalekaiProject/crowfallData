const glob = require('glob');
const fs = require('fs');


glob('./data/Powers/**/*.js', {}, (err, files) => {

  files.forEach(file => {
    let source = fs.readFileSync(file, 'utf8');
    // console.log(source);

    let text = source.replace(/(\{ type: \".*\", id: \")(.*)(\" })/, ($0, $1, $2, $3) => {
      let id = $2.toLowerCase().replace(/\W/g, '-').replace(/-{1,}/g, '-');
      // console.log($2, id);
      return `${$1}${id}${$3}`;
    });

    // console.log(text);

    fs.writeFileSync(file, text, 'utf8');
  });
});
