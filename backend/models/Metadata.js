import mongoose from "mongoose";

const Schema = mongoose.Schema;
const MetadataSchema = new Schema(
    {
        key: 
        {   
            type: String, 
            required: true,
            unique: true 
        },
        value: 
        {   
            type: Boolean, 
            required: true 
        },
        timestamp: 
        {   
            type: Date, 
            default: Date.now 
        },
    }
);

const Metadata = mongoose.model("Metadata", MetadataSchema);

export default Metadata;

