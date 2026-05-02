import React from "react";
import "./ReportsLayout.css";

const ReportsLayout = () => {
  const reports = [
    { id: 1, name: "Blood Test Report", date: "2026-04-10", status: "Completed" },
    { id: 2, name: "X-Ray Report", date: "2026-04-15", status: "Pending" },
    { id: 3, name: "Heart Checkup", date: "2026-04-20", status: "Completed" },
  ];

  return (
    <div className="reports-container">
      <h2>Your Reports</h2>

      <table className="reports-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Report Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.name}</td>
              <td>{report.date}</td>
              <td className={report.status.toLowerCase()}>
                {report.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;