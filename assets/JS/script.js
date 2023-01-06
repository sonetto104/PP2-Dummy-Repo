const intervalButton = document.getElementById("quaver-button");
const notes = document.getElementsByTagName("audio");
const notesArray = Array.from(notes);
let randomNote = notesArray[Math.floor(Math.random() * notesArray.length)];
let randomNoteTwo = notesArray[Math.floor(Math.random() * notesArray.length)];
let firstSemitoneValue = parseInt(randomNote.getAttribute("data-number"));
let secondSemitoneValue = parseInt(randomNoteTwo.getAttribute("data-number"));
let intervalNumber = firstSemitoneValue - secondSemitoneValue;
const submitButton = document.getElementById("submit");

//* Add event listener to interval button that will randomly select 
// two notes to form interval 
intervalButton.addEventListener("click", function() {
    randomNote.play();
    setTimeout(function () {
        randomNoteTwo.play()
    }, 1000);
})


//* Instruct browser to listen to any change in user's choice of interval
// quality so that correct answer can be checked later on.
// This code block was taken from https://bobbyhadz.com/blog/javascript-select-onchange-get-value

const userIntervalQuality = document.getElementById('interval-quality');

userIntervalQuality.addEventListener('change', function handleChange(event) {
  (event.target.value); //  get selected VALUE
  /** get selected VALUE even outside event handler
  //console.log(userIntervalQuality.options[userIntervalQuality.selectedIndex].value);
  */
  });

  const userIntervalNumber = document.getElementById("interval-number");
  userIntervalNumber.addEventListener("change", function handleChange(event) {
    (event.target.value);
  })

   submitButton.addEventListener("click", function() {

    if (intervalNumber === 0 && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "perfect"
     && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "unison") {
        alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");

       } else if ((intervalNumber === 1 || intervalNumber === -1) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "minor"
    && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "2nd") {
        alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");

       } else if ((intervalNumber === 2 || intervalNumber === -2) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "major"
       && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "2nd") {
           alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
           
       } else if ((intervalNumber === 3 || intervalNumber === -3) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "minor"
       && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "3rd") {
           alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
          
       } else if ((intervalNumber === 4 || intervalNumber === -4) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "major"
       && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "3rd") {
           alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
           
       } else if ((intervalNumber === 5 || intervalNumber === -5) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "perfect"
       && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "4th") {
        
           alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
       } else if ((intervalNumber === 6 || intervalNumber === -6) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "augmented"
       && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "4th") {
           alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
         
       } else if ((intervalNumber === 6 || intervalNumber === -6) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "diminished"
       && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "5th") {
           alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");
           
       } else if ((intervalNumber === 7 || intervalNumber === -7) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "perfect"
       && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "5th") {
            
           alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");

       } else if ((intervalNumber === 8 || intervalNumber === -8) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "minor"
       && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "6th") {
           alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");

       } else if ((intervalNumber === 9 || intervalNumber === -9) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "major"
       && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "6th") {
           alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");

       } else if ((intervalNumber === 10 || intervalNumber === -10) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "minor"
       && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "7th") {
           alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");

       } else if ((intervalNumber === 11 || intervalNumber === -11) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "major"
       && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "7th") {
           alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");

       } else if ((intervalNumber === 12 || intervalNumber === -12) && userIntervalQuality.options[userIntervalQuality.selectedIndex].value === "perfect"
       && userIntervalNumber.options[userIntervalNumber.selectedIndex].value === "octave") {
           alert("Perfect pitch, Puccini! Let's see how you handle the next interval.");

       } else {
        alert("Not correct. Get busy, Bizet and try again!");
       }

    })

    