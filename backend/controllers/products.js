import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
    console.log("aaye");
    try {
        const Products = await Product.find();
        if (!Products) 
        {
            return res.status(404).json({ message: "No Products found" });
        }
        res.status(200).json(Products);
    } catch (error) {
        console.error("Error fetching Products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}