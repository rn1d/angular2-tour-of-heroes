module.exports = {
  "port": 8000,
  // "files": ["./src/**/*.{html,htm,css,js}"],
  "server": {
    "baseDir": [
      // "./src",
      "./"
    ], 
    middleware: {      
      0: null     // removes default `connect-logger` middleware
    }
  }
};
