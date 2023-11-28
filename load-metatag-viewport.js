document.addEventListener("DOMContentLoaded", function () {
  var viewportScript = document.createElement("script");

  var scriptContent = document.createTextNode(`
    var viewportMetaTag = document.createElement("meta");
    viewportMetaTag.name = "viewport";
    viewportMetaTag.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(viewportMetaTag);
  `);

  viewportScript.appendChild(scriptContent);

  viewportScript.async = false;

  document.head.appendChild(viewportScript);
});
