import mongoose, {Schema} from "mongoose";

console.log(process.env.MONGODB_URI);
// console.log("2")
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise=global.Promise

const ticketSchema=new Schema(
    {
        title:String,
        description: String,
        category: String,
        priority: Number,
        progress:Number,
        status:String,
        active:Boolean,
    },
    {
        timestamps:true,
    }
);

const Ticket=mongoose.models.Ticket|| mongoose.model("Ticket", ticketSchema);

export default Ticket;

// import { connect } from 'mongoose'; 

// async function connectToDatabase() {
//     const uri = process.env.MONGO_URI;
//     if (!uri) {
//         throw new Error('Please define the MONGO_URI environment variable inside .env.local');
//         }

//     try {
//         await connect(uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         });
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// }

// export default connectToDatabase;


// // const mongoose = require('mongoose');

// // const uri = process.env.MONGO_URI;

// // // , { useNewUrlParser: true, useUnifiedTopology: true }

// // mongoose.connect(uri)
// //     .then(() => console.log('MongoDB connected'))
// //     .catch(err => console.error('MongoDB connection error:', err));

// //     // try {
// //     //     await mongoose.connect(uri);
// //     //   } catch (error) {
// //     //     handleError(error);
// //     //   }