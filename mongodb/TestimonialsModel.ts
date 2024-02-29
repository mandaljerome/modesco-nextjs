import mongoose from "mongoose";

const testimonialsSchema = new mongoose.Schema({
    id: { type: String, require: true },
    name: { type: String, require: true },
    company: { type: String, require: true },
    testi: { type: String, require: true },
    img: { type: String, require: true },
});

export default mongoose.models.testimonials ||
    mongoose.model("testimonials", testimonialsSchema);
