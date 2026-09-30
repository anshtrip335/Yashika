/* =========================================================
   OUR LITTLE CORNER — SCRIPT.JS
   Everything personal lives in siteConfig / the arrays below.
   Edit these values — you shouldn't need to touch the logic
   further down unless you want to change how things work.
   ========================================================= */

/* ---------------------------------------------------------
   1. SITE CONFIG — edit this first
   --------------------------------------------------------- */
const siteConfig = {
  girlfriendName: "Yashika",
  myName: "Ansh",

  city1: "Hyderabad",
  city2: "Kolkata",
  // Approximate coordinates used to calculate the distance live.
  city1Coords: { lat: 17.3850, lon: 78.4867 },
  city2Coords: { lat: 22.5726, lon: 88.3639 },

  birthdayCaption: "Today is about you. ❤️",
  heroIntro: "Hi baby, this is a small gift for you — a little memory about us and the time we have spent together. Hope you like it 😘",
  finalLine: "I'd choose you again. ❤️",

  loveLetter: "There is so much I want to say to you, and somehow it always sounds smaller out loud than how it feels inside — so I wanted to write it down instead.\n\nFrom the very first time I saw you to the day you finally became mine, every bit of it has stayed with me. I remember 26 May like it was yesterday, the day we finally admitted we liked each other and 'us' quietly began. And I remember 7 July too, the day we said the bigger words, the ones that actually meant everything.\n\nThe distance between us is real, and some days it's genuinely hard, but it has never once made you feel far. Your voice still finds a way to be the best part of my day. Your smile still does something to me, even through a screen. And every little thing you do — the reminders, the random 'I love you' texts, the way you take care of me without even being asked — none of it goes unnoticed. I see it, I feel it, and I am endlessly thankful for it.\n\nI'm not perfect, and I know I still have a lot of growing to do, but I promise you this: I'm going to keep trying every single day to be someone who deserves you. No matter how many kilometers sit between us, it's still you. It's always going to be you.\n\nHappy birthday, and happy everything, Yashika. I love you more than I know how to put into words."
};

/* ---------------------------------------------------------
   2. TIMELINE — "Our Story".
   --------------------------------------------------------- */
const timelineEntries = [
  {
    date: "9 Feb 2026",
    title: "The Day We First Saw Each Other",
    memory: "9 Feb was the day we first saw each other. I know we didn't get that click right away back then, but I am so happy and glad that we met through our company that day. I will always be truly grateful for that day."
  },
  {
    date: "9 May 2026",
    title: "The Day You Left Pune",
    memory: "9 May was the day you left Pune after our training was over, and it was one of the hardest days for me. I really didn't want you to leave. Even though we didn't have much going on between us yet, I had already started developing feelings for you, and it was so difficult watching you go."
  },
  {
    date: "26 May 2026",
    title: "The Day We Became Us",
    memory: "26 May was the day we finally confessed that we liked each other. That was the day 'us' began, and we started being together. I can never forget that day — it is truly one of the best days of my life. Thank you so much for being there with me, baby. I love you so much."
  },
  {
    date: "7 July 2026",
    title: "The Day We Said I Love You",
    memory: "7 July was the day we confessed our love to each other for the first time. It was the day we really realized that we love each other and are ready to spend all of our life together. I know we are in a long-distance relationship right now, but this distance will be over very soon, and we'll be living a happy life together forever."
  },
  {
    date: "6 August 2026",
    title: "The Day We Met",
    memory: "6 August was the day we finally met for the first time after getting into a relationship, and it was the best day of my life. We were a little awkward in the start, but we became so comfortable during those four days. I cannot explain how much I loved spending every second with you — it was the best time of my life. I can't wait to meet you again soon and relive those moments. I love you so much, baby."
  }
];

/* ---------------------------------------------------------
   3. THINGS I LOVE ABOUT YOU — front title + back message.
   --------------------------------------------------------- */
