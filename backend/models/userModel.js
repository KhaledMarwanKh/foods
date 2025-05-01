// import mongoose from "mongoose";

// const userSchema= new mongoose.Schema({
//     name:{type:String,required:true},
//     email:{type:String, required:true, unique:true},
//     password:{type:String, required:true,},
//     cartData:{type:Object, default:{}}

// },{minimize:false})


// const userModel =mongoose.models.user || mongoose.model("user", userSchema);
// export default userModel;



import mongoose from "mongoose";

// تعريف السكيمات
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, "Email is invalid"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6,
    },
    role: {
        type: String,
        enum: ["user", "admin", "vendor"],
        default: "user"
    },
    status: {
        type: String,
        enum: ["Active", "Pending", "Suspended"],
        default: "Pending"
    },
    cartData: {
        type: Object,
        default: {}
    },
    last_login_date: {
        type: Date
    }
}, {
    timestamps: true,  
    minimize: false      
});

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel;
