import Transaction from "../models/Transaction.js";

export const getTransactions = async (req, res) => {
    console.log("aaye");
    try {
        const Transactions = await Transaction.find();
        if (!Transactions) 
        {
            return res.status(404).json({ message: "No Transactions found" });
        }
        res.status(200).json(Transactions);
    } catch (error) {
        console.error("Error fetching Transactions:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}