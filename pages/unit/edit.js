// Select all tabs and panes
const tabs = document.querySelectorAll(".w-tab-link");
const panes = document.querySelectorAll(".w-tab-pane");

// Add event listeners to the Next and Back buttons within each pane
panes.forEach((pane, index) => {
  const nextButton = pane.querySelector(".next");
  const backButton = pane.querySelector(".back");

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (index < tabs.length - 1) {
        tabs[index + 1].click(); // Simulate clicking the next tab
      }
    });
  }

  if (backButton) {
    backButton.addEventListener("click", () => {
      if (index > 0) {
        tabs[index - 1].click(); // Simulate clicking the previous tab
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.getElementById('depositSelect');
  const input = document.getElementById('deposit');
  const dollar = document.getElementById('depositDollar');
  const percent = document.getElementById('depositPercent');
  const block = document.getElementById('depositBlock');
  block.style.display = "none"; 

  dropdown.addEventListener('change', () => {
    if (dropdown.value === "No Deposit") {
      block.style.display = "none"; 
      input.value = "";
      input.disabled = true;
    } else if (dropdown.value === "Amount") {
      dollar.style.display = "block";
      percent.style.display = "none";
      block.style.display = "flex"; 
      input.value = "";
      input.disabled = false;
      dollar.classList.add("left");
     	dollar.classList.remove("right");
      input.classList.add("right");
      input.classList.remove("left");      
    } else if (dropdown.value === "Percent") {
      dollar.style.display = "none";
      percent.style.display = "block";
      block.style.display = "flex"; 
      input.value = "";
      input.disabled = false;
      percent.classList.add("right");
      percent.classList.remove("left");
      input.classList.add("left");
      input.classList.remove("right"); 
    }else{
    	block.style.display = "none";
      input.value = "";
      input.disabled = true;
    }
  });
});
