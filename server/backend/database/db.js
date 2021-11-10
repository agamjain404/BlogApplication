import mongoose from "mongoose";
const Connection = async (URL) => {
    try{
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected with database successfully");
    }catch(error){
        console.log("Error while connection to mongo db", error)
    }
    
}

export default Connection;