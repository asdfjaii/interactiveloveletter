const revealButton = document.getElementById('revealButton');
const musicControl = document.getElementById('musicControl');
const surpriseImage = document.getElementById('surpriseImage');
const surpriseMessage = document.getElementById('surpriseMessage');
const loader = document.getElementById('loader');
const finalLetter = document.getElementById('finalLetter');

const surprises = [
  { image: "https://i.imgur.com/jqM74J0.jpg", message: "Escaping work through Family Mart" },
  { image: "https://i.imgur.com/eTuIrFI.jpg", message: "You look so good everyday. But that day you look SO GOOD!" },
  { image: "https://i.imgur.com/1qTJwd0.jpg", message: "One of my favorite pictures!" },
  { image: "https://i.imgur.com/El8XZZM.jpg", message: "Christmas Day in the hospital. We were so tired but I felt so loved still." },
  { image: "https://i.imgur.com/Se7PHCD.jpg", message: "New Year. Same old cry baby" },
  { image: "https://i.imgur.com/ls2Pakc.jpg", message: "Tired but as a family." },
  { image: "https://i.imgur.com/MB84UnN.jpg", message: "We didn't have the time to take a picture of us but I like this day." },
  { image: "https://i.imgur.com/ufY8DB4.jpg", message: "My favorite set of pictures!" },
  { image: "https://i.imgur.com/CCzWuof.jpg", message: "Magkamuka na tayo tatlo! haha" },
  { image: "https://i.imgur.com/jDs4QXD.jpg", message: "Thank you for keeping with my family! RIP Jerome" },
  { image: "https://i.imgur.com/kGuFH2l.jpg", message: "Bye-Bye Day! Tarlac food park was so not worth it. haha" },
  { image: "https://i.imgur.com/0vwBeDS.jpg", message: "Bye-Bye Day again sa Sitio Baag. I love your smile!" },
  { image: "https://i.imgur.com/ANf4zdC.jpg", message: "Food is life! Tepanya ples" },
  { image: "https://i.imgur.com/f9vh1ZW.jpg", message: "You always take good photos of us" },
  { image: "https://i.imgur.com/tA4JVND.jpg", message: "Ramen Nagi. Expensive food but bangs looked so good on you" },
  { image: "https://i.imgur.com/D5yQOTi.jpg", message: "Grad Day for Freya! Feeling ko tatay talaga ko dito haha" },
  { image: "https://i.imgur.com/4y06Ig5.jpg", message: "Walang tulog pero hindi pede walang kain" },
  { image: "https://i.imgur.com/OcFU05C.jpg", message: "Kaya sya nagagalit saten kasi ilang months sya naging suman" },
  { image: "https://i.imgur.com/AnUXoeq.jpg", message: "Pag nkangiti ka ganito, sobra saya sa pakiramdam" },
  { image: "https://i.imgur.com/sGeZfbe.jpg", message: "2nd month palang ni Yvaine badtrip na sya" },
  { image: "https://i.imgur.com/MsvH4la.jpg", message: "Hindi ko matandaan nasaan tayo dito hahaha" },
  { image: "https://i.imgur.com/a6FB9j1.jpg", message: "Lumayo muna tayo sa mga baby pero nagdala tayo mas baby pala hahah" },
  { image: "https://i.imgur.com/KKG5XQo.jpg", message: "Grumpy Joe dates naten" },
  { image: "https://i.imgur.com/XmmaZAs.jpg", message: "Thank you. I will always be thankful for you. Our first family picture." },
  { image: "https://i.imgur.com/pmPcbnz.jpg", message: "first image together. i love you!" },
  { image: "https://i.imgur.com/PVzp0Uw.jpg", message: "masarap pero masyado mahal so hindi masarap" },
  { image: "https://i.imgur.com/OMctFPh.jpg", message: "ito lang family naten nun" },
  { image: "https://i.imgur.com/ZMjeY6N.jpg", message: "our house!! our home! i love you!" },
  { image: "https://i.imgur.com/22PuHpm.jpg", message: "nakapikit pa si yvaine nag cafe agad sya hahaha" },
  { image: "https://i.imgur.com/zNtSWey.jpg", message: "sobrang pretty mo dito hehe" },
  { image: "https://i.imgur.com/adQRcge.jpg", message: "thank you so ps5! ikaw palang nag bigay saken ng gnito kalake. you always think of me hehe" },
  { image: "https://i.imgur.com/SQ2O4S3.jpg", message: "loving loving kauwe hehehe" },
  { image: "https://i.imgur.com/1UTpx6E.jpg", message: "ganda ng asawa ko huhuhu" },
  { image: "https://i.imgur.com/jqEaagK.jpg", message: "feeel ko family talaga tayo dito hehe" },
  { image: "https://i.imgur.com/3wR8ADU.jpg", message: "unli steak then. unli steak now. unli steak paden bukas hehe" },
  { image: "https://i.imgur.com/jCF5Alo.jpg", message: "fave picture ko ever since!" },
  { image: "https://i.imgur.com/aI6KTR7.jpg", message: "hard launch naten sa uber hahah" },
  { image: "https://i.imgur.com/0Uv1Bsg.jpg", message: "family picture!!" },
  { image: "https://i.imgur.com/fB1rSFC.jpg", message: "La union! sarap mo dito heghehehehehakjhs" },
  { image: "https://i.imgur.com/wwHfXa8.jpg", message: "New Years date naten sa bagiuo. you looked so pretty!" },
  { image: "https://i.imgur.com/wsEFI1F.jpg", message: "so cutieee" },
  { image: "https://i.imgur.com/BuZDiNR.jpg", message: "copung copung with adik hahahaha" },
  { image: "https://i.imgur.com/xJiH47r.jpg", message: "when you helped me by helping myself. thank you for everything" },
];