const loveReasons = [
  {
    title: "Your Smile",
    message: "I love it when you smile in front of me — it just makes my day so much better. Seeing you smile makes me happy and keeps me motivated to work harder, just so I can keep you smiling and keep you happy. There's nothing more beautiful in this world than your smile, and I love everything about you — the way you speak, your voice, and your beautiful self. I love you so much, baby."
  },
  {
    title: "The Way You Care",
    message: "I love the way you care about me — reminding me about all my meetings, what I need to do, what I need to eat, and everything I need to remember. I genuinely appreciate all of these things you do for me. I am going to keep trying to care for you the exact same way and get better at it day by day, so I can give you everything you deserve."
  },
  {
    title: "Your Voice",
    message: "Your voice really gets me every single time. I don't think I could go a single day without hearing your voice. Whether you're angry at me, telling me about your day, or we're just gossiping — I love your voice, your morning voice, and even your annoyed voice. It's the best part of my day, and my mood is never right if I don't get to hear you."
  },
  {
    title: "The Little Things",
    message: "The random 'I love you' texts, the 'I miss you' messages, and the cute random things you send me out of nowhere. You remind me of things I'd otherwise forget, help me with my work — both office and personal — and keep me grounded. On top of all of it, you are helping me become a better boyfriend every single day. I love you so much for everything you do."
  },
  {
    title: "Ordinary Days",
    message: "No day is ordinary with you, baby. Every day becomes the best day of my life when you're in it. Spending all my time with you and knowing you are my girlfriend makes my days so much brighter. I have such a gorgeous, pretty girlfriend with whom I can share anything freely and trust completely. I love you so much."
  }
];

/* ---------------------------------------------------------
   4. MEMORY GALLERY — sizes: "large", "medium", or omit for small.
   --------------------------------------------------------- */
const memories = [
  { image: "assets/images/memory-01.jpg", date: "26 May 2026", title: "The Day We Became Us", caption: "One of my best days with you", size: "large" },
  { image: "assets/images/memory-02.jpg", date: "6 August 2026", title: "The Day We Met", caption: "The day we met" },
  { image: "assets/images/memory-03.jpg", date: "August 2026", title: "Hotel Date", caption: "The date we had at the hotel" },
  { video: "assets/videos/memory-04.mp4", date: "August 2026", title: "Night Out", caption: "The night out we went on", size: "medium" },
  { image: "assets/images/memory-05.jpg", date: "August 2026", title: "Clubbing", caption: "The clubbing time" },
  { image: "assets/images/memory-06.jpg", date: "August 2026", title: "Until Next Time", caption: "The time we had to go back to long distance" }
];

/* ---------------------------------------------------------
   5. OPEN WHEN — cards, in the order they'll appear.
   --------------------------------------------------------- */
const openWhenMessages = [
  {
    title: "Open when you miss me",
    message: "Hi baby, I love you and I know you are missing me so much. Just remember that I'm always there for you, and no matter what happens, I'm never leaving you. You are the best thing that has ever happened to me. I love everything about you: your hair, your voice, the way you look, the way you talk, the way you get angry at me, the way you make my day, and the way you bring my energy back up when I'm not feeling good. I promise, baby, we'll meet again soon and have the best time of our lives, and I'll make sure it becomes the best time of your life too. I love you so much, baby, and I'm never leaving you.",
    image: "assets/images/open-when-miss-you.jpg"
  },
  {
    title: "Open when you can't sleep",
    message: "Hi baby, I know you're not able to sleep. If you're reading this, I've probably already fallen asleep on call with you — I'm sorry about that, I love you so much! The best way to fall asleep is sleeping beside you or with you on calls like these. If you're not able to sleep right now, you can try waking me up, or just close your eyes and imagine us being together, holding each other tight in our arms, cuddling and sleeping together. I'm always here for you, baby, no matter what. I love you so much.",
    image: ""
  },
  {
    title: "Open when you need a smile",
    message: "Hi baby, I know you have been through a lot lately, and it's been sitting heavy on your mind. Just remember, I'm always here for you and I love everything about you. Whenever you feel sad, call me. I might do something completely stupid just to make you laugh — never to hurt you, just to see you smile. If you're reading this, I'm probably already doing something a little crazy to try and cheer you up. I love you so much, baby, and I hope this makes you feel even a little better. You are the absolute best.",
    image: ""
  },
  {
    title: "Open when you miss us",
    message: "Baby, just remember all the amazing times we spent together when we were in Kolkata. Those four days we spent together — we went on dates, we slept together, we ate together, we showered together, and did everything side by side. It was truly the best time of my life, especially the night outs where I had so much fun for the first time ever. Nothing could be possible without you. Thank you for everything, baby. I promise you I'll come meet you very soon, and we'll have the best time of our lives again. I promise I'll never leave you and we'll always stay together. You're my girlfriend, my best friend, and my whole world. You also know too much about me now, so I can never let you go! I love you so much.",
    image: ""
  }
];

