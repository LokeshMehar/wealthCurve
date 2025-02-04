import Transaction from "../models/Transaction.js";

export const getTransactions = async (req, res) => {
    console.log("Fetching transactions...");
    try {
        const transactions = await Transaction.find();
        if (!transactions.length) {
            return res.status(404).json({ message: "No transactions found" });
        }
        res.status(200).json(transactions);
    } catch (error) {
        console.error("Error fetching transactions:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
