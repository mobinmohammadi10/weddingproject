document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector(".envelope-wrapper");
    const music = document.getElementById("background-music");
  
    envelope.addEventListener("click", () => {
      envelope.classList.toggle("flap");
  
      // Play music when the envelope is opened
      if (!music.playing) {
        music.play().catch((error) => {
          console.error("Music playback failed:", error);
        });
      }
    });
  });