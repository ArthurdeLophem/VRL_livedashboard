const Primus = require('primus');
let go = (server) => {
    const primus = new Primus(server, {});

    //primus.save(__dirname + '/primuslib.js');

    primus.on('connection', (spark) => {
        spark.on("data", (data) => {
            primus.write(data);
            console.log(data);
        })

    });
};

module.exports.go = go;