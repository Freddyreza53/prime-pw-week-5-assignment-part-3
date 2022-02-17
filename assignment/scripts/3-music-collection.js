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
  console.log('----- Adding To Collection -----');
  return newAlbum;
} // end addToCollection function

function showCollection(albumArray) {
  console.log('----- My Collection -----');
  console.log(`${albumArray.length} Albums In My Collection`);
  console.log('-------------------------');

  for (let album of albumArray) {
    console.log(`${album.theTitle} by ${album.theArtist}, published in ${album.theYearPublished}:`);
    let c = 1; // I am using this as my numbers for listing tracks

    // i increments by 2 since every other index inside of track array is the track name
    for (let i = 0; i < album.theTracks.length; i += 2) {
      console.log(`${c}. ${album.theTracks[i]}: ${album.theTracks[i + 1]} `);
      c++; // increments after a track is listed
    } // end for-loop that loops through each track stored in theTracks
    console.log('-----------------------------------------');
  } // end for-loop that loops through albums in collection array
} // end showCollection function

function findByArtist(findArtist) {
  console.log('----- Find By Artist Name -----');

  let findArray = []; // array that will store albums that match input parameter findArtist

  for (let album of collection) {
    if (album.theArtist.toLowerCase() === findArtist.toLowerCase()){
      findArray.push(album); // pushes album that matches findArtist
    } // end if statement that checks if theArtist property matches findArtist
  } // end for-loop that loops through entire array collection
  console.log(`Searching for: ${findArtist}`);
  console.log('Search Results:');
  return findArray; // returns array with all albums that have findArtist or an empty array
} // end findByArtist function

function search(searchCriteria) {
  console.log('----- Searching For Album -----');

  let searchArray = []; // array for storing albums matching searchCriteria properties

  if (searchCriteria == undefined) {
    console.log(`Searching for: Artist         -
               Year Published -
               Track Name     -`);
    console.log('Search Results:');
    return collection; // returns entire collection if search input was empty
  } // end if statement that checks if there were no arguments when calling search function
  for (let album of collection) {
    if (album.theArtist.toLowerCase() === searchCriteria.artist.toLowerCase()
        && album.theYearPublished === searchCriteria.year){
      // i increments by 2 since every other index inside of track array is the track name(0, 2, 4, etc.)
      for (let i = 0; i < album.theTracks.length; i += 2) {
        if (album.theTracks[i].toLowerCase() === searchCriteria.track.toLowerCase()) {
          searchArray.push(album); // track from input object and track name in album match, pushes that album to new array
        } // end if statement that checks if input track name matches track in album at index i
      } // end for-loop that loops through each track stored in theTracks
    } // end if statement that checks if artist and year published of album match input artist and year
  } // end for-loop that loops through albums in collection array
  console.log(`Searching for: Artist         - ${searchCriteria.artist}
               Year Published - ${searchCriteria.year}
               Track Name     - ${searchCriteria.track}`);
  console.log('Search Results:');
  return searchArray;
} // end search function

// --------- Testing Functions Below ---------
showCollection(collection);

console.log(addToCollection('Donda', 'Kanye West', 2021,
                            ['Donda Chant', '0:52',
                             'Jail', '4:57',
                             'God Breathed', '5:33']));

console.log(addToCollection('Doo-Wops & Hooligans', 'Bruno Mars', 2010,
                            ['Grenade', '3:42',
                             'Just the Way You Are', '3:40']));

console.log(addToCollection('Sour', 'Olivia Rodrigo', 2021,
                            ['Brutal', '2:23']));

console.log(addToCollection('The College Dropout', 'Kanye West', 2004,
                            ['Intro', '0:19',
                             'Graduation Day', '1:21',
                             'All Falls Down', '3:43']));

console.log(addToCollection('30', 'Adele', 2021,
                            ['Strangers by Nature', '3:02',
                             'Easy on Me', '3:44']));

console.log(addToCollection('The Eminem Show', 'Eminem', 2002,
                            ['White America', '5:25']));

showCollection(collection);

console.log(findByArtist('Kanye West'));
console.log(findByArtist('Doja Cat'));

const searchAlbum = {
  artist : 'Kanye West',
  year   : 2021,
  track  : 'Jail'
} // end object that stores input parameters as object properties
const searchAlbum1 = {
  artist : 'Eminem',
  year   : 2002,
  track  : 'Grenade'
} // end object that stores input parameters as object properties
const searchAlbum2 = {
  artist : 'Linkin Park',
  year   : 2001,
  track  : 'In The End'
}// end object that stores input parameters as object properties
let searchAlbum3;

console.log(search(searchAlbum)); // test for matching all search criteria
console.log(search(searchAlbum1)); // test for some matching search criteria, not all
console.log(search(searchAlbum2)); // test for no matching search criteria
console.log(search(searchAlbum3)); // test for none search object as argument
console.log(search()); // test for empty search

console.log(addToCollection('Dangerous Woman', 'Ariana Grande', 2016,
                            ['Moonlight', '3:22',
                             'Dangerous Woman', '3:56',
                             'Be Alright', '2:59',
                             'Into You', '4:05']));
showCollection(collection);
