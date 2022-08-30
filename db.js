import mongoose from "mongoose";
import 'dotenv/config';

const url = process.env.MONGODB_URL;
console.log(url)

mongoose.connect(url);

export default mongoose;