import express  from "express"
const router = express.Router();
import { Request, Response, NextFunction } from 'express';

router.get('/', function(req: Request, res: Response, next: NextFunction):void {
    res.redirect('/games');
  });

//Mischellaneous Section

router.get('/games/ChoiceAny', function(req: Request, res: Response, next: NextFunction):void{
  res.render('games/ChoiceAny')
})  

//Food Section

router.get('/games/ChoiceFood', function(req: Request, res: Response, next: NextFunction):void{
  res.render('games/ChoiceFood')
})  


router.get('/games/ChoiceMusic', function(req: Request, res: Response, next: NextFunction):void{
  res.render('games/ChoiceMusic')
})  


router.get('/games/ChoicePlaces', function(req: Request, res: Response, next: NextFunction):void{
  res.render('games/ChoicePlaces')
})  

module.exports = router