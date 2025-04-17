import mongoose from "mongoose";
import { Request, Response, NextFunction } from 'express';
import Game from "../model/game";
import randomWords from "../database/database";
import placesWords from "../database/placesDatabase";
import musicWords from "../database/musicDatabase";
import foodWords from "../database/foodDatabase";

//Home page
export async function index(req: Request, res: Response): Promise<void> {
    try {
        const game = await Game.find({}); // Wait for the query to complete
        const randomPlace = placesRetrieval(); // Call the function to get a random place
        const easyRandomPlace = easyPlacesRetrieval()
        const mediumRandomPlace = mediumPlacesRetrieval()
        const randomGuess = randomRetreival()
        res.render("games/index", {title: "Hangman", game});
        console.log('We made it')
    } catch (err) {
        console.error('We didnt make it')
    }
}

//For the random words
export async function randomAny(req: Request, res: Response): Promise<void>{
    try{
        const randomGuess = randomRetreival()
        res.render('games/RandomAny',{randomGuess})
        console.log('Bingo!')
    }catch(err){
        console.error('randomAny Err:', err)
    }
}

// render a page with a random easy word from the random word database
export async function easyAny(req: Request, res: Response): Promise<void>{
    try{
        const easyRandomGuess = easyRandomRetrieval()
        res.render('games/EasyAny',{easyRandomGuess})
    }catch(err){
        console.error('easyAny Err:', err)
    }
}

// render a page with a random medium word from the random word database
export async function mediumAny(req: Request, res: Response): Promise<void>{
    try{
        const mediumRandomGuess = mediumRandomRetrieval()
        res.render('games/MediumAny',{mediumRandomGuess})
    }catch(err){
        console.error('mediumAny Err:', err)
    }
}

// render a page with a random hard word from the random word database
export async function hardAny(req: Request, res: Response): Promise<void>{
    try{
        const hardRandomGuess = hardRandomRetrieval()
        res.render('games/HardAny', {hardRandomGuess})
    }catch(err){

    }
}

//MARK Places

// render a page with a random word from the places database
export async function placesAny(req: Request, res:Response): Promise<void>{
    try{
        const randomPlace = placesRetrieval()
        res.render('games/RandomPlaces', {randomPlace})
    }catch(err){
        console.error('RandomPlaces Err:', err)
    }
}

// render a page with a random easy word from the places database
export async function placesEasy(req: Request, res:Response): Promise<void>{
    try {
        const easyPlace = easyPlacesRetrieval()
        res.render('games/EasyPlaces', {easyPlace})
    } catch (err) {
        console.error("EasyPlaces Err:", err)
    }
}

// render a page with a random medium word from the places database
export async function placesMedium(req: Request, res:Response):Promise<void>{
    try{
        const mediumPlace = mediumPlacesRetrieval()
        res.render('games/MediumPlaces', {mediumPlace})
    }catch(err){
        console.error("MediumPlaces Err:", err)
    }
}


// render a page with a random hard word from the places database
export async function placesHard(req: Request, res:Response):Promise<void>{
    try{
        const hardPlace = hardPlacesRetrieval()
        res.render('games/HardPlaces', {hardPlace})
    }catch(err){
        console.error("HardPlaces Err:", err)
    }
}

//MARK Music

// render a page with a random word from the music database
export async function musicAny(req:Request, res:Response):Promise<void>{
    try{
        const musicAny = musicRetrieval()
        res.render('games/RandomMusic',{musicAny})
    }catch(err){
        console.error("RandomMusic Err:", err)
    }
}

// render a page with a random easy word from the music database
export async function easyMusic(req: Request, res:Response):Promise<void>{
    try{
        const easyMusic = easyMusicRetrieval()
        res.render('games/EasyMusic',{easyMusic})
    }catch(err){
        console.error("EasyMusic Err:", err)
    }
}

// render a page with a random medium word from the music database
export async function mediumMusic(req: Request, res: Response):Promise<void>{
    try{
        const mediumMusic = mediamMusicRetrieval()
        res.render('games/MediumMusic',{mediumMusic})
    }catch(err){
        console.error("MediumMusic Err:", err)
    }
}

