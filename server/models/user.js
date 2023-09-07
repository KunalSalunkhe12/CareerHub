import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            },
            message: "Invalid email address format",
        },

    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password length must be at least 6 characters"],
    },
});

export default mongoose.model("User", userSchema);
