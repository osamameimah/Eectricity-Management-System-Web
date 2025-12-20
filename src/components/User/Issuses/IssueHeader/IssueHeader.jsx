import { AlertCircle } from "lucide-react";
import styles from "./IssueHeader.module.css";

const IssueHeader = () => {
  return (
    <div className={styles.header}>
      <AlertCircle size={28} />
      <div>
        <h3>نموذج الإبلاغ عن عطل</h3>
        <p>يرجى تعبئة البيانات بدقة لضمان سرعة المعالجة</p>
      </div>
    </div>
  );
};

export default IssueHeader;
