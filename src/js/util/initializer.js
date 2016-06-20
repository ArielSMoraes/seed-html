UTIL = {
   exec: function( app, controller, action ) {
       var ns = app, action = ( action === undefined ) ? "init" : action;
       if ( controller !== "" && ns[controller] && typeof ns[controller][action] == "function" ) {
          ns[controller][action]();
       }
   },
   init: function(app) {
      var body = document.body, controller = body.getAttribute( "data-controller" ), action = body.getAttribute( "data-action" );
      UTIL.exec( app, "common" );
      UTIL.exec( app, controller );
      UTIL.exec( app, controller, action );
   }
};

module.exports = UTIL;
