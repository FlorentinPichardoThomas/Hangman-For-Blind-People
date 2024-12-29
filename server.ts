import express, { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import logger from 'morgan';
import { Router } from 'express';
import dotenv from 'dotenv';

// Route imports
const indexRouter = require('./routes/index');
const gameRouter = require('./routes/game');

// Environment variables and database configuration
dotenv.config();
require('./config/database');

// Initialize Express app
const app = express();

// View Engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

// Session setup
const sessionOptions: session.SessionOptions = {
  secret: process.env.SECRET || 'defaultSecret',
  resave: false,
  saveUninitialized: true,
};
app.use(session(sessionOptions));

// Route setup
app.use('/', indexRouter);
app.use('/games', gameRouter);

// Catch-all route (potentially unused and removed)
app.use(function(req,res,next){'/games'})

// 404 handler
app.use((req: Request, res: Response, next: NextFunction): void => {
  next(createError(404));
});

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
  next();
});

// Export app
export default app;
