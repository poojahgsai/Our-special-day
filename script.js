// const noBtn = document.getElementById("noBtn");
// const yesBtn = document.getElementById("yesBtn");
// const message = document.getElementById("loveMessage");

// let yesScale = 1;

// noBtn.addEventListener("mouseover", moveNoButton);
// noBtn.addEventListener("touchstart", moveNoButton);
// const overlay = document.getElementById("musicOverlay");
// const bgMusic = document.getElementById("bgMusic");

// overlay.addEventListener("click", () => {
//   bgMusic.play();
//   overlay.style.display = "none";
// });


// function moveNoButton() {
//   const x = Math.random() * 200 - 100;
//   const y = Math.random() * 60 - 30;

//   noBtn.style.transform = `translate(${x}px, ${y}px)`;

//   // Make YES button bigger every time
//   yesScale += 0.15;
//   yesBtn.style.transform = `scale(${yesScale})`;
// }


// function escapeNoButton() {
//   const parent = noBtn.parentElement;

//   const parentRect = parent.getBoundingClientRect();

//   const x = Math.random() * (parentRect.width - 80);
//   const y = Math.random() * (parentRect.height - 50);

//   noBtn.style.left = `${x}px`;
//   noBtn.style.top = `${y}px`;

//   // YES grows faster 😈❤️
//   yesScale += 0.25;
//   yesBtn.style.transform = `scale(${yesScale})`;
// }

// // Desktop – VERY FAST
// noBtn.addEventListener("mouseenter", escapeNoButton);
// noBtn.addEventListener("mousemove", escapeNoButton);

// // Mobile – instant escape
// noBtn.addEventListener("touchstart", escapeNoButton);

// function showLove() {
//   const message = document.getElementById("loveMessage");
//   const video = document.getElementById("loveVideo");
//   const noBtn = document.getElementById("noBtn");
//   const yesBtn = document.getElementById("yesBtn");

//   message.innerHTML = `
//     🥹❤️ Yayyy!!! <br><br>
//     You are my forever Valentine 💍<br>
//     I love you endlessly, Cheeku ❤️<br><br>
//     — Yours always, Poo 💕
//   `;

//   noBtn.style.display = "none";
//   yesBtn.style.display = "none";

//   video.style.display = "block";

//   // 👇 This ensures play works on all browsers
//   video.muted = true;     // allow autoplay
//   video.play();

//   // optional: unmute after play starts
//   setTimeout(() => {
//     video.muted = false;
//   }, 500);
// }




const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("loveMessage");
const storyContainer = document.getElementById("storyAfterYes");

const overlay = document.getElementById("musicOverlay");
const bgMusic = document.getElementById("bgMusic");
const video = document.getElementById("loveVideo");

let yesScale = 1;

/* 🎵 Start music */
overlay.addEventListener("click", () => {
  bgMusic.play();
  overlay.style.display = "none";
});

