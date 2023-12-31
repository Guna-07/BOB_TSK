import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minlength: 6
    },
    addedMovies:[{
        type: String,
    },
  ],
});

export default mongoose.model("Admin", adminSchema);