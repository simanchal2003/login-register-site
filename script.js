// ✅ Agar device ka screen width 991px se chhota hai to access roko
if (window.innerWidth < 991) {
  alert("This site is only available on desktop!");
  document.body.innerHTML = "<h2 style='color: red; text-align: center; margin-top: 40vh;'>This site is only available on desktop.</h2>";
}

// Container, toggle buttons aur text elements ko access karo
const container = document.getElementById('container');
const toggleBtn = document.getElementById('toggleBtn');
const toggleTitle = document.getElementById('toggleTitle');
const toggleText = document.getElementById('toggleText');
const starContainer = document.getElementById('starContainer');
const heartContainer = document.getElementById('heartContainer');

// Login form by default active hai
let isLogin = true;

// Jab toggle button dabaya jaye, form switch ho
function toggleForm() {
  // State change kar rahe hain (login se register ya vice versa)
  isLogin = !isLogin;

  // Container ka 'active' class add/remove hota hai
  container.classList.toggle('active');

  // Title, Text aur Button text change hota hai based on form
  toggleTitle.textContent = isLogin ? "Hello, Welcome!" : "Welcome Back!";
  toggleText.textContent = isLogin ? "Don't have an account?" : "Already have an account?";
  toggleBtn.textContent = isLogin ? "Register" : "Login";
}

// Dark mode on/off karne ka function
function toggleDarkMode() {
  // Body class dark add/remove hoti hai
  document.body.classList.toggle('dark');

  // Agar dark mode ON hai to stars show karo, hearts hatao
  if (document.body.classList.contains('dark')) {
    generateStars();        // Stars banate hain
    heartContainer.innerHTML = ''; // Hearts hata dete hain
  } else {
    // Agar light mode hai to stars hatao, hearts banao
    starContainer.innerHTML = '';
    generateHearts();
  }
}

// Dark mode ke liye stars create karte hain
function generateStars() {
  starContainer.innerHTML = ''; // Pehle se bane stars hatao

  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div'); // Ek star banaya
    star.classList.add('star'); // Class add ki

    // Random position set ki
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    // Random twinkle animation speed
    star.style.animationDuration = `${1 + Math.random() * 2}s`;

    // Container mein add kiya
    starContainer.appendChild(star);
  }
}

// Light mode ke liye hearts create karte hain
function generateHearts() {
  heartContainer.innerHTML = ''; // Pehle se bane hearts hatao

  for (let i = 0; i < 25; i++) {
    const heart = document.createElement('div'); // Ek heart banaya
    heart.classList.add('heart'); // Class add ki

    // Random position aur delay
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 10}s`;

    // Container mein add kiya
    heartContainer.appendChild(heart);
  }
}

// Jab page load ho to agar dark mode nahi hai to hearts dikhayein
window.onload = () => {
  if (!document.body.classList.contains('dark')) {
    generateHearts();
  }
};
