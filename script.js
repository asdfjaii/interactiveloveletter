const revealButton = document.getElementById('revealButton');
const surpriseImage = document.getElementById('surpriseImage');
const surpriseMessage = document.getElementById('surpriseMessage');

const surprises = [
  { image: "https://i.imgur.com/jqM74J0.jpg", message: "Escaping work through Family Mart" },
  { image: "https://i.imgur.com/eTuIrFI.jpg", message: "You look so good everyday. But that day you look SO GOOD!" },
  { image: "https://i.imgur.com/1qTJwd0.jpg", message: "One of my favorite pictures!" },
  { image: "https://i.imgur.com/El8XZZM.jpg", message: "Christmas Day in the hospital. We were so tired but I felt so loved still." },
  { image: "https://i.imgur.com/Se7PHCD.jpg", message: "New Year. Same old cry baby" },
  { image: "https://i.imgur.com/ls2Pakc.jpg", message: "Tired but as a family." },
  { image: "https://i.imgur.com/MB84UnN.jpg", message: "We didn't have the time to take a picture of us but I like this day." },
  { image: "https://i.imgur.com/ufY8DB4.jpg", message: "My favorite set of pictures!" },
  { image: "https://imgur.com/CCzWuof.jpg", message: "Magkamuka na tayo tatlo! haha" },
  { image: "https://imgur.com/jDs4QXD.jpg", message: "Thank you for keeping with my family! RIP Jerome" },
  { image: "https://imgur.com/kGuFH2l.jpg", message: "Bye-Bye Day! Tarlac food park was so not worth it. haha" },
  { image: "https://imgur.com/0vwBeDS.jpg", message: "Bye-Bye Day again sa Sitio Baag. I love your smile!" },
  { image: "https://imgur.com/ANf4zdC.jpg", message: "Food is life! Tepanya ples" },
  { image: "https://imgur.com/f9vh1ZW.jpg", message: "You always take good photos of us" },
  { image: "https://imgur.com/tA4JVND.jpg", message: "Ramen Nagi. Expensive food but bangs looked so good on you" },
  { image: "https://imgur.com/D5yQOTi.jpg", message: "Grad Day for Freya! Feeling ko tatay talaga ko dito haha" },
  { image: "https://imgur.com/4y06Ig5.jpg", message: "Walang tulog pero hindi pede walang kain" },
  { image: "https://imgur.com/OcFU05C.jpg", message: "Kaya sya nagagalit saten kasi ilang months sya naging suman" },
  { image: "https://imgur.com/AnUXoeq.jpg", message: "Pag nkangiti ka ganito, sobra saya sa pakiramdam" },
  { image: "https://imgur.com/sGeZfbe.jpg", message: "2nd month palang ni Yvaine badtrip na sya" },
  { image: "https://imgur.com/MsvH4la.jpg", message: "Hindi ko matandaan nasaan tayo dito hahaha" },
  { image: "https://imgur.com/a6FB9j1.jpg", message: "Lumayo muna tayo sa mga baby pero nagdala tayo mas baby pala hahah" },
  { image: "https://imgur.com/KKG5XQo.jpg", message: "Grumpy Joe dates naten" },
  { image: "https://imgur.com/XmmaZAs.jpg", message: "Thank you. I will always be thankful for you. Our first family picture." },
  { image: "https://imgur.com/pmPcbnz.jpg", message: "first image together. i love you!" },
  { image: "https://imgur.com/PVzp0Uw.jpg", message: "masarap pero masyado mahal so hindi masarap" },
  { image: "https://imgur.com/OMctFPh.jpg", message: "ito lang family naten nun" },
  { image: "https://imgur.com/ZMjeY6N.jpg", message: "our house!! our home! i love you!" },
  { image: "https://imgur.com/22PuHpm.jpg", message: "nakapikit pa si yvaine nag cafe agad sya hahaha" },
  { image: "https://imgur.com/zNtSWey.jpg", message: "sobrang pretty mo dito hehe" },
  { image: "https://imgur.com/adQRcge.jpg", message: "thank you so ps5! ikaw palang nag bigay saken ng gnito kalake. you always think of me hehe" },
  { image: "https://imgur.com/SQ2O4S3.jpg", message: "loving loving kauwe hehehe" },
  { image: "https://imgur.com/1UTpx6E.jpg", message: "ganda ng asawa ko huhuhu" },
  { image: "https://imgur.com/jqEaagK.jpg", message: "feeel ko family talaga tayo dito hehe" },
  { image: "https://imgur.com/3wR8ADU.jpg", message: "unli steak then. unli steak now. unli steak paden bukas hehe" },
  { image: "https://imgur.com/jCF5Alo.jpg", message: "fave picture ko ever since!" },
  { image: "https://imgur.com/aI6KTR7.jpg", message: "hard launch naten sa uber hahah" },
  { image: "https://imgur.com/0Uv1Bsg.jpg", message: "family picture!!" },
  { image: "https://imgur.com/fB1rSFC.jpg", message: "La union! sarap mo dito heghehehehehakjhs" },
  { image: "https://imgur.com/wwHfXa8.jpg", message: "New Years date naten sa bagiuo. you looked so pretty!" },
  { image: "https://imgur.com/wsEFI1F.jpg", message: "so cutieee" },
  { image: "https://imgur.com/BuZDiNR.jpg", message: "copung copung with adik hahahaha" },
  { image: "https://imgur.com/xJiH47r.jpg", message: "when you helped me by helping myself. thank you for everything" },
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

function showNextSurprise() {
  // Show the current surprise
  surpriseImage.src = surprises[currentIndex].image;
  surpriseMessage.textContent = surprises[currentIndex].message;

  surpriseImage.classList.remove('hidden');
  surpriseMessage.classList.remove('hidden');

  // Move to the next surprise
  currentIndex++;

  // If we've reached the end of the array, shuffle and start over
  if (currentIndex >= surprises.length) {
    shuffleArray(surprises);
    currentIndex = 0;
  }
}

// Attach the event listener to the button
revealButton.addEventListener('click', showNextSurprise);

const audio = new Audio('music.mp3'); // Add your music file name here

revealButton.addEventListener('click', () => {
  audio.play(); // Play the music when the button is clicked
  showNextSurprise();
});

const loader = document.getElementById('loader');

function showNextSurprise() {
  loader.classList.remove('hidden'); // Show loader
  surpriseImage.classList.add('hidden'); // Hide image
  surpriseMessage.classList.add('hidden'); // Hide message

  setTimeout(() => {
    surpriseImage.src = surprises[currentIndex].image;
    surpriseMessage.textContent = surprises[currentIndex].message;

    surpriseImage.classList.remove('hidden');
    surpriseMessage.classList.remove('hidden');
    loader.classList.add('hidden'); // Hide loader
  }, 1000); // Simulate loading delay
}
