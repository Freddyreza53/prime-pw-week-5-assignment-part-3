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
} // end addToCollection function

function showCollection(albumArray) {
  console.log('----- My Collection -----');
  console.log(`${albumArray.length} Albums In My Collection`);
  console.log('-------------------------');

  for (let i = 0; i < albumArray.length; i++) {
    console.log(`${albumArray[i].theTitle} by ${albumArray[i].theArtist}, published in ${albumArray[i].theYearPublished}:`);
    let c = 1; // I am using this as my numbers for listing tracks

    for (let j = 0; j < albumArray[i].theTracks.length; j += 2) { // j increments by 2 since every other index inside of track array is the track name
      console.log(`${c}. ${albumArray[i].theTracks[j]}: ${albumArray[i].theTracks[j + 1]} `);
      c++; // increments after a track is listed
    } // end for-loop that loops through each track stored in theTracks
    console.log('-----------------------------------------');
  } // end for-loop that loops through albums in collection array
} // end showCollection function

function findByArtist(findArtist) {
  let findArray = []; // array that will store albums that match input parameter findArtist

  for (let i = 0; i < collection.length; i++) {
    if (collection[i].theArtist.toLowerCase() === findArtist.toLowerCase()){
      findArray.push(collection[i]); // pushes album that matches findArtist
    } // end if statement that checks if theArtist property matches findArtist
  } // end for-loop that loops through entire array collection
  return findArray; // returns array with all albums that have findArtist or an empty array
} // end findByArtist function

function search(searchCriteria) {
  let searchArray = []; // array for storing albums matching searchCriteria properties
  let counter = 0; // keeps track of failed matches

  if (searchCriteria == undefined) {
    return collection; // returns entire collection if search input was empty
  } // end if statement that checks if there were no arguments when calling search function
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].theArtist.toLowerCase() === searchCriteria.artist.toLowerCase() && collection[i].theYearPublished === searchCriteria.year){
      for (let j = 0; j < collection[i].theTracks.length; j += 2) {
        if (collection[i].theTracks[j].toLowerCase() === searchCriteria.track.toLowerCase()) {
          searchArray.push(collection[i]); // track from input object and track name in album match, pushes that album to new array
        } // end if statement that checks if input track name matches track in album at index i
      } // end for-loop that loops through each track stored in theTracks
    } // end if statement that checks if artist and year published of album match input artist and year
    else {
      counter++; // increments each time there are no matches
    } // else statement
  } // end for-loop that loops through albums in collection array
  if (searchArray.length > 0 || counter > 0) {
    return searchArray; // returns empty array if searchCriteria doesn't match albums in collection
  }// end if statement that checks to see if there were inputs for search or if there were any failed matches
} // end search function

// --------- Testing Functions Below ---------
showCollection(collection);

console.log(addToCollection('Donda', 'Kanye West', 2021, ['Donda Chant', '0:52', 'Jail', '4:57', 'God Breathed', '5:33']));
console.log(addToCollection('Doo-Wops & Hooligans', 'Bruno Mars', 2010, ['Grenade', '3:42', 'Just the Way You Are', '3:40']));
console.log(addToCollection('Sour', 'Olivia Rodrigo', 2021, ['Brutal', '2:23']));
console.log(addToCollection('The College Dropout', 'Kanye West', 2004, ['Intro', '0:19', 'Graduation Day', '1:21', 'All Falls Down', '3:43']));
console.log(addToCollection('30', 'Adele', 2021, ['Strangers by Nature', '3:02', 'Easy on Me', '3:44']));
console.log(addToCollection('The Eminem Show', 'Eminem', 2002, ['White America', '5:25']));

showCollection(collection);

console.log('----- Find By Artist Name -----');
console.log(findByArtist('kanye west'));
console.log(findByArtist('Doja Cat'));
console.log('-------------------------------');

console.log('----- Searching For Album -----');

const searchAlbum = {
  artist : 'kanye west',
  year   : 2021,
  track  : 'jail'
} // end object that stores input parameters as object properties
const searchAlbum1 = {
  artist : 'Linkin Park',
  year   : 2001,
  track  : 'In The End'
}// end object that stores input parameters as object properties
let searchAlbum2;

console.log(search(searchAlbum)); // test for matching all search criteria
console.log(search(searchAlbum1)); // test for no matching search criteria
console.log(search(searchAlbum2)); // test for none object as argument
console.log(search()); // test for no argument

console.log(addToCollection('Dangerous Woman', 'Ariana Grande', 2016, ['Moonlight', '3:22', 'Dangerous Woman', '3:56', 'Be Alright', '2:59', 'Into You', '4:05']));
showCollection(collection);
