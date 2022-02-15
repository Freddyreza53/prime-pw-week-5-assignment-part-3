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
