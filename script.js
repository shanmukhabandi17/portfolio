"use strict";

/* =========================================================
   PORTFOLIO SCRIPT.JS — OPTIMIZED PRODUCTION VERSION
   Author: Shanmukha Bandi Portfolio
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= FOOTER PARTICLES ================= */

if(window.particlesJS){

  particlesJS("footer-particles",{

    particles:{

      number:{ value:40 },

      color:{ value:"#00adb5" },

      shape:{ type:"circle" },

      opacity:{ value:.4 },

      size:{ value:3 },

      move:{ speed:0.6 }

    },

    interactivity:{
      events:{
        onhover:{ enable:true, mode:"repulse" }
      }
    }

  });

}


  /* =========================================================
     ELEMENT REFERENCES (cached for performance)
     ========================================================= */

  const body = document.body;

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const overlay = document.getElementById("overlay");

  const typingName = document.getElementById("typing");
  const typingRole = document.getElementById("typing-role");

  const scrollProgress = document.getElementById("scroll-progress");

  const projectModal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalTech = document.getElementById("modalTech");
  const modalClose = document.querySelector(".close-modal");

  const certModal = document.getElementById("certModal");
  const certPreview = document.getElementById("certPreview");
  const certClose = document.querySelector(".cert-close");

  const fabContainer = document.getElementById("fabContainer");
  const fabMain = document.getElementById("fabMain");
  const scrollTopBtn = document.getElementById("scrollTop");

  const loader = document.getElementById("loader");

  const cursorGlow = document.querySelector(".cursor-glow");

  const tabsContainer = document.querySelector(".tabs");

  const typingSound = document.getElementById("typingSound");

  const sections = document.querySelectorAll("section");

  const menuLinks = document.querySelectorAll(".nav-links a");

  const projectSliders = document.querySelectorAll(".project-slider");

  const projectCards = document.querySelectorAll(".project-card");

  const certItems = document.querySelectorAll(".cert-item");

  

  /* =========================================================
     MENU CONTROL
     ========================================================= */

  function openMenu() {
    navLinks.classList.add("show");
    overlay.classList.add("show");
    body.classList.add("menu-open");
  }

  function closeMenu() {
    navLinks.classList.remove("show");
    overlay.classList.remove("show");
    body.classList.remove("menu-open");
  }

  if (hamburger) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.contains("show")
        ? closeMenu()
        : openMenu();
    });
  }

  if (overlay) overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  menuLinks.forEach(link =>
    link.addEventListener("click", closeMenu)
  );



  /* =========================================================
     TYPING NAME EFFECT
     ========================================================= */

  const nameText = "Shanmukha Bandi";
  let nameIndex = 0;

  function typeName() {
    if (!typingName) return;

    if (nameIndex < nameText.length) {
      typingName.textContent += nameText.charAt(nameIndex);
      nameIndex++;
      setTimeout(typeName, 80);
    }
  }

  typeName();



  /* =========================================================
     TYPING ROLE EFFECT
     ========================================================= */

  const roles = [
    "Software Developer",
    "Software Tester"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeRole() {

    if (!typingRole) return;

    const text = roles[roleIndex];

    typingRole.textContent = deleting
      ? text.substring(0, charIndex--)
      : text.substring(0, charIndex++);

    if (typingSound) {
      typingSound.currentTime = 0;
      typingSound.play().catch(() => {});
    }

    if (!deleting && charIndex === text.length) {
      deleting = true;
      setTimeout(typeRole, 1200);
      return;
    }

    if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeRole, deleting ? 50 : 90);
  }

  typeRole();



  /* =========================================================
     SCROLL PROGRESS BAR
     ========================================================= */

  window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      window.innerHeight;

    if (scrollProgress)
      scrollProgress.style.width =
        (scrollTop / height) * 100 + "%";

  }, { passive: true });



  /* =========================================================
     SCROLL REVEAL
     ========================================================= */

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting)
        entry.target.classList.add("active");

    });

  }, { threshold: 0.15 });

  sections.forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
  });



  /* =========================================================
     ACTIVE MENU HIGHLIGHT
     ========================================================= */

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

      const top = section.offsetTop - 200;

      if (scrollY >= top)
        current = section.id;

    });

    menuLinks.forEach(link => {

      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current)
        link.classList.add("active");

    });

  });



  /* =========================================================
     TAB SWITCH
     ========================================================= */

  document.querySelectorAll(".tab-btn").forEach(btn => {

    btn.addEventListener("click", () => {

      document.querySelectorAll(".tab-btn")
        .forEach(b => b.classList.remove("active"));

      document.querySelectorAll(".tab-content")
        .forEach(c => c.classList.remove("active"));

      btn.classList.add("active");

      const tabId = btn.dataset.tab;

      document.getElementById(tabId)
        .classList.add("active");

      if (tabsContainer)
        tabsContainer.setAttribute("data-active", tabId);

    });

  });



  /* =========================================================
     PROJECT MODAL
     ========================================================= */

  if (projectModal) {

    projectCards.forEach(card => {

      card.addEventListener("click", () => {

        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;
        modalTech.textContent = card.dataset.tech;

        projectModal.classList.add("show");

      });

    });

    modalClose.addEventListener("click", () =>
      projectModal.classList.remove("show")
    );

    projectModal.addEventListener("click", e => {

      if (e.target === projectModal)
        projectModal.classList.remove("show");

    });

  }



  /* =========================================================
     CERTIFICATE MODAL
     ========================================================= */

  certItems.forEach(item => {

    item.addEventListener("click", () => {

      certPreview.src = item.dataset.img;
      certModal.classList.add("show");

    });

  });

  if (certClose)
    certClose.addEventListener("click", () =>
      certModal.classList.remove("show")
    );

  certModal?.addEventListener("click", e => {

    if (e.target === certModal)
      certModal.classList.remove("show");

  });



  /* =========================================================
     PROJECT AUTO SLIDER
     ========================================================= */

  projectSliders.forEach(slider => {

    let scrollAmount = 0;

    const interval = setInterval(() => {

      scrollAmount += 300;

      if (scrollAmount >=
        slider.scrollWidth - slider.clientWidth)
        scrollAmount = 0;

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });

    }, 3500);

    slider.addEventListener("mouseenter",
      () => clearInterval(interval));

  });



  /* =========================================================
     TOUCH SUPPORT
     ========================================================= */

  projectSliders.forEach(slider => {

    let startX = 0;

    slider.addEventListener("touchstart", e =>
      startX = e.touches[0].clientX
    );

    slider.addEventListener("touchmove", e => {

      const moveX = e.touches[0].clientX;

      slider.scrollLeft += startX - moveX;

      startX = moveX;

    });

  });



  /* =========================================================
     3D CARD EFFECT
     ========================================================= */

  projectCards.forEach(card => {

    card.addEventListener("mousemove", e => {

      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = -(y - rect.height / 2) / 15;
      const rotateY = (x - rect.width / 2) / 15;

      card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    });

    card.addEventListener("mouseleave", () =>
      card.style.transform = "none"
    );

  });



  /* =========================================================
     FLOATING ACTION BUTTON
     ========================================================= */

  fabMain?.addEventListener("click", e => {

    e.stopPropagation();

    fabContainer.classList.toggle("active");

  });

  document.addEventListener("click", e => {

    if (!fabContainer.contains(e.target))
      fabContainer.classList.remove("active");

  });

  scrollTopBtn?.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });



  /* =========================================================
     CURSOR GLOW
     ========================================================= */

