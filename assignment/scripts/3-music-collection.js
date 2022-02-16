console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
  const newAlbum = {
    theTitle         : title,
    theArtist        : artist,
    theYearPublished : yearPublished,
    theTracks        : tracks
  } // end newAlbum object
  collection.push(newAlbum)

  return newAlbum;
}
console.log(addToCollection('Donda', 'Kanye West', 2021, ['Donda Chant', '0:52', 'Jail', '4:57', 'God Breathed', '5:33']));
console.log(addToCollection('Doo-Wops & Hooligans', 'Bruno Mars', 2010, ['Grenade', '3:42', 'Just the Way You Are', '3:40']));
console.log(addToCollection('Sour', 'Olivia Rodrigo', 2021, ['Brutal', '2:23']));
console.log(addToCollection('The College Dropout', 'Kanye West', 2004, ['Intro', '0:19', 'Graduation Day', '1:21', 'All Falls Down', '3:43']));
console.log(addToCollection('30', 'Adele', 2021, ['Strangers by Nature', '3:02', 'Easy on Me', '3:44']));
console.log(addToCollection('The Eminem Show', 'Eminem', 2002, ['White America', '5:25']));
console.log(collection);

function showCollection(albumArray) {
  console.log(`${albumArray.length} Albums In My Collection`);

  for (let i = 0; i < albumArray.length; i++) {
    console.log(`${albumArray[i].theTitle} by ${albumArray[i].theArtist}, published in ${albumArray[i].theYearPublished}:`);
    let c = 1;

    for (let j = 0; j < albumArray[i].theTracks.length; j += 2) {
      console.log(`${c}. ${albumArray[i].theTracks[j]}: ${albumArray[i].theTracks[j + 1]} `);
      c++;
    }
    console.log('-----------------------------------------');
  }
}
console.log('----- My Collection -----');
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
console.log('----- Find By Artist Name -----');
console.log(findByArtist('Kanye West'));
console.log(findByArtist('Doja Cat'));
console.log('-------------------------------');

function search(searchArtist, searchYear, searchTrack) {
  const searchCriteria = {
    artist : searchArtist,
    year   : searchYear,
    track  : searchTrack
  }

  let searchArray = [];
  let counter = 0;
  let trackCount = 0;

  if (searchCriteria.artist == undefined && searchCriteria.year == undefined && searchCriteria.track == undefined) {
    return collection;
  }

  for (let i = 0; i < collection.length; i++) {

    if (collection[i].theArtist === searchArtist && collection[i].theYearPublished === searchYear){
      for (let j = 0; j < collection[i].theTracks.length; j += 2) {
        if (collection[i].theTracks[j] === searchTrack) {
          searchArray.push(collection[i]);
        }
      }
    }
    else {
      counter++;
    }
  }
  if (searchArray.length > 0 || counter > 0) {
    return searchArray;
  }
}
console.log('----- Searching For Album -----');
console.log(search('Kanye West', 2021, 'Jail'));
console.log(search('hi', 2));
console.log(search());
