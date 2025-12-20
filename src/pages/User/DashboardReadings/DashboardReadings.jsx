 import { useState } from "react";
import styles from "./DashboardReadings.module.css";
 import Reading from "../../../../src/assets/readingElectricityClock.jpg";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import ReadingRow from "../../../components/User/Reading/ReadingRow/ReadingRow";
import ReadingModal from "../../../components/User/Reading/ReadingModal/ReadingModal";
import ImageModal from "../../../components/User/Reading/ImageModal/ImageModal";
// استدعاء الكمبوننتات
 
const DashboardReadings = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedReading, setSelectedReading] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

 

  const activeTab = "القراءات";

  const userData = {
    readings: [
      { month: "يناير", date: "12-01-2025", previous: 1000, current: 1150, consumption: 150, image: Reading },
      { month: "فبراير", date: "12-01-2025", previous: 1150, current: 1320, consumption: 170, image: Reading },
      { month: "مارس", date: "12-01-2025", previous: 1320, current: 1480, consumption: 160, image: Reading },
    ],
  };

  const handleDetailsClick = (reading) => {
    setSelectedReading(reading);
    setShowModal(true);
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setShowImageModal(true);
  };

  return (
    <>
             <Breadcrumb title={activeTab} />

      <div className={styles.mainContent}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>الشهر</th>
              <th>التاريخ</th>
              <th>القراءة السابقة</th>
              <th>القراءة الحالية</th>
              <th>الاستهلاك</th>
              <th>التفاصيل</th>
            </tr>
          </thead>
          <tbody>
            {userData.readings.map((r, i) => (
              <ReadingRow key={i} reading={r} onDetailsClick={handleDetailsClick} />
            ))}
          </tbody>
        </table>
      </div>

      {showModal && selectedReading && (
        <ReadingModal
          reading={selectedReading}
          onClose={() => setShowModal(false)}
          onImageClick={handleImageClick}
        />
      )}

      {showImageModal && (
        <ImageModal image={selectedImage} onClose={() => setShowImageModal(false)} />
      )}
    </>
  );
};

export default DashboardReadings;
