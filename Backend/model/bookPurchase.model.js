import mongoose,{Schema} from "mongoose";

const bookPurchaseSchema = mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
    },
    address1: {
        type: String,
        required:true,
    },
    address2: {
        type: String,
        required:true,
    },
    landmark: {
        type: String,
        required:true,
    },
    state: {
        type: String,
        required:true,
    },
    city: {
        type: String,
        required:true,
    },
    pincode: {
        type: String,
        required:true,
    },
    message:{
        type:String,
    },
    bookId:[{
        type:Array,
    }]
});

const Purchased = mongoose.model("PurchaseBook", bookPurchaseSchema);
export default Purchased;