// document.addEventListener("mousemove", e => {

//   const glow = document.querySelector(".cursor-glow");

//   if(!glow) return;

//   glow.animate({
//     left: e.clientX + "px",
//     top: e.clientY + "px"
//   }, {
//     duration: 300,
//     fill: "forwards"
//   });

// });

/* =========================================================
   CURSOR GLOW EFFECT (FINAL)
   ========================================================= */

const glow = document.querySelector(".cursor-glow");

if (glow) {

  document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

  });

}




  /* =========================================================
     PAGE LOADER
     ========================================================= */

  window.addEventListener("load", () => {

    if (loader)
      loader.style.display = "none";

  });



  /* =========================================================
     PARTICLES.JS
     ========================================================= */

  if (window.particlesJS) {

    particlesJS("particles-js", {

      particles: {
        number: { value: 60 },
        color: { value: "#00adb5" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 3 },
        move: { speed: 1 }
      }

    });

  }

});


/* ================= GITHUB LIVE DATA ================= */

// async function loadGitHubStats() {

//   try {

//     const user = "shanmukhabandi17";

//     const res = await fetch(`https://api.github.com/users/${user}`);
//     const data = await res.json();

//     document.getElementById("repoCount").textContent = data.public_repos;
//     document.getElementById("followerCount").textContent = data.followers;

//     const repoRes = await fetch(data.repos_url);
//     const repos = await repoRes.json();

//     let stars = 0;
//     repos.forEach(repo => stars += repo.stargazers_count);

