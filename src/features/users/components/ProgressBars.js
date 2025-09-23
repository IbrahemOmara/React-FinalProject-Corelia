import React from "react";

const ProgressBars = () => {
const bars = [
    { label: "0 / 32", value: 70, color: "#0B0B61" },
    { label: "2 / 15", value: 40, color: "#2E2EFE" },
    { label: "0 / 3", value: 30, color: "#0101DF" },
    { label: "0 / 15", value: 20, color: "#5858FA" },
    { label: "11 / 23", value: 10, color: "#8181F7" },
];

return (
    <div style={{ width: "400px" }}>
        <h4 >Up to date</h4>
    {bars.map((bar, index) => (
        <div key={index} 
        style={{
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
        <div
            style={{
            height: "20px",
            background: "#ccc",
            borderRadius: "5px",
            overflow: "hidden",
            width: "85%",
            }}
        >
            <div
            style={{
                width: `${bar.value}%`,
                background: bar.color,
                height: "100%",
                borderRadius: "5px",
            }}
            ></div>
        </div>
        <span style={{ color: bar.color, fontSize: "12px" }}>
            {bar.label}
        </span>
        </div>
    ))}
    </div>
);
};

export default ProgressBars;