// Shuffle the array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the surprises array initially
shuffleArray(surprises);

let currentIndex = 0;
let isFirstClick = true; // Track if it's the first click

// Initialize audio
const audio = new Audio('music.mp3');
audio.volume = 0.5; // Set volume to 50%

// Function to toggle music play/pause
function toggleMusic() {
  if (audio.paused) {
    audio.play();
    musicControl.textContent = "⏸️"; // Pause icon
  } else {
    audio.pause();
    musicControl.textContent = "▶️"; // Play icon
  }
}

// Show the next surprise
function showNextSurprise() {
  // Play the music only on the first click
  if (isFirstClick) {
    audio.play();
    musicControl.style.display = 'block'; // Show the music control icon
    musicControl.textContent = "⏸️"; // Set to pause icon
    isFirstClick = false; // Mark that the first click has happened
  }

  // Show the loader
  loader.style.display = 'block';

  // Hide the current image and message (if any)
  surpriseImage.style.display = 'none';
  surpriseMessage.style.display = 'none';

  // Simulate loading delay
  setTimeout(() => {
    if (currentIndex < surprises.length) {
      // Show the current surprise
      const currentSurprise = surprises[currentIndex];
      console.log("Current Surprise:", currentSurprise); // Debugging message

      // Set the image and message
      surpriseImage.src = currentSurprise.image;
      surpriseMessage.textContent = currentSurprise.message;

      // Show the image and message
      surpriseImage.style.display = 'block';
      surpriseMessage.style.display = 'block';

      // Hide the loader
      loader.style.display = 'none';

      // Move to the next surprise
      currentIndex++;
    } else {
      // All surprises have been shown, display the final letter
      loader.style.display = 'none'; // Hide loader
      finalLetter.classList.remove('hidden'); // Show final letter
      finalLetter.style.display = 'block'; // Ensure it's displayed
      revealButton.style.display = 'none'; // Hide the reveal button
    }
  }, 1000); // Adjust the delay as needed
}

// Attach event listeners
revealButton.addEventListener('click', showNextSurprise);
musicControl.addEventListener('click', toggleMusic);
