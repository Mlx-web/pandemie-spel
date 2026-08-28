document.addEventListener('DOMContentLoaded', function () {
  var dice = document.getElementById('dice');
  var cards = document.querySelectorAll('.grid .card');
  if (!dice || !cards.length) return;

  var FACES = {
    1: ['c'],
    2: ['tl', 'br'],
    3: ['tl', 'c', 'br'],
    4: ['tl', 'tr', 'bl', 'br'],
    5: ['tl', 'tr', 'c', 'bl', 'br'],
    6: ['tl', 'tr', 'ml', 'mr', 'bl', 'br']
  };

  function setFace(n) {
    var shown = FACES[n] || [];
    dice.querySelectorAll('.pip').forEach(function (pip) {
      pip.classList.toggle('show', shown.indexOf(pip.dataset.pip) !== -1);
    });
  }

  setFace(5);

  var rolling = false;

  function rollDice() {
    if (rolling) return;
    rolling = true;

    dice.classList.add('rolling');
    cards.forEach(function (card) { card.classList.remove('highlight'); });

    setTimeout(function () {
      dice.classList.remove('rolling');
      var index = Math.floor(Math.random() * cards.length);
      var pick = cards[index];
      setFace(index + 1);
      pick.classList.add('highlight');
      pick.scrollIntoView({ behavior: 'smooth', block: 'center' });
      rolling = false;
    }, 600);
  }

  dice.addEventListener('click', rollDice);
  dice.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      rollDice();
    }
  });
});
