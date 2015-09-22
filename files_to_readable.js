var fs = require("fs");


// read file in
// remove punctuation(only leave alphabet characters and single spaces),
// lowercase everything, write to new text file, get rid of /r/n

fs.readFile("got_text_files/game_of_thrones", function (err, data) {
    if(err) {
        return console.log(err);
    }

    console.log(data.toString());

});
