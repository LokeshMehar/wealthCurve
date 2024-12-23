import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Predictions from "./components/Predictions";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const DemoChart = () => {
  const demoData = [
    { name: 'Jan', revenue: 20000, expenses: 15000 },
    { name: 'Feb', revenue: 18000, expenses: 12000 },
    { name: 'Mar', revenue: 22000, expenses: 17000 },
    { name: 'Apr', revenue: 24000, expenses: 19000 },
    { name: 'May', revenue: 25000, expenses: 20000 },
    { name: 'Jun', revenue: 26000, expenses: 21000 },
    { name: 'Jul', revenue: 27000, expenses: 22000 },
    { name: 'Aug', revenue: 28000, expenses: 23000 },
    { name: 'Sep', revenue: 29000, expenses: 24000 },
    { name: 'Oct', revenue: 30000, expenses: 25000 },
    { name: 'Nov', revenue: 31000, expenses: 26000 },
    { name: 'Dec', revenue: 32000, expenses: 27000 },
  ];

  return (
    <LineChart width={1300} height={700} data={demoData}>
      <Line type="monotone" dataKey="expenses" stroke="#8884d8" />
      <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
};

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <DemoChart />
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;