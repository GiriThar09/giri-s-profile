// Simple typing effect
const text = "Full stack developer | DevOps  | AI enthusiast";
let i = 0;

function typing() {
  const element = document.querySelector("header p");
  if (!element) {
    console.error("Header paragraph element not found");
    return;
  }
  if (i < text.length) {
    element.textContent += text.charAt(i);
    i++;
    setTimeout(typing, 130);
  }
}

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const element = document.querySelector("header p");
  if (element) {
    element.textContent = "";
    typing();
  } else {
    console.error("Header paragraph element not found");
  }
});

// Interactive welcome animation trigger
document.addEventListener("DOMContentLoaded", function() {
  const welcome = document.getElementById('welcome-title');
  if (!welcome) return;

  function trigger() {
    welcome.classList.remove('animate');
    // force reflow to restart animation
    void welcome.offsetWidth;
    welcome.classList.add('animate');
  }

  // Use click for reliable triggering and pointerdown for touch devices.
  welcome.addEventListener('click', trigger);
  welcome.addEventListener('pointerdown', trigger);
  welcome.style.touchAction = 'manipulation';

  // Remove animate class after animation ends to allow retrigger
  welcome.addEventListener('animationend', function() {
    welcome.classList.remove('animate');
  });
});