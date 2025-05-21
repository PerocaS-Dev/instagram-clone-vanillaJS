export function renderMainPage(container) {
  container.innerHTML = `
    <div class="main">
      <div class="sidebar-section">
        <div class="label">
          <img
            class="sidebar-label"
            src="./assets/instagram_label.jpg"
            alt="instagram label"
          />
        </div>
        <div class="sidebar-options">
          <div class="option">
            <span class="material-symbols-outlined">home</span>
            <span class="active-option">Home</span>
          </div>
          <div class="option">
            <span class="material-symbols-outlined">search</span>
            <span>Search</span>
          </div>
          <div class="option">
            <span class="material-symbols-outlined">explore</span>
            <span>Explore</span>
          </div>
          <div class="option">
            <span class="material-symbols-outlined">movie</span>
            <span>Reels</span>
          </div>
          <div class="option">
            <span class="material-symbols-outlined">send</span>
            <span>Messages</span>
          </div>
          <div class="option">
            <span class="material-symbols-outlined">favorite</span>
            <span>Notifications</span>
          </div>
          <div class="option">
            <span class="material-symbols-outlined">add_box</span>
            <span>Create</span>
          </div>
          <div class="option">
            <span class="material-symbols-outlined">account_circle</span>
            <span>Profile</span>
          </div>
          <div class="option">
            <span class="material-symbols-outlined">menu</span>
            <span>More</span>
          </div>
        </div>
      </div>
      <div class="feed-section">
        <div class="mid-section">
          <div class="stories">
            <div class="story">
            </div>
          </div>
          <div class="feed"></div>
        </div>
        <div class="suggestions-section"></div>
      </div>
    </div>`
    ;

  // Add main page logic here
}
