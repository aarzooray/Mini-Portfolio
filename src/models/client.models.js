import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


const client = mongoose.model("clientData", clientSchema)

export default client