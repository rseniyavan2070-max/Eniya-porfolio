// Function to change the dynamic phrase when navigation links are clicked
function changePhrase(text) {
  const phrase = document.getElementById("dynamic-phrase");
  phrase.innerText = text;

  // Re-trigger animation
  phrase.style.animation = "none";
  void phrase.offsetWidth; // Force reflow
  phrase.style.animation = "fadeIn 1.5s ease";
}
