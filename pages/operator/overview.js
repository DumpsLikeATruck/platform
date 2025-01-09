    window.addEventListener('load', () => {
      const container = document.body;
      const divs = Array.from(document.querySelectorAll('.date-div'));

      divs.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return dateA - dateB; // Ascending order
      });

      divs.forEach(div => container.appendChild(div));
    });
