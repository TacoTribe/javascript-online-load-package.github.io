// load.js
(function() {
    var scripts = [
        "https://tacotribe.github.io/javascript-online-load-package.github.io/dark-mode.js",
        "https://tacotribe.github.io/javascript-online-load-package.github.io/mdcjs231202gntr.js",
        "https://tacotribe.github.io/javascript-online-load-package.github.io/load-metatag-viewport.js",
        "https://tacotribe.github.io/javascript-online-load-package.github.io/nav-border-dekstop.js",
        "https://tacotribe.github.io/javascript-online-load-package.github.io/nav-border-mobile.js",
        "https://tacotribe.github.io/javascript-online-load-package.github.io/navigate-section.js",
        "https://code.jquery.com/jquery-3.7.1.js" // jQuery
    ];

    var stylesheets = [
        "https://tacotribe.github.io/css-code-package.github.io/main.css",
        "https://fonts.googleapis.com/icon?family=Material+Icons",
        "https://kit.fontawesome.com/d59547203e.js" // Font Awesome
    ];

    function loadScript(url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onload = callback;
        document.head.appendChild(script);
    }

    function loadStylesheet(url) {
        var stylesheet = document.createElement('link');
        stylesheet.rel = 'stylesheet';
        stylesheet.href = url;
        document.head.appendChild(stylesheet);
    }

    function loadAllScripts(index) {
        if (index < scripts.length) {
            loadScript(scripts[index], function() {
                loadAllScripts(index + 1);
            });
        } else {
            // All scripts loaded, now load stylesheets
            loadAllStylesheets(0);
        }
    }

    function loadAllStylesheets(index) {
        if (index < stylesheets.length) {
            loadStylesheet(stylesheets[index]);
            loadAllStylesheets(index + 1);
        }
    }

    // Start loading scripts
    loadAllScripts(0);
})();
