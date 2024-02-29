import mongoose from "mongoose";

export const connect = () => {
    mongoose.connect("mongodb://localhost:27017/odesco");
    mongoose.connection.on("connected", () => {
        console.log("Mongoose connected to MongoDB");
    });
    mongoose.connection.on("error", (err: Error) => {
        console.log(err);
    });
};

export default connect;
