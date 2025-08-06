function continueToSite() {
  const email = document.getElementById('emailInput').value;
  if (email && email.includes('@')) {
    localStorage.setItem('userEmail', email);
    document.getElementById('emailGate').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
  } else {
    alert('Please enter a valid email address');
  }
}

// Auto-show main if already submitted
window.onload = () => {
  const userEmail = localStorage.getItem('userEmail');
  if (userEmail) {
    document.getElementById('emailGate').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
  }
};

// preloder
  const messages = [
    "Trusted Source.",
    "Pure Gold.",
    "Direct to You."
  ];

  const typewriter = document.getElementById("typewriter");
  let messageIndex = 0;
  let charIndex = 0;

  function typeMessage() {
    if (charIndex < messages[messageIndex].length) {
      typewriter.textContent += messages[messageIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeMessage, 100); // Speed of typing
    } else {
      // Pause before clearing and moving to next message
      setTimeout(() => {
        messageIndex++;
        if (messageIndex < messages.length) {
          typewriter.textContent = "";
          charIndex = 0;
          typeMessage();
        }
      }, 1000); // Pause between phrases
    }
  }

  // Start typing
  typeMessage();

  // Remove preloader after 10 seconds
  setTimeout(() => {
    document.getElementById("preloader").classList.add("fade-out");
    document.getElementById("main-content").style.display = "block";
  }, 8000);
