import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
const data = {
    labels: ["SQL Server 2019", "SQL Server 2017", "SQL Server 2016", "SQL Server 2012", "SQL Server 2008"],
    datasets: [
    {
        data: [40, 20, 15, 15, 10],
        backgroundColor: [
        "#0B0B61", // غامق
        "#2E2EFE",
        "#0101DF",
        "#5858FA",
        "#8181F7",
        ],
        borderWidth: 0,
    },
    ],
};

const options = {
    plugins: {
    legend: {
        
        display: true,
        position: "right",
    },
    },
};

return <Pie data={data} options={options} />;
}
