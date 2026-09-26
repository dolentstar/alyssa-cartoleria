// La lista: le voci spuntate e il testo libero diventano una mail al negozio.
(() => {
  const f = document.getElementById('foglio'), inv = document.getElementById('invia'), conta = document.getElementById('conta'), altro = document.getElementById('altro');
  const aggiorna = () => {
    const v = [...f.querySelectorAll('input:checked')].map(i => i.value);
    const extra = altro.value.trim();
    const righe = v.map(x => '- ' + x).concat(extra ? ['', extra] : []);
    const corpo = 'Buongiorno,\nvorrei sapere se avete:\n\n' + righe.join('\n') + '\n\nGrazie!';
    inv.href = 'mailto:alyssa_2004@libero.it?subject=' + encodeURIComponent('Lista per la cartoleria') + '&body=' + encodeURIComponent(corpo);
    const n = v.length + (extra ? 1 : 0);
    conta.textContent = n ? `${n} ${n === 1 ? 'voce' : 'voci'} nella lista` : 'Nessuna voce spuntata';
  };
  f.addEventListener('input', aggiorna);
  f.addEventListener('submit', e => e.preventDefault());
  aggiorna();
})();
