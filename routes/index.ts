import express  from "express"
const router = express.Router();
import { Request, Response, NextFunction } from 'express';
// import { randomRetreival } from "../controller/game";
// const randomGuess = randomRetreival();

router.get('/', function(req: Request, res: Response, next: NextFunction):void {
    res.redirect('/games');
  });

//Mischellaneous Section
// router.get('/games/EasyAny', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/EasyAny')
// })  

// router.get('/games/MediumAny', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/MediumAny')
// })  

// router.get('/games/HardAny', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/HardAny')
// })  

// router.get('/games/RandomAny', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/RandomAny', {randomGuess})
// })

router.get('/games/ChoiceAny', function(req: Request, res: Response, next: NextFunction):void{
  res.render('games/ChoiceAny')
})  

//Food Section

// router.get('/games/EasyFood', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/EasyFood')
// })  

// router.get('/games/MediumFood', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/MediumFood')
// })  

// router.get('/games/HardFood', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/HardFood')
// })  

// router.get('/games/RandomFood', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/RandomFood')
// })  

router.get('/games/ChoiceFood', function(req: Request, res: Response, next: NextFunction):void{
  res.render('games/ChoiceFood')
})  


//Music Section

// router.get('/games/EasyMusic', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/EasyMusic')
// })  

// router.get('/games/MediumMusic', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/MediumMusic')
// })  

// router.get('/games/HardMusic', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/HardMusic')
// })  

// router.get('/games/RandomMusic', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/RandomMusic')
// })  

router.get('/games/ChoiceMusic', function(req: Request, res: Response, next: NextFunction):void{
  res.render('games/ChoiceMusic')
})  


//Places section

// router.get('/games/EasyPlaces', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/EasyPlaces')
// })  

// router.get('/games/MediumPlaces', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/MediumPlaces')
// })  

// router.get('/games/HardPlaces', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/HardPlaces')
// })  

// router.get('/games/RandomPlaces', function(req: Request, res: Response, next: NextFunction):void{
//   res.render('games/RandomPlaces')
// })  


router.get('/games/ChoicePlaces', function(req: Request, res: Response, next: NextFunction):void{
  res.render('games/ChoicePlaces')
})  

module.exports = router