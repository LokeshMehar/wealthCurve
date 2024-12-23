import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import Metadata from "./models/Metadata.js";
import { kpis, products, transactions } from "./data/data.js";
import kpiRoutes from "./routes/kpi.js";
import ProductRoutes from "./routes/product.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));  
app.use(morgan("common"));  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


/* ROUTES */

app.use('/kpis',kpiRoutes);
app.use('/products',ProductRoutes);

async function initializeDatabase() {
  try {
    const metadata = await Metadata.findOne({ key: "dbInitialized" });

    if (metadata && metadata.value === true) {
      console.log("Database has already been populated.");
      return;
    }

    console.log("Populating KPI collection...");
    await KPI.insertMany(kpis);

    console.log("Populating Product collection...");
    await Product.insertMany(products);

    console.log("Populating Transaction collection...");
    await Transaction.insertMany(transactions);

    await Metadata.create({ key: "dbInitialized", value: true, timestamp: new Date() });

    console.log("Database initialization completed.");
  } catch (error) {
    console.error("Error during database initialization:", error);
    throw error;
  }
}



mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("Connected to MongoDB");

    await initializeDatabase();

    app.listen(process.env.PORT || 3000, () => console.log(`Server is running on Port: ${process.env.PORT || 3000}`));
  })
  .catch((error) => console.log(`${error} did not connect`)
);
