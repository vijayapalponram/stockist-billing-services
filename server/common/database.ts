import mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONNECTION_URL);

export { mongoose };

