import KPI from "../models/KPI.js";

export const getKPIs = async (req, res) => {
    console.log("Fetching KPIs...");
    try {
        const kpis = await KPI.find();
        if (!kpis.length) {
            return res.status(404).json({ message: "No KPIs found" });
        }
        return res.status(200).json(kpis);
    } catch (error) {
        console.error("Error fetching KPIs:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
