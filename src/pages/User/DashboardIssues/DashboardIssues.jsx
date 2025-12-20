 import React, { useState } from "react";
import styles from "./DashboardIssues.module.css";
import Toast from "../../../components/User/Issuses/Toast/Toast";
import IssueForm from "../../../components/User/Issuses/IssueForm/IssueForm";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
 

const DashboardIssues = () => {
  const [showAlert, setShowAlert] = useState(false);

 

  const activeTab = "الإبلاغ عن عطل";
  return (
    <div className={styles.mainContent}>
      {showAlert && (
        <Toast
          message="✅ تم إرسال العطل بنجاح، سيتم التواصل معك قريبًا"
          onClose={() => setShowAlert(false)}
        />
      )}

      {/* <div className={styles.breadcrumb}>
        لوحة التحكم / {pageTitles.issues}
      </div> */}

      <Breadcrumb title={activeTab} />

      <IssueForm onSuccess={() => setShowAlert(true)} />
    </div>
  );
};

export default DashboardIssues;
