import React, { useState } from "react";

import styles from "./AdminIssuesReports.module.css";
import IssuesTable from "../../../components/Admin/Isusse/IssuesTable/IssuesTable";
import SolveModal from "../../../components/Admin/Isusse/SolveModal/SolveModal";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

const AdminIssuesReports = () => {
  const pageTitles = {
    home: "الرئيسية",
    readings: "القراءات",
    wallet: "المحفظة",
    issues: "تقارير الأعطال",
  };

  const [activeTab] = useState("issues");

  const [issues, setIssues] = useState([
    {
      subscriber: "أسامة ميمة",
      address: "غزة - النصر",
      pumper: "15",
      details: "انقطاع التيار الكهربائي جزئي",
      assignedTo: "محمد أبو سليم",
      status: "قيد التنفيذ",
      solvedBy: "",
      solvedDate: "",
    },
    {
      subscriber: "فاطمة الخالدي",
      address: "غزة - الشجاعية",
      pumper: "22",
      details: "عداد معطل",
      assignedTo: "أحمد سمير",
      status: "تم الحل",
      solvedBy: "أحمد سمير",
      solvedDate: "12/12/2025",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentIssueIndex, setCurrentIssueIndex] = useState(null);
  const [employeeName, setEmployeeName] = useState("");

  const openSolveModal = (index) => {
    setCurrentIssueIndex(index);
    setEmployeeName("");
    setShowModal(true);
  };

  const handleSolve = () => {
    if (!employeeName.trim()) {
      alert("يرجى إدخال اسم الموظف الذي حل المشكلة!");
      return;
    }
    const updatedIssues = [...issues];
    const today = new Date().toLocaleDateString();
    updatedIssues[currentIssueIndex] = {
      ...updatedIssues[currentIssueIndex],
      status: "تم الحل",
      solvedBy: employeeName,
      solvedDate: today,
    };
    setIssues(updatedIssues);
    setShowModal(false);
  };

  return (
    <div className={styles.mainContent}>
      <Breadcrumb title={pageTitles[activeTab]} />

      <IssuesTable issues={issues} openSolveModal={openSolveModal} />
      {showModal && (
        <SolveModal
          employeeName={employeeName}
          setEmployeeName={setEmployeeName}
          onClose={() => setShowModal(false)}
          onConfirm={handleSolve}
        />
      )}
    </div>
  );
};

export default AdminIssuesReports;
