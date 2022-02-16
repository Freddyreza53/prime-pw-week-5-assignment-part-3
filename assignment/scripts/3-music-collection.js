console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
  const newAlbum = {
    theTitle         : title,
    theArtist        : artist,
    theYearPublished : yearPublished
  } // end newAlbum object
  collection.push(newAlbum)

  return newAlbum;
}

console.log(addToCollection('Donda', 'Kanye West', 2021 ));
console.log(addToCollection('Doo-Wops & Hooligans', 'Bruno Mars', 2010 ));
console.log(addToCollection('Sour', 'Olivia Rodrigo', 2021 ));
console.log(addToCollection('The College Dropout', 'Kanye West', 2004 ));
console.log(addToCollection('30', 'Adele', 2021 ));
console.log(addToCollection('The Eminem Show', 'Eminem', 2002 ));

console.log(collection);

function showCollection(albumArray) {
  let removed;

  console.log(albumArray.length);

  for (let i = 0; i < albumArray.length; i++) {
  removed = albumArray[i];

  console.log(`${removed.theTitle} by ${removed.theArtist}, published in ${removed.theYearPublished}`);
  }

}

showCollection(collection);

function findByArtist(findArtist) {
  let findArray = [];
  let found;

  for (let i = 0; i < collection.length; i++) {
    found = collection[i];
    if (found.theArtist === findArtist){
      findArray.push(collection[i]);
    }
  }
  return findArray;
}

console.log(findByArtist('Kanye West'));
console.log(findByArtist('Doja Cat'));

function search(searchArtist, searchYear) {
  const searchCriteria = {
    artist : searchArtist,
    year   : searchYear
  }

  let searchArray = [];
  let searchFound;
  let counter = 0;

  if (searchCriteria.artist == undefined && searchCriteria.year == undefined) {
    return collection;
  }

  for (let i = 0; i < collection.length; i++) {
    searchFound = collection[i];
    if (searchFound.theArtist === searchArtist && searchFound.theYearPublished === searchYear){
      searchArray.push(collection[i]);
    }
    else {
      counter++;
    }

  }
  if (searchArray.length > 0 || counter > 0) {
    return searchArray;
  }

}

console.log(search('Kanye West', 2021));
console.log(search('hi', 2));
console.log(search());
