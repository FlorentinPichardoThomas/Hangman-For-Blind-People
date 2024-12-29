import mongoose, { Schema, Document } from 'mongoose';

interface IGame extends Document {
    difficulty: "Challenging" | "Medium" | "Easy" | "Don't Care";
    topic:  "Food" | "Any" | "Music" | "Places";
}

const gameSchema: Schema<IGame> = new Schema({
    difficulty:{
        type: String,
        enum: ["Challenging", "Medium", "Easy", "Random"],
        required: true
    },
    topic:{
        type: String,
        enum: ["Food", "Any", "Music", "Places"],
        required: true
    }
});

const Game = mongoose.model<IGame>("Game", gameSchema);

export default Game;