console.log("script.js loaded");

// Get API key from .env via Vite
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

console.log("API_KEY:", API_KEY);

const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    const images = data.data.map(gif => gif.images.original.url);
    console.log(images);
  })
  .catch(err => console.error("Error:", err));
  