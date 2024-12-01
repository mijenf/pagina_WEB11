document.addEventListener('DOMContentLoaded', () => {
  const festivalElements = document.querySelectorAll('.festival-glow');
  const infoText = document.getElementById('festival-info');

  festivalElements.forEach(festival => {
    festival.addEventListener('click', () => {
      const festivalInfo = festival.getAttribute('data-info');
      infoText.textContent = `🎉 ${festivalInfo}`;
      infoText.classList.add('shiny-text');

      // Efecto de parpadeo al hacer clic
      festival.style.animation = 'flash 1s ease-in-out 3';
    });
  });
});

/* Animación de flash para cada festival */
const css = `
@keyframes flash {
  0%, 100% { background-color: transparent; }
  50% { background-color: rgba(255, 255, 255, 0.5); }
}`;
const style = document.createElement('style');
style.innerHTML = css;
document.head.appendChild(style);
