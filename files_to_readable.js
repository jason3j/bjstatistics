var fs = require("fs");

// read file in
// remove punctuation(only leave alphabet characters and single spaces and 't),
// lowercase everything, write to new text file, get rid of /r/n

fs.readFile("got_text_files/storm_of_swords.txt", function (err, data) {
    if(err) {
        return console.log(err);
    }
    var initialBookText = data.toString();

    var cleanText = initialBookText.toLowerCase().replace(/[^A-z’]/g, " ").replace(/’s/g, " ").replace(/\s\s/g, " ").replace(/\s\s\s/g, " ");

    console.log(cleanText);

    fs.writeFile("got_text_files/storm_of_swords_clean.txt", cleanText, function (err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});


