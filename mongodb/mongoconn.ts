import mongoose from "mongoose";

export const connect = () => {
    mongoose.connect(process.env.MONGODB_URI || "");
    mongoose.connection.on("connected", () => {
        console.log("Mongoose connected to MongoDB");
    });
    mongoose.connection.on("disconnect", () => {
        console.log("Mongoose disconnected to MongoDB");
    });
    mongoose.connection.on("error", (err: Error) => {
        console.log(err);
    });
};

export default connect;
