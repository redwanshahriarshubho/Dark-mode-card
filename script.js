document.getElementById("toggle-btn").addEventListener("click", function () {
  const body = document.getElementById("body");
  const card = document.getElementById("card");

  if (body.classList.contains("bg-white")) {
    // Switch to dark mode
    body.classList.replace("bg-white", "bg-gray-900");
    body.classList.replace("text-gray-800", "text-white");
    card.classList.replace("bg-gray-100", "bg-gray-800");
  } else {
    // Switch back to light mode
    body.classList.replace("bg-gray-900", "bg-white");
    body.classList.replace("text-white", "text-gray-800");
    card.classList.replace("bg-gray-800", "bg-gray-100");
  }
});
