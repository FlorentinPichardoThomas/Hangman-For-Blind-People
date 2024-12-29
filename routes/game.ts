import  express  from "express";
import { Request, Response, NextFunction } from 'express';
import {easyAny, easyFood, easyMusic, foodAny, index, musicAny, placesAny, placesEasy} from '../controller/game'; // Correct import syntax for ES modules
import { mediumAny, mediumFood, mediumMusic, placesMedium } from "../controller/game";
import { hardAny, hardFood, hardMusic, placesHard } from "../controller/game";
import { randomAny } from "../controller/game";
const router = express.Router()

router.get('/', index)  

//The Random Routes
router.get('/RandomAny', randomAny)
router.get('/RandomFood', foodAny)
router.get('/RandomMusic', musicAny)
router.get('/RandomPlaces', placesAny)
//The Easy Difficulty Routes
router.get('/EasyAny', easyAny)
router.get('/EasyFood', easyFood)
router.get('/EasyMusic', easyMusic)
router.get('/EasyPlaces', placesEasy)
//The Medium Difficulty Routes
router.get('/MediumAny', mediumAny)
router.get('/MediumFood', mediumFood)
router.get('/MediumMusic', mediumMusic)
router.get('/MediumPlaces', placesMedium)
//The Hard Difficulty Routes
router.get('/HardAny', hardAny)
router.get('/HardFood', hardFood)
router.get('/HardMusic', hardMusic)
router.get('/HardPlaces', placesHard)
module.exports = router