// Unsplash API Key
const API_KEY = "0jaW76GmV-xHvry-l-ivCaNWjKREObtswhbgk6cjke4"; // Replace with your Unsplash Access Key
const BASE_URL = "https://api.unsplash.com/photos/random?count=20"; // Fetch 20 random images

// DOM Elements
const gallery = document.getElementById("gallery");

// Fetch images from Unsplash API
async function fetchImages() {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }

    const data = await response.json();
    displayImages(data);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

// Display images in the gallery
function displayImages(photos) {
  gallery.innerHTML = photos
    .map(
      (photo) => `
      <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
        <img src="${photo.urls.regular}" alt="${
        photo.description || "Unsplash Image"
      }" class="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300" />
        <div class="p-4">
          <h2 class="text-xl font-semibold">${photo.user.name}</h2>
          <p class="text-gray-600 dark:text-gray-400 text-sm">${
            photo.description || "No description available"
          }</p>
        </div>
      </div>
    `
    )
    .join("");
}

// Initialize the app
fetchImages();

const userIcon = document.querySelector(".user-icon");
const signupModal = document.getElementById("signupModal");
const signupForm = document.getElementById("signupForm");
const closeButton = signupModal.querySelector(".close-btn");
const overlay = document.getElementById("overlay"); // Get the overlay

function toggleSignupModal() {
  signupModal.style.display =
    signupModal.style.display === "block" ? "none" : "block";
  overlay.style.display =
    signupModal.style.display === "block" ? "block" : "none"; // Toggle overlay
}

userIcon.addEventListener("click", toggleSignupModal);
closeButton.addEventListener("click", toggleSignupModal);
overlay.addEventListener("click", toggleSignupModal); // Close on overlay click

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  toggleSignupModal(); // Close after submit (or after server response)
  signupForm.reset();
});