//     document.getElementById("starCount").textContent = stars;

//   } catch {
//     console.log("GitHub API error");
//   }

// }

// loadGitHubStats();


// document.querySelectorAll(".project-filters button")
// .forEach(btn => {

//   btn.addEventListener("click", () => {

//     const filter = btn.dataset.filter;

//     document.querySelectorAll(".project-card")
//     .forEach(card => {

//       card.style.display =
//         filter === "all" ||
//         card.dataset.category === filter
//         ? "block"
//         : "none";

//     });

//   });

// });

// document.getElementById("contactForm")
// .addEventListener("submit", e => {

//   e.preventDefault();

//   alert("Message sent successfully!");

// });


// fetch("https://api.countapi.xyz/hit/shannu-portfolio/visits")
// .then(res => res.json())
// .then(data =>
//   document.getElementById("visitorCount").textContent = data.value
// );


window.addEventListener("error", e => {

  console.log("Error caught:", e.message);

});

document.querySelector(".resume")
.addEventListener("click", () => {

  console.log("Resume downloaded");

});

/* ================= AI CHATBOT ================= */

const chatbotToggle = document.getElementById("chatbotToggle");
const chatbotWindow = document.getElementById("chatbotWindow");
const chatbotClose = document.getElementById("chatbotClose");

const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");
const chatMessages = document.getElementById("chatMessages");

/* Toggle chatbot */

chatbotToggle.addEventListener("click", () => {
  chatbotWindow.classList.toggle("show");
});

chatbotClose.addEventListener("click", () => {
  chatbotWindow.classList.remove("show");
});

/* Send message */

chatSend.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", e => {
  if(e.key === "Enter") sendMessage();
});

function sendMessage(){

  const message = chatInput.value.trim();

  if(!message) return;

  addMessage(message,"user");

  const reply = getBotReply(message.toLowerCase());

  showTypingIndicator();

  setTimeout(() => {

  removeTypingIndicator();

  typeBotMessage(reply);

  }, 800);


  chatInput.value="";
}

/* Add message */

function addMessage(text,type){

  const div = document.createElement("div");

  div.className =
    type === "user"
    ? "user-message"
    : "bot-message";

  div.textContent = text;

  chatMessages.appendChild(div);

  chatMessages.scrollTop =
    chatMessages.scrollHeight;
}
function showTypingIndicator(){

  const div = document.createElement("div");

  div.className = "bot-message typing-indicator";
  div.id = "typingIndicator";

  div.innerHTML = `
    <span class="chat-dot"></span>
    <span class="chat-dot"></span>
    <span class="chat-dot"></span>
  `;

  chatMessages.appendChild(div);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator(){

  const indicator = document.getElementById("typingIndicator");

  if(indicator) indicator.remove();
}

/* Smart replies */

function getBotReply(msg){

  if(msg.includes("skills"))
    return "Shannu knows HTML, CSS, JavaScript, PHP, MySQL, Testing, and Machine Learning.";

  if(msg.includes("projects"))
    return "Shanmukha has developed AgroCulture, a full-stack e-commerce system and ML prediction projects.";

  if(msg.includes("contact"))
    return "You can contact him via Email or LinkedIn in the contact section.";

  if(msg.includes("hire"))
    return "He is actively looking for Software Developer and Testing roles.";

  if(msg.includes("experience"))
    return "He has hands-on experience building full-stack and testing projects.";

  return "You can ask about skills, projects, contact, or experience.";
}

function typeBotMessage(text){

  const div = document.createElement("div");

  div.className = "bot-message";

  chatMessages.appendChild(div);

  let index = 0;

  function type(){

    if(index < text.length){

      div.textContent += text.charAt(index);

      index++;

      chatMessages.scrollTop = chatMessages.scrollHeight;

      setTimeout(type, 25); // typing speed

    }

  }

  type();
}


// setTimeout(type, Math.random()*20 + 10);

// window.addEventListener("scroll", () => {

//   const scrollY = window.scrollY;

//   document.querySelectorAll("section").forEach(section => {

//     section.style.backgroundPositionY =
//       scrollY * 0.15 + "px";

//   });

// }, { passive:true });



if (glow) {

  let mouseX = 0;
  let mouseY = 0;
  let glowX = 0;
  let glowY = 0;

  document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

  });

  function animateGlow() {

    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;

    glow.style.left = glowX + "px";
    glow.style.top = glowY + "px";

    requestAnimationFrame(animateGlow);

  }

  animateGlow();

}
