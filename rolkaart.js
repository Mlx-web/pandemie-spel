document.addEventListener('DOMContentLoaded', function () {
  var THEMES = {
    1: '#f2b443',
    2: '#e28b28',
    3: '#d65b4f',
    4: '#e28b28',
    5: '#f2b443'
  };

  var scenarioNr = new URLSearchParams(location.search).get('van');

  if (!scenarioNr || !THEMES[scenarioNr]) {
    var match = document.referrer.match(/scenario([1-5])(?:\.html)?(?:[/?#]|$)/);
    scenarioNr = match ? match[1] : null;
  }

  var color = scenarioNr ? THEMES[scenarioNr] : null;
  var btn = document.querySelector('.nav-card button');
  if (btn && color) {
    btn.style.setProperty('--accent', color);
  }
});