// render a page with a random hard word from the music database
export async function hardMusic(req:Request, res:Response):Promise<void>{
    try{
        const hardMusic = hardMusicRetrieval()
        res.render('games/HardMusic',{hardMusic})
    }catch(err){
        console.error("hardMusic Err:", err)
    }
}

//MARK Food

// render a page with a random word from the food database
export async function foodAny(req:Request, res:Response):Promise<void> {
    try {
        const foodAny = foodRetrieval()
        res.render('games/RandomFood', {foodAny})
    } catch (err) {
        console.error("RandomFood Err:", err)
    }
}

//  render a page with a random easy word from the food database
export async function easyFood(req:Request, res:Response):Promise<void>{
    try{
        const easyFood = easyFoodRetrieval()
        res.render('games/EasyFood', {easyFood})
    }catch(err){
        console.error('EasyFood Err:',err)
    }
}

// render a page with a random medium word from the food database
export async function mediumFood(req: Request, res:Response):Promise<void>{
    try {
        const mediumFood = mediumFoodRetrieval()
        res.render('games/MediumFood', {mediumFood})
   } catch (err) {
    console.error("MediumFood Err:", err)        
    }
}

// render a page with a random hard word from the food database
export async function hardFood(req: Request, res:Response):Promise<void>{
    try{
        const hardFood = hardFoodRetrieval()
        res.render('games/HardFood',{hardFood})
    }catch(err){
        console.error("HardFood Err:", err)
    }
}


//Retriving the words from the places database
function placesRetrieval(){
    try{
let randomIndex = Math.floor(Math.random() * placesWords.length);

// Retrieve the word at the randomly generated index
let randomWord = placesWords[randomIndex];

// Print or use the randomly picked word
return randomWord;
    }catch(err){
        console.error("PlacesWords not coming up:", err)
        return null; // Return null if an error occurs
    }
}

// Retrieve a easy worq from the places database
function easyPlacesRetrieval(){
    try{
        const fourLetterWords = placesWords.filter(placesWords => placesWords.length <= 4);

        if (fourLetterWords.length === 0) {
            console.error("No 4-letter words found in the array.");
            return null;
        }

        const randomIndex = Math.floor(Math.random() * fourLetterWords.length);

        const randomWord = fourLetterWords[randomIndex];

        return randomWord;
    }catch(err){
        console.error("Error retrieving 2-4 letter travel word:", err);
        return null; 
    }
}

// Retrieve a medium word from the places database
function mediumPlacesRetrieval(){
    try{
        const fiveToEightWords = placesWords.filter(placesWords => placesWords.length >= 5 && placesWords.length <= 8)

        const randomIndex = Math.floor(Math.random() * fiveToEightWords.length)

        const randomWord = fiveToEightWords[randomIndex]

        return randomWord
    }catch(err){
        console.error("Error retrieving 5-8 letter destination word:", err);
        return null; 
    }
}

// Retrieve a hard word from the places database
function hardPlacesRetrieval(){
    try{
        const eightToMoreWords = placesWords.filter(placesWords => placesWords.length >= 9)

        const randomIndex = Math.floor(Math.random() * eightToMoreWords.length)

        const randomWord = eightToMoreWords[randomIndex]

        return randomWord
    }catch(err){
        console.error("Error retrieving 5-8 letter random word:", err);
        return null; 
    }
}

//Random database retrieval

// Retrieve a random word from the random word database
function randomRetreival(){
    try{
        let randomIndex0 = Math.floor(Math.random() * randomWords.length)
        let randomWord = randomWords[randomIndex0]
        return randomWord
    }catch(err){
        console.error("randomWords not coming up:", err)
        return null; // Return null if an error occurs
    }
}

// Retrieve a easy word from the random word database
function easyRandomRetrieval(){
    try{
        const eightToMoreWords = randomWords.filter(randomWords => randomWords.length <= 4)
        let randomIndex0 = Math.floor(Math.random() * eightToMoreWords.length)
        let randomWord = randomWords[randomIndex0]
        return randomWord
    }catch(err){
        console.error(" easy randomWords not coming up:", err)
        return null; // Return null if an error occurs
    }
}

