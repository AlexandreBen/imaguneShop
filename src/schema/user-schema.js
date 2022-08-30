import Mongoose from '../../db.js';

const userSchema = new Mongoose.Schema(
    {
        name: String,
        email: String,
        pwd: String,
    },
    {
        collection: 'users',
        timeStamp: true
    }
);

export default Mongoose.model('users', userSchema, 'users');