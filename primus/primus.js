const Primus = require('primus');
let go = (server) => {
    const primus = new Primus(server, {});

    //primus.save(__dirname + '/primuslib.js');

    primus.on('connection', (spark) => {
        console.log("received sparky ✨");
    });
};

module.exports.go = go;