import { useGetKpisQuery } from "@/state/api";
import DashboardBox from "./DashboardBox";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useMemo } from "react";

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
      {/* <LineChart width={1300} height={700} data={revenueExpenses}>
  <Line type="monotone" dataKey="expenses" stroke="#8884d8" />
  <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
  <CartesianGrid stroke="#ccc" />
  <XAxis dataKey="month" /> 
      <YAxis />
    </LineChart> */}

    {/* <DemoChart></DemoChart> */}



    <DashboardBox gridArea="a"></DashboardBox>
    <DashboardBox gridArea="b"></DashboardBox>
    <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
};

export default Row1;
