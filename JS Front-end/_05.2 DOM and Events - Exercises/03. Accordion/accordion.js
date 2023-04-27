function toggle() {
    let btn = document.querySelector("#accordion > div.head > span");
    let extraText = document.getElementById("extra");
  
    if (btn.textContent === "More") {
      btn.textContent = "Less";
      extraText.style.display = "block";
    } else {
      btn.textContent = "More";
      extraText.style.display = "none";
    }
  }