/* =========================================================
   Below this line is the site logic. Safe to leave alone.
   ========================================================= */

if (!window.handleImageError) {
  window.handleImageError = function(img) {
    if (!img) return;
    const currentSrc = img.getAttribute("src") || "";
    const tried = img.dataset.triedExts ? img.dataset.triedExts.split(",") : [];
    const extensions = [".jpeg", ".jpg", ".png", ".webp"];
    const currentExtMatch = currentSrc.match(/\.(jpeg|jpg|png|webp)$/i);

    if (currentExtMatch) {
      const currentExt = currentExtMatch[0].toLowerCase();
      if (!tried.includes(currentExt)) {
        tried.push(currentExt);
      }
      const nextExt = extensions.find(ext => !tried.includes(ext));
      if (nextExt) {
        tried.push(nextExt);
        img.dataset.triedExts = tried.join(",");
        const basePath = currentSrc.substring(0, currentSrc.lastIndexOf("."));
        img.src = basePath + nextExt;
        return;
      }
    }

    const frame = img.closest('.birthday-photo-frame, .hero-photo-frame, .final-photo-frame, .timeline-photo, .memory-item, .envelope-photo');
    if (frame) {
      frame.classList.add('img-missing');
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  initGate();
  renderMainSiteContent();
  initNav();
  initScrollReveal();
  initLightbox();
  initEasterEgg();
  initPressLoveButton();
  applyStaticText();
});

/* ---------------------------------------------------------
   GATE FLOW
   --------------------------------------------------------- */

const STORAGE_KEY = "ourLittleCorner_birthdaySeen";

function showScreen(id) {
  document.querySelectorAll(".gate-screen").forEach(s => s.classList.remove("active-screen"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active-screen");
}

function enterMainSite() {
  document.querySelectorAll(".gate-screen").forEach(s => s.classList.remove("active-screen"));
  const main = document.getElementById("main-site");
  main.classList.add("visible");
  document.body.style.overflow = "";
}

function initGate() {
  document.body.style.overflow = "hidden";

  const hasSeenBirthday = localStorage.getItem(STORAGE_KEY) === "true";

  if (hasSeenBirthday) {
    showScreen("gate-welcome-back");
  } else {
    showScreen("gate-name");
    spawnFloatingHearts();
  }

  /* --- Name gate --- */
  const nameForm = document.getElementById("name-form");
  const nameInput = document.getElementById("name-input");
  const nameError = document.getElementById("name-error");
  const wrongNameMessages = [
    "Hmm… I don't think you're supposed to be here 👀",
    "Nice try. I know exactly who I'm waiting for ❤️",
    "That's not the name I'm looking for…"
  ];

  nameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = nameInput.value.trim();
    if (value === siteConfig.girlfriendName) {
      nameError.textContent = "";
      transitionTo("gate-love");
    } else {
      nameError.textContent = wrongNameMessages[Math.floor(Math.random() * wrongNameMessages.length)];
      nameInput.value = "";
      nameInput.focus();
    }
  });

  /* --- Do you love me? --- */
  const loveGreeting = document.getElementById("love-greeting");
  loveGreeting.textContent = `Okay ${siteConfig.girlfriendName}… one important question.`;

  const loveNudge = document.getElementById("love-nudge");
  const loveNudges = [
    "Are you sure about that? 🥺",
    "Maybe think about that one more time…",
    "You're really choosing NO? 😭",
    "I'll wait…",
    "Final answer?"
  ];
  let loveNudgeIndex = 0;

  document.getElementById("love-yes").addEventListener("click", () => {
    loveNudge.textContent = "";
    transitionTo("gate-boyfriend");
  });
  document.getElementById("love-no").addEventListener("click", () => {
    loveNudge.textContent = loveNudges[loveNudgeIndex % loveNudges.length];
    loveNudgeIndex++;
  });

  /* --- Can I be your boyfriend? --- */
  const bfNudge = document.getElementById("bf-nudge");
  const bfNudges = [
    "Wait… I think you clicked the wrong button.",
    "Let's try that question again 😭",
    "You really want to break my heart on my own website?",
    "I'm giving you one more chance…",
    "Still no?"
  ];
  let bfNudgeIndex = 0;

  document.getElementById("bf-yes").addEventListener("click", () => {
    bfNudge.textContent = "";
    transitionTo("gate-countdown");
    startCountdown();
  });
  document.getElementById("bf-no").addEventListener("click", () => {
    bfNudge.textContent = bfNudges[bfNudgeIndex % bfNudges.length];
    bfNudgeIndex++;
  });

  /* --- Enter main site from birthday screen --- */
  document.getElementById("enter-site").addEventListener("click", () => {
    localStorage.setItem(STORAGE_KEY, "true");
    enterMainSite();
  });

  /* --- Welcome back screen --- */
  document.getElementById("go-to-site").addEventListener("click", enterMainSite);
  document.getElementById("replay-birthday").addEventListener("click", () => {
    transitionTo("gate-countdown");
    startCountdown();
  });

  /* Birthday photo caption + letter name + final line, applied once DOM ready */
}

function transitionTo(screenId) {
  showScreen(screenId);
}

function startCountdown() {
  const el = document.getElementById("countdown-number");
  let count = 5;
  el.textContent = count;
  el.classList.remove("pop");
  void el.offsetWidth; // restart animation
  el.classList.add("pop");

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      el.textContent = count;
      el.classList.remove("pop");
      void el.offsetWidth;
      el.classList.add("pop");
    } else {
      clearInterval(interval);
      transitionTo("gate-birthday");
      spawnFloatingHearts();
    }
  }, 1000);
}

