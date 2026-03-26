console.log("script.js loaded");

// GIPHY API KEY
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const button = document.querySelector("#fetch-gif-btn");
const gifContainer = document.querySelector("#gif-container");
const searchInput = document.querySelector("#search-input");

button.addEventListener("click", async () => {
const query = searchInput.value.trim() || "dogs";

  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

 try {
    const res = await fetch(endpoint);
    const data = await res.json();
    const images = data.data.map(gif => gif.images.original.url);

    gifContainer.innerHTML = "";

    images.forEach(url => {
      gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3">`;
    });

  } catch (err) {
    console.error("Error:", err);
  }
});