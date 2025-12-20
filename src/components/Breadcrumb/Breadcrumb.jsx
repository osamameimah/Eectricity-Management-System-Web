import styles from "./Breadcrumb.module.css";

const Breadcrumb = ({ title }) => {
  return (
    <div className={styles.breadcrumb}>
      لوحة التحكم / {title}
    </div>
  );
};

export default Breadcrumb;