// Retrieve a medium word from the random word database
function mediumRandomRetrieval(){
    try{
        const fiveToEightWords = randomWords.filter(randomWords => randomWords.length >=  5 && randomWords.length <= 8)
        let randomIndex0 = Math.floor(Math.random() * fiveToEightWords.length)
        let randomWord = randomWords[randomIndex0]
        return randomWord
    }catch(err){
        console.error(" easy randomWords not coming up:", err)
        return null; // Return null if an error occurs
    }
}

// Retrieve a hard word from the random word database
function hardRandomRetrieval(){
    try{
        const eightToMoreWords = randomWords.filter(randomWords => randomWords.length >= 8)
        let randomIndex0 = Math.floor(Math.random() * eightToMoreWords.length)
        let randomWord = randomWords[randomIndex0]
        return randomWord
    }catch(err){
        console.error(" a challenging random Word not coming up:", err)
        return null; // Return null if an error occurs
    }
}

//Food Words

// Retrieve a random word from the food database
function foodRetrieval(){
    try{
        
        let randomIndex0 = Math.floor(Math.random() * foodWords.length)
        let foodWord = foodWords[randomIndex0]
        return foodWord
    }catch(err){
        console.error(" word about food not coming up:", err)
        return null; // Return null if an error occurs
    }
}

//  Retrieve a easy word from the food database
function easyFoodRetrieval(){
    try{
        const fourOrLessWords = foodWords.filter(foodWords => foodWords.length <= 4)
        let randomIndex0 = Math.floor(Math.random() * fourOrLessWords.length)
        let foodWord = foodWords[randomIndex0]
        return foodWord
    }catch(err){
        console.error(" easy word about food not coming up:", err)
        return null; // Return null if an error occurs
    }
}

// Retrieve a medium word from the food database
function mediumFoodRetrieval(){
    try{
        const fiveToEightWords = foodWords.filter(foodWords => foodWords.length >= 5 && foodWords.length <= 8)
        let randomIndex0 = Math.floor(Math.random() * fiveToEightWords.length)
        let foodWord = foodWords[randomIndex0]
        return foodWord
    }catch(err){
        console.error(" medium word about food not coming up:", err)
        return null; // Return null if an error occurs
    }
}

// Retrieve a hard word from the food database
function hardFoodRetrieval(){
    try{
        const eightOrMoreWords = foodWords.filter(foodWords => foodWords.length >= 8)
        let randomIndex0 = Math.floor(Math.random() * eightOrMoreWords.length)
        let foodWord = foodWords[randomIndex0]
        return foodWord
    }catch(err){
        console.error(" hard word about food not coming up:", err)
        return null; // Return null if an error occurs
    }
}

//Music Database

// Retrieve a random word from the music database
function musicRetrieval(){
    try{
        
        let randomIndex0 = Math.floor(Math.random() * musicWords.length)
        let musicWord = foodWords[randomIndex0]
        return musicWord
    }catch(err){
        console.error(" a word about music isn't not coming up:", err)
        return null; // Return null if an error occurs
    }
}

// Retrieve a easy word from the music database
function easyMusicRetrieval(){
    try{
        const fourOrLessWords = musicWords.filter(musicWords => musicWords.length <= 4)
        let randomIndex0 = Math.floor(Math.random() * fourOrLessWords.length)
        let musicWord = musicWords[randomIndex0]
        return musicWord
    }catch(err){
        console.error(" easy word about music not coming up:", err)
        return null; // Return null if an error occurs
    }
}

// Retrieve a medium word from the music database
function mediamMusicRetrieval(){
    try{
        const fiveOrMoreWords = musicWords.filter(musicWords => musicWords.length >= 5 && musicWords.length <= 8)
        let randomIndex0 = Math.floor(Math.random() * fiveOrMoreWords.length)
        let musicWord = musicWords[randomIndex0]
        return musicWord
    }catch(err){
        console.error(" medium word about music not coming up:", err)
        return null; // Return null if an error occurs
    }
}

// Retrieve a hard word from the music database
function hardMusicRetrieval(){
    try{
        const eightOrMoreWords = musicWords.filter(musicWords => musicWords.length >= 8)
        let randomIndex0 = Math.floor(Math.random() * eightOrMoreWords.length)
        let musicWord = musicWords[randomIndex0]
        return musicWord
    }catch(err){
        console.error(" a hard word about music not coming up:", err)
        return null; // Return null if an error occurs
    }
}

