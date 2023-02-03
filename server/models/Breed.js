const { Schema, model } = require('mongoose');

const breedSchema = new Schema({
    id:{
        type:Number
    },
    breed:{
        type:String
    },
    category:{
        type:String
    },
    size:{
        type:String,
    },
    exercise:{
        type:Number,
    },
    homeSize:{
        type:String,
    },
    grooming:{
        type:String,
    },
    coat:{
        type:String,
    },
    sheds:{
        type:Boolean,
    },
    lifeSpan:{
        type:Number,
    },
});

const Breed = model('breed', breedSchema);

module.exports = Breed;
