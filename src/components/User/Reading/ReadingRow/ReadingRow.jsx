import styles from "./ReadingRow.module.css";

const ReadingRow = ({ reading, onDetailsClick }) => (
  <tr>
    <td>{reading.month}</td>
    <td>{reading.date}</td>
    <td>{reading.previous}</td>
    <td>{reading.current}</td>
    <td className={styles.consumption}>{reading.consumption}</td>
    <td>
      <button
        className={styles.detailsBtn}
        onClick={() => onDetailsClick(reading)}
      >
        عرض التفاصيل
      </button>
    </td>
  </tr>

);

export default ReadingRow;
