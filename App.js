// Import page components
import { renderLandingPage } from './pages/landing.js';
import { renderSignupPage } from './pages/signup.js';
import { renderMainPage } from './pages/main.js';

const app = document.getElementById('app');

// Simple router
function router() {
  const path = window.location.hash.replace('#', '') || 'landing';
  
  app.innerHTML = ''; // Clear previous content
  
  switch(path) {
    case 'landing':
      renderLandingPage(app);
      break;
    case 'signup':
      renderSignupPage(app);
      break;
    case 'main':
      renderMainPage(app);
      break;
    default:
      renderLandingPage(app);
  }
}

// Initialize router and listen for changes
window.addEventListener('load', router);
window.addEventListener('hashchange', router);