// Tableau de stories
const stories = [
  {name: "Anass Jabrane", image: "images/louvermuseum.jpg"},
  {name: "User 2", image: "images/viator2.jpg"}
];

// Function pour afficher les stories
function renderStories() {
  const container = document.getElementById("storiesContainer");
  container.innerHTML = ""; // Clear container
  stories.forEach(s => {
    container.innerHTML += `
      <div class="flex flex-col items-center gap-1 flex-shrink-0">
        <div class="w-20 h-20 rounded-full border-4 p-1">
          <img src="${s.image}" alt="${s.name}" class="w-full h-full rounded-full object-cover">
        </div>
        <p class="text-xs text-gray-700 truncate w-20 text-center">${s.name}</p>
      </div>
    `;
  });
}

// Add a new story
function addStory(name, image) {
  if (!name || !image) return alert("Enter both name and image URL");
  stories.push({name, image});
  renderStories();
}

// Event listener for Add Story button
document.getElementById("addStoryBtn").addEventListener("click", () => {
  const name = document.getElementById("storyName").value;
  const image = document.getElementById("storyImage").value;
  addStory(name, image);

  // Clear inputs
  document.getElementById("storyName").value = "";
  document.getElementById("storyImage").value = "";
});

// Initial render
renderStories();
