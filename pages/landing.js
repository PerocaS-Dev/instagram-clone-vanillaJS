export function renderLandingPage(container) {
  container.innerHTML = `<div class="landing-page">
        <div class="landing">
        <div class="landing-design">
          <img
            class="design-picture"
            src="./assets/design.png"
            alt="the design picture"
          />
        </div>
        <div class="login-section">
          <div class="landing-form-container">
            <div class="label-container">
              <img
                class="landing-label"
                src="./assets/instagram_label.jpg"
                alt="instagram label"
              />
            </div>
            <form class="login-form">
              <input
                type="text"
                placeholder="Phone number, username, or email"
              />
              <input type="password" placeholder="Password" />
              <button id="login-btn" class="login-button">Log in</button>
              
            </form>
            <div class="weird-or-section">
              <div class="line"></div>
              <div class="or">
                <p>OR</p>
              </div>
              <div class="line"></div>
            </div>

            <div class="facebook-login">
              <p>Log in with Facebook</p>
            </div>

            <p class="forgot-password">Forgot password?</p>
            <br />
            <p class="with-account">Don't have an account?&nbsp;<span id="link-to-signup">Sign up<span/></p>
          </div>
        </div>
      </div>
      <div class="footer">
      <div class="footer-nav">
        <span>Meta</span>
        <span>About</span>
        <span>Blog</span>
        <span>Jobs</span>
        <span>Help</span>
        <span>API</span>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Locations</span>
        <span>Instagram Lite</span>
        <span>Threads</span>
        <span>Contact Uploading & Non-Users</span>
        <span>Meta Verified</span>
      </div>
      <div class="footer-info">
        <span>
          <select name="Languages" id="languages">
            <option value="english">English</option>
            <option value="english">Zulu</option>
            <option value="english">Xhosa</option>
            <option value="english">Ndebele</option>
            <option value="english">Swati</option>
            <option value="english">Tsonga</option>
            <option value="english">Venda</option>
            <option value="english">Sotho</option>
            <option value="english">Pedi</option>
            <option value="english">Tswana</option>
            <option value="english">Afrikaans</option>
          </select>
        </span>
        <span>© 2025 Instagram Clone By Peroca</span>
      </div>
    </div>
    </div>`;

  // Add form event listener
  document.getElementById("login-btn").addEventListener("click", () => {
    // Handle login logic
    window.location.hash = "main"; // Navigate to main page 
  });

    // Add form event listener
  document.getElementById("link-to-signup").addEventListener("click", () => {
    // Handle login logic
    window.location.hash = "signup"; // Navigate to main page 
  });
}