function spawnFloatingHearts() {
  document.querySelectorAll(".gate-screen.active-screen .floating-hearts").forEach(container => {
    if (container.childElementCount > 0) return; // already spawned
    const symbols = ["❤", "✦", "♡"];
    for (let i = 0; i < 12; i++) {
      const span = document.createElement("span");
      span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      span.style.left = Math.random() * 100 + "%";
      span.style.animationDuration = (8 + Math.random() * 10) + "s";
      span.style.animationDelay = (Math.random() * 8) + "s";
      span.style.fontSize = (0.8 + Math.random() * 1) + "rem";
      container.appendChild(span);
    }
  });
}

/* ---------------------------------------------------------
   STATIC TEXT FROM CONFIG
   --------------------------------------------------------- */

function applyStaticText() {
  const byId = (id) => document.getElementById(id);
  if (byId("birthday-caption")) byId("birthday-caption").textContent = siteConfig.birthdayCaption;
  if (byId("letter-name")) byId("letter-name").textContent = siteConfig.myName;
  if (byId("final-line")) byId("final-line").textContent = siteConfig.finalLine;

  const heroSubtitle = document.querySelector(".hero-subtitle");
  if (heroSubtitle) heroSubtitle.textContent = siteConfig.heroIntro;

  const letterBody = document.querySelector(".letter-body");
  if (letterBody) letterBody.textContent = siteConfig.loveLetter;
}

/* ---------------------------------------------------------
   MAIN SITE CONTENT RENDERING
   --------------------------------------------------------- */

function renderMainSiteContent() {
  renderDistance();
  renderTimeline();
  renderLoveCards();
  renderMemoryGrid();
  renderOpenWhen();
}

function renderDistance() {
  const city1Label = document.getElementById("city1-label");
  const city2Label = document.getElementById("city2-label");
  city1Label.textContent = siteConfig.city1.toUpperCase();
  city2Label.textContent = siteConfig.city2.toUpperCase();

  const km = haversineDistanceKm(siteConfig.city1Coords, siteConfig.city2Coords);
  const rounded = Math.round(km / 10) * 10; // round to nearest clean value
  document.getElementById("distance-km").textContent = `~ ${rounded.toLocaleString()} km`;
}

function haversineDistanceKm(a, b) {
  const R = 6371; // Earth radius km
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
  return R * c;
}

