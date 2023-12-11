// Funktion zum Bestimmen der aktuellen Tailwind-Responsive-Klasse
function getCurrentTailwindClass(width) {
  if (width >= 1536) {
    return "2xl";
  } else if (width >= 1280) {
    return "xl";
  } else if (width >= 1024) {
    return "lg";
  } else if (width >= 768) {
    return "md";
  } else if (width >= 640) {
    return "sm";
  } else {
    return "xs";
  }
}

function updateScreenSizeDisplay() {
  const screenSizeDisplay = document.getElementById("screen-size-display");
  const currentWidth = window.innerWidth;
  const tailwindClass = getCurrentTailwindClass(currentWidth);
  screenSizeDisplay.innerText = `Bildschirmbreite: ${currentWidth}px - Tailwind Klasse: ${tailwindClass}`;
}

function createScreenSizeDisplay() {
  const screenSizeDisplay = document.createElement("div");
  screenSizeDisplay.id = "screen-size-display";
  screenSizeDisplay.style.position = "fixed";
  screenSizeDisplay.style.top = "0";
  screenSizeDisplay.style.left = "0";
  screenSizeDisplay.style.backgroundColor = "rgba(0,0,0,0.7)";
  screenSizeDisplay.style.color = "white";
  screenSizeDisplay.style.padding = "5px";
  screenSizeDisplay.style.zIndex = "1000";
  document.body.appendChild(screenSizeDisplay);
  updateScreenSizeDisplay();
}

window.addEventListener("resize", updateScreenSizeDisplay);

window.onload = createScreenSizeDisplay;
