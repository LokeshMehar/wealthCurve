import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./pieces/Row1";
import Row2 from "./pieces/Row2";
import Row3 from "./pieces/Row3";
import { useGetKpisQuery } from "@/state/api";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { useMemo } from "react";


const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;
const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

  const {data} = useGetKpisQuery();

  let revenueExpenses = useMemo(() => {
      return (
        data &&
        data[0].monthlyData.map(({ month, revenue, expenses }) => {
          return {
            name: month.substring(0, 3),
            revenue: revenue,
            expenses: expenses,
          };
        })
      );
    }, [data]);


  return (
    <>
      <LineChart width={1300} height={700} data={revenueExpenses}>
  <Line type="monotone" dataKey="expenses" stroke="#ff0000" />
  <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
  <CartesianGrid stroke="#ccc" />
  <XAxis dataKey="month" /> 
      <YAxis />
    </LineChart>
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
    </>
  );
};

export default Dashboard;