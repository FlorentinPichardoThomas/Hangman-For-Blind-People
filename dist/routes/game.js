"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const game_1 = require("../controller/game"); // Correct import syntax for ES modules
const game_2 = require("../controller/game");
const game_3 = require("../controller/game");
const game_4 = require("../controller/game");
const router = express_1.default.Router();
router.get('/', game_1.index);
//The Random Routes
router.get('/RandomAny', game_4.randomAny);
router.get('/RandomFood', game_1.foodAny);
router.get('/RandomMusic', game_1.musicAny);
router.get('/RandomPlaces', game_1.placesAny);
//The Easy Difficulty Routes
router.get('/EasyAny', game_1.easyAny);
router.get('/EasyFood', game_1.easyFood);
router.get('/EasyMusic', game_1.easyMusic);
router.get('/EasyPlaces', game_1.placesEasy);
//The Medium Difficulty Routes
router.get('/MediumAny', game_2.mediumAny);
router.get('/MediumFood', game_2.mediumFood);
router.get('/MediumMusic', game_2.mediumMusic);
router.get('/MediumPlaces', game_2.placesMedium);
//The Hard Difficulty Routes
router.get('/HardAny', game_3.hardAny);
router.get('/HardFood', game_3.hardFood);
router.get('/HardMusic', game_3.hardMusic);
router.get('/HardPlaces', game_3.placesHard);
module.exports = router;
