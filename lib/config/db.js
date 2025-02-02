import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://novafuzemadan:vhHQZ4FJbjy3dwQ6@cluster0.d1dvh.mongodb.net/next-blog-app');
    console.log("DB Connected");
}