function renderTimeline() {
  const container = document.getElementById("timeline");
  container.innerHTML = "";
  timelineEntries.forEach(entry => {
    const item = document.createElement("div");
    item.className = "timeline-item reveal";
    item.innerHTML = `
      <p class="timeline-date">${escapeHtml(entry.date)}</p>
      <h3 class="timeline-title">${escapeHtml(entry.title)}</h3>
      ${entry.photo ? `
      <div class="timeline-photo img-frame">
        <img src="${entry.photo}" alt="${escapeHtml(entry.title)}" class="lightbox-trigger" onerror="handleImageError(this)">
        <div class="img-placeholder-text">[ADD PHOTO HERE]</div>
      </div>` : ""}
      <p class="timeline-memory">${escapeHtml(entry.memory)}</p>
    `;
    container.appendChild(item);
  });
}

function renderLoveCards() {
  const grid = document.getElementById("love-cards-grid");
  grid.innerHTML = "";
  loveReasons.forEach(reason => {
    const card = document.createElement("div");
    card.className = "love-card";
    card.innerHTML = `
      <div class="love-card-inner">
        <div class="love-card-face love-card-front">${escapeHtml(reason.title)}</div>
        <div class="love-card-face love-card-back">${escapeHtml(reason.message)}</div>
      </div>
    `;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    grid.appendChild(card);
  });
}

function renderMemoryGrid() {
  const grid = document.getElementById("memory-grid");
  grid.innerHTML = "";
  memories.forEach(mem => {
    const item = document.createElement("div");
    item.className = "memory-item" + (mem.size ? " " + mem.size : "");
    const videoSrc = mem.video || (mem.image && /\.(mp4|webm|mov|ogg)$/i.test(mem.image) ? mem.image : null);

    if (videoSrc) {
      item.classList.add("memory-video-item");
      item.innerHTML = `
        <video src="${videoSrc}" class="lightbox-trigger" playsinline muted loop autoplay preload="auto" data-video-src="${videoSrc}" onerror="this.closest('.memory-item').classList.add('img-missing')"></video>
        <div class="video-play-badge" aria-hidden="true" title="Video memory">▶</div>
        <div class="img-placeholder-text">[ADD VIDEO HERE]</div>
        <div class="memory-caption">${escapeHtml(mem.caption || "")}</div>
      `;
      const videoEl = item.querySelector("video");
      if (videoEl) {
        videoEl.play().catch(() => {});
        item.addEventListener("mouseenter", () => {
          videoEl.play().catch(() => {});
        });
      }
    } else {
      item.innerHTML = `
        <img src="${mem.image}" alt="${escapeHtml(mem.caption || mem.title || "")}" class="lightbox-trigger" onerror="handleImageError(this)">
        <div class="img-placeholder-text">[ADD PHOTO HERE]</div>
        <div class="memory-caption">${escapeHtml(mem.caption || "")}</div>
      `;
    }
    grid.appendChild(item);
  });
}

function renderOpenWhen() {
  const grid = document.getElementById("openwhen-grid");
  grid.innerHTML = "";
  openWhenMessages.forEach(card => {
    const envelope = document.createElement("div");
    envelope.className = "envelope";
    envelope.innerHTML = `
      <div class="envelope-icon">💌</div>
      <div class="envelope-title">${escapeHtml(card.title)}</div>
      <div class="envelope-content">
        <p class="envelope-message">${escapeHtml(card.message)}</p>
        ${card.image ? `
        <div class="envelope-photo img-frame">
          <img src="${card.image}" alt="${escapeHtml(card.title)}" class="lightbox-trigger" onerror="handleImageError(this)">
          <div class="img-placeholder-text">[ADD PHOTO HERE]</div>
        </div>` : ""}
      </div>
    `;
    envelope.addEventListener("click", (e) => {
      if (e.target.closest(".lightbox-trigger")) return;
      envelope.classList.toggle("open");
    });
    grid.appendChild(envelope);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------------------------------------------------------
   NAV (mobile menu)
   --------------------------------------------------------- */

function initNav() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });
  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => links.classList.remove("open"));
  });
}

