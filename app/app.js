requirejs.config({
  "baseUrl": ".",
  "paths": {
    "jquery"    : "http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min",
    "underscore": "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min",
    "backbone"  : "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min"
  }
});

requirejs(["app/main"]);
