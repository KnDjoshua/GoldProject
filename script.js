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
