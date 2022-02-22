require('dotenv').config({ path: './config.env' });
const mongoose = require("mongoose");
module.exports = function (app) {
    mongoose.connect(process.env.ATLAS_URI, {      
        useUnifiedTopology: true,
        useNewUrlParser: true,

        dbName: "ice_factory_suphakit"
    }).then(connection => console.log("Application is connected to db")).catch(err => console.log(err))
    mongoose.Promise = global.Promise;
    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);
    if (app) {
        app.set("mongoose", mongoose);
    }
};
function cleanup() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
}