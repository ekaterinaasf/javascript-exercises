const getTheTitles = function(arr) {
  let rez = [];
  for (let i in arr) {
    rez.push(arr[i].title);
  }
  return rez;
};

module.exports = getTheTitles;

/* //For testing:

function getTheTitles(arr) {
    let rez=[];
    for (let i in arr) {
    rez.push(arr[i].title);
    }
    return rez;
}

const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ];
    getTheTitles(books);
*/
