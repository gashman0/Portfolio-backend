import mongoose from "mongoose";

const  connectDatabase = async () => {

    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDb connected: ${connection.connection.host}/${connection.connection.name}`);
    } catch (error) {
        console.error(`MongoDb connection failed: ${error.message}`);
        throw error;
    }
  
}

export default connectDatabase;