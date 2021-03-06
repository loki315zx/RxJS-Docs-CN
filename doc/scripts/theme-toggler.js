(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var themes = ['dark', 'light'];
    var themesMap = {'dark': '暗色', 'light': '亮色'};
    var themeToggler = document.createElement('div');
    themeToggler.className = 'theme-toggler';

    function setBodyClassName(theme) {
      document.body.className = 'layout-container manual-root ' + theme + '-theme';
    }

    function createTheme(theme) {
      var themeNode = document.createElement('span');
      themeNode.className = 'theme-selector ' + theme;
      themeNode.innerHTML = themesMap[theme] + '主题';

      themeNode.addEventListener('click', function () {
        setBodyClassName(theme);
        localStorage && localStorage.setItem('rxjstheme', theme);
      });
      themeToggler.appendChild(themeNode);
    }

    themes.forEach(createTheme);

    var currentTheme = localStorage && localStorage.getItem('rxjstheme');
    currentTheme = currentTheme || 'dark';
    setBodyClassName(currentTheme);
    document.querySelector('header').appendChild(themeToggler);
  });
})();
