import mongoose from 'mongoose'

const orderSchema= new mongoose.Schema({
    userId:{type:String, require:true},
    items:{type:Array, required:true},
    amount:{type:Number, required:true},
    address:{type:Object,required:true},
    status:{type:String, default:"Food processing"},
    date:{type:Date, default:Date.now()},
    payment:{type:Boolean,default:false}
})

const order = mongoose.models.order || mongoose.model("Restaurant", orderSchema);
export default order;

