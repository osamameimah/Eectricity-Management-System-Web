 import React, { useState } from "react";
import styles from "./DashboardReadings.module.css";
import Reading from "../../../../src/assets/readingElectricityClock.jpg";

const DashboardReadings = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedReading, setSelectedReading] = useState(null);

  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pageTitles = {
    home: "الرئيسية",
    readings: "القراءات",
    wallet: "المحفظة",
    issues: "الإبلاغ عن عطل",
  };

  const [activeTab] = useState("readings");

  const userData = {
    readings: [
      {
        month: "يناير",
        date: "12-01-2025",
        previous: 1000,
        current: 1150,
        consumption: 150,
        image: Reading,
      },
      {
        month: "فبراير",
        date: "12-01-2025",
        previous: 1150,
        current: 1320,
        consumption: 170,
        image: Reading,
      },
      {
        month: "مارس",
        date: "12-01-2025",
        previous: 1320,
        current: 1480,
        consumption: 160,
        image: Reading,
      },
    ],
  };

  const openImage = (img) => {
    setSelectedImage(img);
    setShowImageModal(true);
  };

  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.breadcrumb}>
          لوحة التحكم / {pageTitles[activeTab]}
        </div>

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
              <tr key={i}>
                <td>{r.month}</td>
                <td>{r.date}</td>
                <td>{r.previous}</td>
                <td>{r.current}</td>
                <td className={styles.consumption}>{r.consumption}</td>
                <td>
                  <button
                    className={styles.detailsBtn}
                    onClick={() => {
                      setSelectedReading(r);
                      setShowModal(true);
                    }}
                  >
                    عرض التفاصيل
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== مودال تفاصيل القراءة ===== */}
      {showModal && selectedReading && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <h2>تفاصيل قراءة شهر {selectedReading.month}</h2>

            <table className={styles.modalTable}>
              <thead>
                <tr>
                  <th>الأسبوع</th>
                  <th>القراءة السابقة</th>
                  <th>القراءة الحالية</th>
                  <th>الاستهلاك</th>
                  <th>صورة القراءة</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((week) => {
                  const prev =
                    selectedReading.previous + (week - 1) * 40;
                  const curr = prev + 40;

                  return (
                    <tr key={week}>
                      <td>الأسبوع {week}</td>
                      <td>{prev}</td>
                      <td>{curr}</td>
                      <td className={styles.consumption}>
                        {curr - prev}
                      </td>
                      <td>
                        <img
                          src={selectedReading.image}
                          alt="صورة القراءة"
                          className={styles.readingImage}
                          onClick={() =>
                            openImage(selectedReading.image)
                          }
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <button
              className={styles.closeBtn}
              onClick={() => setShowModal(false)}
            >
              إغلاق
            </button>
          </div>
        </div>
      )}

      {/* ===== مودال الصورة ===== */}
      {showImageModal && (
        <div
          className={styles.imageOverlay}
          onClick={() => setShowImageModal(false)}
        >
          <div
            className={styles.imageBox}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="تكبير الصورة" />
            <button
              className={styles.closeImageBtn}
              onClick={() => setShowImageModal(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardReadings;
