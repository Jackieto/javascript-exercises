const getTheTitles = function(books) {

    let titles = [];

    for (let index = 0; index < books.length; index++) {
        titles.push(books[index].title);
    }

    return titles;



};

// Do not edit below this line
module.exports = getTheTitles;