/* ---------------------------------------------------------
   SCROLL REVEAL
   --------------------------------------------------------- */

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Elements rendered dynamically (timeline) need a moment to exist.
  setTimeout(() => {
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  }, 50);
}

/* ---------------------------------------------------------
   LIGHTBOX
   --------------------------------------------------------- */

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxVideo = document.getElementById("lightbox-video");
  const closeBtn = document.getElementById("lightbox-close");

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".lightbox-trigger, .birthday-photo-frame img, .hero-photo-frame img, .final-photo-frame img, .memory-video-item");
    if (!trigger) return;

    // Check if video element or container
    const videoEl = trigger.tagName === "VIDEO" ? trigger : trigger.querySelector("video");
    const videoSrc = trigger.dataset.videoSrc || (videoEl ? (videoEl.dataset.videoSrc || videoEl.src) : null);

    if (videoSrc) {
      if (lightboxImg) {
        lightboxImg.style.display = "none";
        lightboxImg.src = "";
      }
      if (lightboxVideo) {
        lightboxVideo.style.display = "block";
        lightboxVideo.src = videoSrc;
        lightboxVideo.currentTime = 0;
        lightboxVideo.play().catch(() => {});
      }
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    } else {
      const imgEl = trigger.tagName === "IMG" ? trigger : trigger.querySelector("img");
      if (imgEl && imgEl.getAttribute("src")) {
        if (lightboxVideo) {
          lightboxVideo.pause();
          lightboxVideo.style.display = "none";
          lightboxVideo.src = "";
        }
        if (lightboxImg) {
          lightboxImg.style.display = "block";
          lightboxImg.src = imgEl.src;
          lightboxImg.alt = imgEl.alt || "";
        }
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
      }
    }
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    if (lightboxImg) {
      lightboxImg.src = "";
      lightboxImg.style.display = "none";
    }
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.src = "";
      lightboxVideo.style.display = "none";
    }
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target === closeBtn) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

/* ---------------------------------------------------------
   PRESS LOVE BUTTON (small playful interaction)
   --------------------------------------------------------- */

function initPressLoveButton() {
  const btn = document.getElementById("press-love-btn");
  const msg = document.getElementById("press-love-msg");
  btn.addEventListener("click", () => {
    msg.textContent = "Okay, I already knew that.";
    burstHearts(btn);
  });
}

function burstHearts(originEl) {
  const rect = originEl.getBoundingClientRect();
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("span");
    heart.textContent = "❤";
    heart.style.position = "fixed";
    heart.style.left = rect.left + rect.width / 2 + "px";
    heart.style.top = rect.top + "px";
    heart.style.color = "#e79cc2";
    heart.style.fontSize = "1rem";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";
    heart.style.transition = "transform 1s ease, opacity 1s ease";
    document.body.appendChild(heart);
    const angle = (Math.random() - 0.5) * 160;
    const distance = 60 + Math.random() * 60;
    requestAnimationFrame(() => {
      heart.style.transform = `translate(${Math.sin(angle) * distance}px, -${distance + 40}px)`;
      heart.style.opacity = "0";
    });
    setTimeout(() => heart.remove(), 1050);
  }
}

/* ---------------------------------------------------------
   HIDDEN EASTER EGG
   --------------------------------------------------------- */

function initEasterEgg() {
  const egg = document.getElementById("easter-egg");
  const message = document.getElementById("easter-egg-message");
  egg.addEventListener("click", () => {
    message.textContent = "You found something I didn't tell you about. ❤️ [ADD HIDDEN MESSAGE HERE]";
    message.classList.add("show");
    setTimeout(() => message.classList.remove("show"), 5000);
  });
}


/* ---------------------------------------------------------
   FUTURE UPGRADE — LIVE LOCATION (not implemented)
   ---------------------------------------------------------
   This is intentionally left as a placeholder. If you ever
   want real live location sharing instead of the static
   distance above, you would need:
     - The Browser Geolocation API on both ends
     - A small secure backend (e.g. Firebase) to relay coords
     - Explicit opt-in from both people, with a visible
       "sharing is active" indicator and a "Stop sharing" button
     - HTTPS everywhere and coordinates that are never public
   None of that is wired up here — the distance section above
   is fully static and safe to ship as-is.
   --------------------------------------------------------- */
