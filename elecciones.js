document.addEventListener('DOMContentLoaded', () => {
  // Enviar quejas y sugerencias
  const formQuejas = document.getElementById('quejas-sugerencias');
  formQuejas.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Tu queja o sugerencia ha sido enviada con éxito! 🎉');
  });

  // Simulador de voto
  const formVoto = document.getElementById('simulador-voto');
  const resultadoVoto = document.getElementById('resultado-voto');
  formVoto.addEventListener('submit', (e) => {
    e.preventDefault();
    const partido = document.getElementById('partido').value;
    resultadoVoto.textContent = `¡Has votado por ${partido.toUpperCase()}! 🗳️`;
    resultadoVoto.classList.add('shiny-text');
  });
});
