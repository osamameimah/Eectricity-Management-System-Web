import React from "react";
import styles from "./ChartCard.module.css";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const ChartCard = ({ title, data, dataKey }) => {
  return (
    <div className={styles.chartCard}>
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey={dataKey} fill="#905f00" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard;
