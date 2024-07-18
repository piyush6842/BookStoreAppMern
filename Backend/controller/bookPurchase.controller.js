import Purchased from "../model/bookPurchase.model.js";
export const bookbuy = async(req, res) => {
    try {
        const { name, email, mobile,address1, address2, landmark, state, city, pincode, message, bookId } = req.body;
        const bookPurchase = new Purchased({
            name: name,
            email: email,
            mobile: mobile,
            address1: address1,
            address2: address2,
            landmark: landmark,
            state: state,
            city :  city,
            pincode : pincode,
            message: message,
            bookId : bookId,
        });
        await bookPurchase.save();
        res.status(201).json({
            message: "book Purchased successfully",
        });
        
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};