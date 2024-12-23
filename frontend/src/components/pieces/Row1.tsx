import { useGetKpisQuery } from "@/state/api";
import DashboardBox from "./DashboardBox";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useMemo } from "react";


const Row1 = () => {
  const {data} = useGetKpisQuery();

  console.log(data);

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

  console.log(revenueExpenses);



  return (
    <>
       

    



    <DashboardBox gridArea="a"></DashboardBox>
    <DashboardBox gridArea="b"></DashboardBox>
    <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
};

export default Row1;
