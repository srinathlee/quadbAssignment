import mongoose from "mongoose";

const StoreSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"provide name"]
    },
    buy:{
        type:String,
        required:[true,"provide buy"]
    },
    sell:{
        type:String,
        required:[true,"provide sell"]
    },
    last:{
        type:String,
        required:[true,"provide last"]
    },
    volume:{
        type:String,
        required:[true,"provide volume"]
    },
    base_unit:{
        type:String,
        required:[true,"provide base_unit"]
    }
})

export default mongoose.model("StoreSchema",StoreSchema)