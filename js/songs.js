// Use JavaScript arrays, loops, and innerHTML to show the music you love.
// Students must use JavaScript to create a list of songs in the `index.html` file for their Music History project.
var songs = [];
var injectMe = document.getElementById("song-cards");
injectMe.innerHTML = '';

// 1. Each student must add one song to the beginning and the end of the array.
songs[songs.length] = "You Enjoy My%self > by Phi!sh on the album Junta";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// 1. Each student must add one song to the beginning and the end of the array.
songs[songs.length] = "Heart of the Sunrise > by Y?es on the album Fragile";

// 2. Loop over the array and remove any words or characters that obviously don't belong.
for(var counter1 = 0; counter1 < songs.length; counter1++){
  for(var counter2 = 0; counter2 < songs[counter1].length; counter2++){
    if(songs[counter1].charAt(counter2) === "!" || songs[counter1].charAt(counter2) === "*" || songs[counter1].charAt(counter2) === "@" || songs[counter1].charAt(counter2) === "(" || songs[counter1].charAt(counter2) === "?" || songs[counter1].charAt(counter2) === ")" || songs[counter1].charAt(counter2) === "%") {
        songs[counter1] = songs[counter1].slice(0, counter2) + songs[counter1].slice(counter2+1, songs[counter1].length);
    };
// 3. Students must find and replace the `>` character in each item with a `-` character.
    if(songs[counter1].charAt(counter2) === ">") {
      songs[counter1] = songs[counter1].slice(0, counter2) + "-" + songs[counter1].slice(counter2+1, songs[counter1].length);
    };
  };
  // inject
  var newDOMNode = document.createElement("article");
  newDOMNode.className = "card";
  var newNode = document.createTextNode(songs[counter1]);
  newDOMNode.appendChild(newNode);
  injectMe.appendChild(newDOMNode);
};
// 4. Must add each string to the DOM in `index.html` in the main content area.

//  ------------------------------------------------
// |  {Song name} by {Artist} on the album {Album}  |
//  ------------------------------------------------

// now use document.string.split(separator: string, limit: int) to do this for real.
