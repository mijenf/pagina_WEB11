document.addEventListener('DOMContentLoaded', () => {
  const festivalElements = document.querySelectorAll('.festival');
  const infoText = document.getElementById('festival-info');

  festivalElements.forEach(festival => {
    festival.addEventListener('click', () => {
      const festivalInfo = festival.getAttribute('data-info');
      infoText.textContent = `Detalles: ${festivalInfo}`;
    });
  });
});
