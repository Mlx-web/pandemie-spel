document.addEventListener('DOMContentLoaded', function () {
  var THEMES = {
    1: '#f2b443',
    2: '#e28b28',
    3: '#d65b4f',
    4: '#e28b28',
    5: '#f2b443'
  };

  var match = document.referrer.match(/scenario([1-5])\.html/);
  if (!match) return;

  var color = THEMES[match[1]];
  var btn = document.querySelector('.nav-card button');
  if (btn && color) {
    btn.style.setProperty('--accent', color);
  }
});
