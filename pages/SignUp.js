export function renderSignupPage(container) {
  container.innerHTML = `<div class="signup-page">
      <div class="signup">
        <div class="signup-form-container">
          <div class="label-container">
            <img
              class="landing-label"
              src= './assets/instagram_label.jpg'
              alt="instagram label"
            />
          </div>
          <p class="signup-string">
            Sign up to see photos and videos from your friends.
          </p>
          <button class="facebook-button">Log in with Facebook</button>
          <div class="weird-or-section">
            <div class="line"></div>
            <div class="or">
              <p>OR</p>
            </div>
            <div class="line"></div>
          </div>
          <form class="signup-form">
            <input type="text" placeholder="Mobile Number or email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Username" />
          </form>

          <div class="signup-info">
            <p>
              People who use our service may have uploaded your contact
              information to Instagram. Learn More
            </p>
            <br />
            <p>
              By signing up, you agree to our
              Terms
              Privacy Policy and
              Cookies Policy.
            </p>
          </div>
            <button id="signup-btn" class="signup-button">Sign Up</button>
        </div>

        <div class="signin-section">
          <p>Have an account?</p>
            <p id="back-to-login">Log in</p>
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

  document.getElementById("signup-btn").addEventListener("click", () => {
    // Handle signup logic
    window.location.hash = "main"; // Navigate to main page 
  });

    document.getElementById("back-to-login").addEventListener("click", () => {
    // Handle signup logic
    window.location.hash = "landing"; // Navigate to main page back-to-login
  });
}
