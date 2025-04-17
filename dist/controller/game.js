"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hardFood = exports.mediumFood = exports.easyFood = exports.foodAny = exports.hardMusic = exports.mediumMusic = exports.easyMusic = exports.musicAny = exports.placesHard = exports.placesMedium = exports.placesEasy = exports.placesAny = exports.hardAny = exports.mediumAny = exports.easyAny = exports.randomAny = exports.index = void 0;
const game_1 = __importDefault(require("../model/game"));
const database_1 = __importDefault(require("../database/database"));
const placesDatabase_1 = __importDefault(require("../database/placesDatabase"));
const musicDatabase_1 = __importDefault(require("../database/musicDatabase"));
const foodDatabase_1 = __importDefault(require("../database/foodDatabase"));
function index(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const game = yield game_1.default.find({}); // Wait for the query to complete
            const randomPlace = placesRetrieval(); // Call the function to get a random place
            const easyRandomPlace = easyPlacesRetrieval();
            const mediumRandomPlace = mediumPlacesRetrieval();
            const randomGuess = randomRetreival();
            res.render("games/index", { title: "Hangman", game });
            console.log('We made it');
        }
        catch (err) {
            console.error('We didnt make it');
        }
    });
}
exports.index = index;
//For the random words
function randomAny(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const randomGuess = randomRetreival();
            res.render('games/RandomAny', { randomGuess });
            console.log('Bingo!');
        }
        catch (err) {
            console.error('randomAny Err:', err);
        }
    });
}
exports.randomAny = randomAny;
function easyAny(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const easyRandomGuess = easyRandomRetrieval();
            res.render('games/EasyAny', { easyRandomGuess });
        }
        catch (err) {
            console.error('easyAny Err:', err);
        }
    });
}
exports.easyAny = easyAny;
function mediumAny(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mediumRandomGuess = mediumRandomRetrieval();
            res.render('games/MediumAny', { mediumRandomGuess });
        }
        catch (err) {
            console.error('mediumAny Err:', err);
        }
    });
}
exports.mediumAny = mediumAny;
function hardAny(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hardRandomGuess = hardRandomRetrieval();
            res.render('games/HardAny', { hardRandomGuess });
        }
        catch (err) {
        }
    });
}
exports.hardAny = hardAny;
//MARK Places
function placesAny(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const randomPlace = placesRetrieval();
            res.render('games/RandomPlaces', { randomPlace });
        }
        catch (err) {
            console.error('RandomPlaces Err:', err);
        }
    });
}
exports.placesAny = placesAny;
function placesEasy(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const easyPlace = easyPlacesRetrieval();
            res.render('games/EasyPlaces', { easyPlace });
        }
        catch (err) {
            console.error("EasyPlaces Err:", err);
        }
    });
}
exports.placesEasy = placesEasy;
function placesMedium(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mediumPlace = mediumPlacesRetrieval();
            res.render('games/MediumPlaces', { mediumPlace });
        }
        catch (err) {
            console.error("MediumPlaces Err:", err);
        }
    });
}
exports.placesMedium = placesMedium;
function placesHard(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hardPlace = hardPlacesRetrieval();
            res.render('games/HardPlaces', { hardPlace });
        }
        catch (err) {
            console.error("HardPlaces Err:", err);
        }
    });
}
exports.placesHard = placesHard;
//MARK Music
function musicAny(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const musicAny = musicRetrieval();
            res.render('games/RandomMusic', { musicAny });
        }
        catch (err) {
            console.error("RandomMusic Err:", err);
        }
    });
}
exports.musicAny = musicAny;
function easyMusic(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const easyMusic = easyMusicRetrieval();
            res.render('games/EasyMusic', { easyMusic });
        }
        catch (err) {
            console.error("EasyMusic Err:", err);
        }
    });
}
exports.easyMusic = easyMusic;
function mediumMusic(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mediumMusic = mediamMusicRetrieval();
            res.render('games/MediumMusic', { mediumMusic });
        }
        catch (err) {
            console.error("MediumMusic Err:", err);
        }
    });
}
exports.mediumMusic = mediumMusic;
function hardMusic(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hardMusic = hardMusicRetrieval();
            res.render('games/HardMusic', { hardMusic });
        }
        catch (err) {
            console.error("hardMusic Err:", err);
        }
    });
}
exports.hardMusic = hardMusic;
//MARK Food
function foodAny(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const foodAny = foodRetrieval();
            res.render('games/RandomFood', { foodAny });
        }
        catch (err) {
            console.error("RandomFood Err:", err);
        }
    });
}
exports.foodAny = foodAny;
function easyFood(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const easyFood = easyFoodRetrieval();
            res.render('games/EasyFood', { easyFood });
        }
        catch (err) {
            console.error('EasyFood Err:', err);
        }
    });
}
exports.easyFood = easyFood;
function mediumFood(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mediumFood = mediumFoodRetrieval();
            res.render('games/MediumFood', { mediumFood });
        }
        catch (err) {
            console.error("MediumFood Err:", err);
        }
    });
}
exports.mediumFood = mediumFood;
function hardFood(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hardFood = hardFoodRetrieval();
            res.render('games/HardFood', { hardFood });
        }
        catch (err) {
            console.error("HardFood Err:", err);
        }
    });
}
exports.hardFood = hardFood;
//Retriving the words from the places database
function placesRetrieval() {
    try {
        let randomIndex = Math.floor(Math.random() * placesDatabase_1.default.length);
        // Retrieve the word at the randomly generated index
        let randomWord = placesDatabase_1.default[randomIndex];
        // Print or use the randomly picked word
        return randomWord;
    }
    catch (err) {
        console.error("PlacesWords not coming up:", err);
        return null; // Return null if an error occurs
    }
}
function easyPlacesRetrieval() {
    try {
        const fourLetterWords = placesDatabase_1.default.filter(placesWords => placesWords.length <= 4);
        if (fourLetterWords.length === 0) {
            console.error("No 4-letter words found in the array.");
            return null;
        }
        const randomIndex = Math.floor(Math.random() * fourLetterWords.length);
        const randomWord = fourLetterWords[randomIndex];
        return randomWord;
    }
    catch (err) {
        console.error("Error retrieving 2-4 letter travel word:", err);
        return null;
    }
}
function mediumPlacesRetrieval() {
    try {
        const fiveToEightWords = placesDatabase_1.default.filter(placesWords => placesWords.length >= 5 && placesWords.length <= 8);
        const randomIndex = Math.floor(Math.random() * fiveToEightWords.length);
        const randomWord = fiveToEightWords[randomIndex];
        return randomWord;
    }
    catch (err) {
        console.error("Error retrieving 5-8 letter destination word:", err);
        return null;
    }
}
function hardPlacesRetrieval() {
    try {
        const eightToMoreWords = placesDatabase_1.default.filter(placesWords => placesWords.length >= 9);
        const randomIndex = Math.floor(Math.random() * eightToMoreWords.length);
        const randomWord = eightToMoreWords[randomIndex];
        return randomWord;
    }
    catch (err) {
        console.error("Error retrieving 5-8 letter random word:", err);
        return null;
    }
}
//Random database retrieval
function randomRetreival() {
    try {
        let randomIndex0 = Math.floor(Math.random() * database_1.default.length);
        let randomWord = database_1.default[randomIndex0];
        return randomWord;
    }
    catch (err) {
        console.error("randomWords not coming up:", err);
        return null; // Return null if an error occurs
    }
}
function easyRandomRetrieval() {
    try {
        const eightToMoreWords = database_1.default.filter(randomWords => randomWords.length <= 4);
        let randomIndex0 = Math.floor(Math.random() * eightToMoreWords.length);
        let randomWord = database_1.default[randomIndex0];
        return randomWord;
    }
    catch (err) {
        console.error(" easy randomWords not coming up:", err);
        return null; // Return null if an error occurs
    }
}
function mediumRandomRetrieval() {
    try {
        const fiveToEightWords = database_1.default.filter(randomWords => randomWords.length >= 5 && randomWords.length <= 8);
        let randomIndex0 = Math.floor(Math.random() * fiveToEightWords.length);
        let randomWord = database_1.default[randomIndex0];
        return randomWord;
    }
    catch (err) {
        console.error(" easy randomWords not coming up:", err);
        return null; // Return null if an error occurs
    }
}
function hardRandomRetrieval() {
    try {
        const eightToMoreWords = database_1.default.filter(randomWords => randomWords.length >= 8);
        let randomIndex0 = Math.floor(Math.random() * eightToMoreWords.length);
        let randomWord = database_1.default[randomIndex0];
        return randomWord;
    }
    catch (err) {
        console.error(" a challenging random Word not coming up:", err);
        return null; // Return null if an error occurs
    }
}
//Food Words
function foodRetrieval() {
    try {
        let randomIndex0 = Math.floor(Math.random() * foodDatabase_1.default.length);
        let foodWord = foodDatabase_1.default[randomIndex0];
        return foodWord;
    }
    catch (err) {
        console.error(" word about food not coming up:", err);
        return null; // Return null if an error occurs
    }
}
function easyFoodRetrieval() {
    try {
        const fourOrLessWords = foodDatabase_1.default.filter(foodWords => foodWords.length <= 4);
        let randomIndex0 = Math.floor(Math.random() * fourOrLessWords.length);
        let foodWord = foodDatabase_1.default[randomIndex0];
        return foodWord;
    }
    catch (err) {
        console.error(" easy word about food not coming up:", err);
        return null; // Return null if an error occurs
    }
}
function mediumFoodRetrieval() {
    try {
        const fiveToEightWords = foodDatabase_1.default.filter(foodWords => foodWords.length >= 5 && foodWords.length <= 8);
        let randomIndex0 = Math.floor(Math.random() * fiveToEightWords.length);
        let foodWord = foodDatabase_1.default[randomIndex0];
        return foodWord;
    }
    catch (err) {
        console.error(" medium word about food not coming up:", err);
        return null; // Return null if an error occurs
    }
}
function hardFoodRetrieval() {
    try {
        const eightOrMoreWords = foodDatabase_1.default.filter(foodWords => foodWords.length >= 8);
        let randomIndex0 = Math.floor(Math.random() * eightOrMoreWords.length);
        let foodWord = foodDatabase_1.default[randomIndex0];
        return foodWord;
    }
    catch (err) {
        console.error(" hard word about food not coming up:", err);
        return null; // Return null if an error occurs
    }
}
//Music Database
function musicRetrieval() {
    try {
        let randomIndex0 = Math.floor(Math.random() * musicDatabase_1.default.length);
        let musicWord = foodDatabase_1.default[randomIndex0];
        return musicWord;
    }
    catch (err) {
        console.error(" a word about music isn't not coming up:", err);
        return null; // Return null if an error occurs
    }
}
function easyMusicRetrieval() {
    try {
        const fourOrLessWords = musicDatabase_1.default.filter(musicWords => musicWords.length <= 4);
        let randomIndex0 = Math.floor(Math.random() * fourOrLessWords.length);
        let musicWord = musicDatabase_1.default[randomIndex0];
        return musicWord;
    }
    catch (err) {
        console.error(" easy word about music not coming up:", err);
        return null; // Return null if an error occurs
    }
}
function mediamMusicRetrieval() {
    try {
        const fiveOrMoreWords = musicDatabase_1.default.filter(musicWords => musicWords.length >= 5 && musicWords.length <= 8);
        let randomIndex0 = Math.floor(Math.random() * fiveOrMoreWords.length);
        let musicWord = musicDatabase_1.default[randomIndex0];
        return musicWord;
    }
    catch (err) {
        console.error(" medium word about music not coming up:", err);
        return null; // Return null if an error occurs
    }
}
function hardMusicRetrieval() {
    try {
        const eightOrMoreWords = musicDatabase_1.default.filter(musicWords => musicWords.length >= 8);
        let randomIndex0 = Math.floor(Math.random() * eightOrMoreWords.length);
        let musicWord = musicDatabase_1.default[randomIndex0];
        return musicWord;
    }
    catch (err) {
        console.error(" a hard word about music not coming up:", err);
        return null; // Return null if an error occurs
    }
}
// module.exports = { 
//     index,
//     fetchWordByTopic,
//     middleware
// }
