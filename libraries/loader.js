function fadeOut(element, duration = 250) {
  let opacity = 1; 
  const interval = 10; 
  const gap = interval / duration; 

function fade() {
    opacity -= gap;
    element.style.opacity = opacity;
    if (opacity <= 0) {
      element.style.display = 'none'; 
      clearInterval(fading);
    }
  }
  const fading = setInterval(fade, interval);
}

function hideWithDelay(element, duration = 250) {
    const now = Date.now();
    if (!firstDisplayedTimestamp) {
        firstDisplayedTimestamp = now;
    }
    const elapsedTime = now - firstDisplayedTimestamp;
    const delay = Math.max(0, 1100 - elapsedTime);
    setTimeout(() => fadeOut(element, duration), delay);
}

async function fetchData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
