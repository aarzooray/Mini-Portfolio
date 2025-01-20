import mongoose from "mongoose"
import { app } from "../app.js"




const dbConn = async () => {
    try {
        const connInstance = await mongoose.connect(`mongodb+srv://aarzoo:aarzooray@cluster0.ylzyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        app.on(Error,(err) => {
            console.log(`DB Connected but Not able to Communicate.`, err)
        })

        console.log("Connected to Databse!", connInstance["connection"].host);

    } catch (error) {
        console.log(`ERROR in DB Folder: `, error);
        process.exit(1);
    }
}

export default dbConn
