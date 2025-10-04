import React from "react";
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// تسجيل ال components اللي هنستخدمها
ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

const MyLineChart = () => {
const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
    {
        label: "Storage Usage",
        data: [10, 70, 60, 40, 180, 100, 140, 50, 130],
        borderColor: "#45D0EE",
        backgroundColor: "rgba(0,191,255,0.2)",
        tension: 0.4, // يخلي الخط منحني شوية
    },
    ],
};

const options = {
    responsive: true,
    plugins: {
    legend: {
        display: false, // لو مش عايز تظهر الـ label فوق
    },
    tooltip: {
        mode: "index",
        intersect: false,
    },
    },
    scales: {
    y: {
        ticks: {
        callback: function (value) {
            return value + "TB"; // يخلي الوحدات TB زي الصورة
        },
        },
        grid: {
        color: "rgba(255,255,255,0.2)", // خطوط الشبكة
        },
    },
    x: {
        grid: {
        color: "rgba(255,255,255,0.2)",
        },
    },
    },
};

return <Line data={data} options={options} />;
};

export default MyLineChart;
