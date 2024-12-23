import KPI from "../models/KPI.js";

export const getKPIs = async (req, res) => {
    console.log("aaye");
    try {
        const kpis = await KPI.find();
        if (!kpis) 
        {
            return res.status(404).json({ message: "No KPIs found" });
        }
        res.status(200).json(kpis);
    } catch (error) {
        console.error("Error fetching KPIs:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}