"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// type MongoDBConnectionOption = {
//     useNewUrlParser: boolean,
//     useUnifiedTopology: boolean,
// }
dotenv_1.default.config();
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not defined in the environment variables.');
}
mongoose_1.default.connect(databaseUrl, {});
const db = mongoose_1.default.connection;
db.on('connected', function () {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
