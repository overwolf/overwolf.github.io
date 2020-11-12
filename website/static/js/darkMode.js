(function(){
var
    hljsStylesheetBright = getStylesheetByHref('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css'),
    hljsStylesheetDark = getStylesheetByHref('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/dracula.min.css'),
    darkModeCheckbox;

function start() {
    window.addEventListener('storage', onStorageEvent);
    document.addEventListener('DOMContentLoaded', setupModeSwitchButton);

    if ( window.matchMedia && localStorage.darkMode === undefined && window.matchMedia('(prefers-color-scheme: dark)').matches )
        localStorage.darkMode = '1';

    if ( localStorage.darkMode === '1' ) {
        setDarkMode(true);
        hljsStylesheetBright.disabled = true;
    } else {
        hljsStylesheetDark.disabled = true;
    }
}

function onStorageEvent(e) {
    if ( e.key === 'darkMode' ) {
        setDarkMode( e.newValue === '1' );
        darkModeCheckbox.checked = ( e.newValue === '1' );
    }
}

function setupModeSwitchButton() {
    var cont = document.createElement('label');

    cont.classList.add('dark-mode-switch');
    cont.title = 'Toggle dark mode';

    darkModeCheckbox = document.createElement('input');

    darkModeCheckbox.type = 'checkbox';

    darkModeCheckbox.checked = localStorage.darkMode === '1';

    cont.appendChild(darkModeCheckbox);

    var block = document.createElement('span');

    block.innerText = 'Toggle dark mode';

    cont.appendChild(block);

    var header = document.querySelector('.headerWrapper > header');

    if ( header )
        document.querySelector('.headerWrapper > header').appendChild(cont);

    darkModeCheckbox.addEventListener('change', function(e) {
        if ( e.target.checked )
            localStorage.darkMode = '1';
        else
            localStorage.darkMode = '0';

        setDarkMode(e.target.checked);
    });
}

function setDarkMode(enable) {
    if ( enable ) {
        hljsStylesheetBright.disabled = true;
        hljsStylesheetDark.disabled = false;
        document.documentElement.classList.add('theme-dark');
    } else {
        hljsStylesheetBright.disabled = false;
        hljsStylesheetDark.disabled = true;
        document.documentElement.classList.remove('theme-dark');
    }
}

function getStylesheetByHref(href) {
    return document.querySelector(`link[href="${href}"]`);
}

start();
})();