/* 😈 NO button escape logic */
function escapeNoButton() {
  const parent = noBtn.parentElement;
  const rect = parent.getBoundingClientRect();

  const x = Math.random() * (rect.width - 80);
  const y = Math.random() * (rect.height - 50);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  yesScale += 0.25;
  yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener("mouseenter", escapeNoButton);
noBtn.addEventListener("mousemove", escapeNoButton);
noBtn.addEventListener("touchstart", escapeNoButton);

/* ❤️ YES CLICK */
// function showLove() {
//   // Hide buttons
//   noBtn.style.display = "none";
//   yesBtn.style.display = "none";

//   // Show message
//   message.innerHTML = `
//     💕❤️ Yayyy!!! <br><br>
//     You are my forever Valentine 💍<br>
//     I love you endlessly, Cheeku ❤️<br><br>
//     — Yours always, Poo 💕
//   `;

//   // Play video
//   video.style.display = "block";
//   video.muted = true;
//   video.play();

//   setTimeout(() => {
//     video.muted = false;
//   }, 500);

//   // Inject Lulu Mall Story
//   storyContainer.innerHTML = `
//     <section class="section fade">
//       <h2>🛍️ Lulu Mall, Bangalore</h2>

//       <p>
//         After meeting with our families 👨‍👩‍👧‍👦,<br>
//         we both decided to meet individually for the first time 💭
//       </p>

//       <p>
//         Honestly, I wasn’t sure it would work…<br>
//         I didn’t know what to expect from that meeting 🤍
//       </p>

//       <p>
//         Still, I gathered courage and went to Lulu Mall to meet you 🚶‍♀️✨
//       </p>

//       <p>
//         And then… I saw you 😊<br>
//         We talked, we smiled, we laughed 💬😄
//       </p>

//       <p>
//         Somewhere between those moments,<br>
//         my heart started feeling something new 💓
//       </p>

//       <p>
//         Right there, in that busy Lulu Mall,<br>
//         I realized how special you were to me 🌸
//       </p>

//       <p>
//         I felt a quiet, beautiful love growing inside me ❤️
//       </p>

//       <p>
//         That’s why Lulu Mall will always have a special place in my heart 🛍️💖<br>
//         Because this is where my love for you truly began ✨
//       </p>

//       <p>
//         From that love came a lifetime promise 💍<br>
//         and today, I am proud to call you my husband ❤️
//       </p>

//       <p>
//         It’s been 10 months since we started this journey together ⏳💑<br>
//         and even now, my love for you keeps growing every single day 🌹
//       </p>

//       <p>
//         I still look at you the same way,<br>
//         with the same smile, the same warmth, and even more love 🥹❤️
//       </p>

//       <p>
//         This is not just our past…<br>
//         this is our present, and my favorite part of life ✨💖
//       </p>

//       <div class="couple">👩‍❤️‍👨✨💖💍✨👩‍❤️‍👨</div>
//     </section>
//   `;

//   // Smooth scroll to story
//   setTimeout(() => {
//     storyContainer.scrollIntoView({ behavior: "smooth" });
//   }, 600);
// }
function showLove() {
  // Lock scroll temporarily
  document.body.classList.add("no-scroll");

  // Hide buttons
  noBtn.style.display = "none";
  yesBtn.style.display = "none";

  // Show YAY message first (anchor point)
  message.innerHTML = `
    ❤️💕 Yayyyy!!! <br><br>
    You are my forever Valentine 💍<br>
    I love you endlessly, Cheeku ❤️<br><br>
   
  `;

  // Show & play video
  video.style.display = "block";
  video.muted = true;
  video.play();

  setTimeout(() => {
    video.muted = false;
  }, 500);

  // Inject story AFTER message
  storyContainer.innerHTML = `
    <section class="section fade">
      <h2>💕 Where Love Found Us 💕</h2>

      <p>After meeting with our families 👨‍👩‍👧‍👦,<br>
      we both decided to meet individually for the first time 💭</p>

      <p>Honestly, I wasn’t sure it would work…<br>
      I didn’t know what to expect from that meeting 🤍</p>

      <p>Still, I gathered courage and went to Lulu Mall to meet you 🚶‍♀️✨</p>

      <p>And then… I saw you 😊<br>
      We talked, we smiled, we laughed 💬😄</p>

      <p>Somewhere between those moments,<br>
      my heart started feeling something new 💓</p>

      <p>Right there, in that busy Lulu Mall,<br>
      I realized how special you were to me 🌸</p>

      <p>I felt a quiet, beautiful love growing inside me ❤️</p>

      <p>That’s why Lulu Mall will always have a special place in my heart 🛍️💖<br>
      Because this is where my love for you truly began ✨</p>

      <p>From that love came a lifetime promise 💍<br>
      and today, I am proud to call you my husband ❤️</p>

      <p>It’s been 1 year we Engaged  since we started this journey together ⏳💑<br>
      and even now, my love for you keeps growing every single day 🌹</p>

      <p>I still look at you the same way,<br>
      with the same smile, the same warmth, and even more love 🥹❤️</p>

      <p>This is not just our past…<br>
      this is our present, and my favorite part of life ✨💖</p>

      <div class="couple">👩‍❤️‍👨✨💖💍✨👩‍❤️‍👨</div>
      <br><br>
    — Always yours, with all my love 💕
    </section>
  `;

  // ✅ Unlock scroll and gently scroll AFTER layout settles
  setTimeout(() => {
    document.body.classList.remove("no-scroll");

    message.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 800);
}

