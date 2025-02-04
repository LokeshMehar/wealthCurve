import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
    console.log("Fetching products...");
    try {
        const products = await Product.find();
        if (!products.length) {
            return res.status(404).json({ message: "No products found" });
        }
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
