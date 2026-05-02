import React from "react";
import "./ReportsLayout.css";

const ReportsLayout = () => {
  const reports = [
    {
      id: 1,
      name: "Blood Test Report",
      date: "2026-04-10",
      file: "/patient_report.pdf",
    },
    {
      id: 2,
      name: "X-Ray Report",
      date: "2026-04-15",
      file: "/patient_report.pdf",
    },
    {
      id: 3,
      name: "Heart Checkup Report",
      date: "2026-04-20",
      file: "/patient_report.pdf",
    },
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
            <th>View</th>
            <th>Download</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.name}</td>
              <td>{report.date}</td>

              {/* VIEW */}
              <td>
                <a
                  href={report.file}
                  target="_blank"
                  rel="noreferrer"
                  className="view-btn"
                >
                  View
                </a>
              </td>

              {/* DOWNLOAD */}
              <td>
                <a
                  href={report.file}
                  download
                  className="download-btn"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;