// posts.js

// Render a single post
export function renderPost(postData) {
  return `
    <div class="post">
      <div class="post-header-container">
        <div class="post-header">
          <div class="profile-pic-container">
            <img class="post-profile-pic" src="${postData.profilePic || './assets/default-profile.jpg'}" />
          </div>
          <div class="instagram-tag"><p class="heavy">${postData.username}</p></div>
          <div class="post-age"><p>· ${timeAgo(postData.createdAt)}</p></div>
        </div>
        <div class="more-options"><span class="material-icons-outlined">more_horiz</span></div>
      </div>
      <div class="posted-content">
        <img class="post-content" src="${postData.imageUrl}" />
      </div>
      <div class="post-footer">
        <div class="post-reactions-options">
          <div class="post-reactions">
            <span class="material-icons-outlined reaction">favorite_border</span>
            <span class="material-icons-round reaction">maps_ugc</span>
            <span class="material-icons-outlined reaction">send</span>
          </div>
          <div class="save-container"><span class="material-icons-outlined">bookmark_border</span></div>
        </div>
        <div class="likes heavy">${postData.likes?.toLocaleString() || 0} likes</div>
        <div class="post-caption">
          <div class="instagram-tag"><p class="heavy">${postData.username}</p></div>
          <div class="caption"><p>${postData.caption}</p></div>
          <div><span class="comments">View all 25 comments</span></div>
          <div><input class="input-comment" type="text" placeholder="Add a comment..."/></div>
        </div>
      </div>
    </div>
  `;
}

export function loadPosts(containerId = 'posts-container') {
  const container = document.getElementById(containerId); // ✅ define it here
  if (!container) {
    console.warn(`Container with ID '${containerId}' not found.`);
    return;
  }

  firebase.firestore()
    .collection('posts')
    .orderBy('createdAt', 'desc')
    .onSnapshot((snapshot) => {
      console.log("[Firestore] Snapshot received:", snapshot.docs.length);

      container.innerHTML = ''; // ✅ this line works now

      if (snapshot.empty) {
        container.innerHTML = '<p>No posts found.</p>';
      }

      snapshot.forEach((doc) => {
        const data = doc.data();
        console.log("[Post Data]", data); // ✅ confirm structure
        container.innerHTML += renderPost(data);
      });
    });
}


// Utility
function timeAgo(timestamp) {
  if (!timestamp) return '';
  const now = new Date();
  const diff = now - timestamp.toDate();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h`;
  const days = Math.floor(hrs / 24);
  return `${days}d`;
}

