import { renderLandingPage } from "./landing.js";
import { renderMainPage } from "./main.js";

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
          <form class="signup-form" id="signup-form">
            <input type="email" id="signup-email" placeholder="Email" required />
            <input type="password" id="signup-password" placeholder="Password" required />
            <input type="text" id="signup-fullname" placeholder="Full Name" required />
            <input type="text" id="signup-username" placeholder="Username" required />
            <button type="submit" id="signup-btn" class="signup-button">Sign Up</button>
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

  document.getElementById("back-to-login").addEventListener("click", () => {
    const container = document.getElementById("app"); // Main app container div
    renderLandingPage(container);
  });

  document
    .getElementById("signup-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("signup-email").value.trim();
      const password = document.getElementById("signup-password").value.trim();
      const username = document.getElementById("signup-username").value.trim();

      if (!email || !email.includes("@") || !password || !username) {
        alert("Please enter a valid email, password, and username.");
        return;
      }

      try {
        const userCredential = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        const user = userCredential.user;

        await db.collection("users").doc(user.uid).set({
          username: username,
          email: email,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });

        renderMainPage(document.getElementById("app"));
      } catch (error) {
        alert(`Sign Up Failed: ${error.message}`);
      }
    });
}
