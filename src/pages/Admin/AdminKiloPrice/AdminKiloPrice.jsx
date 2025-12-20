 import React, { useState, useEffect } from "react";
 
import styles from "./AdminKiloPrice.module.css";
import KiloCard from "../../../components/Admin/KiloPrice/KiloCard/KiloCard";
import HistoryCard from "../../../components/Admin/KiloPrice/HistoryCard/HistoryCard";
import ConfirmModal from "../../../components/Admin/KiloPrice/ConfirmModal/ConfirmModal";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

const AdminKiloPrice = () => {
  const pageTitles = "سعر الكيلو" ;
   

  const [activeTab] = useState("kilo");
  const [currentPrice, setCurrentPrice] = useState(3.5);
  const [newPrice, setNewPrice] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [priceHistory, setPriceHistory] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/kilo-price")
      .then((res) => res.json())
      .then((data) => {
        setCurrentPrice(data.currentPrice);
        setPriceHistory(data.history);
      });
  }, []);

  const saveNewPrice = () => {
    if (Number(newPrice) <= 0) {
      setError("يرجى إدخال سعر صحيح أكبر من صفر");
      return;
    }

    const updatedRecord = {
      newPrice,
      oldPrice: currentPrice,
      date: new Date().toLocaleString(),
    };

    fetch("/api/update-kilo-price", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedRecord),
    }).then(() => {
      setCurrentPrice(newPrice);
      setPriceHistory([updatedRecord, ...priceHistory]);
      setShowModal(false);
      setNewPrice("");
      setError("");
    });
  };
 
  return (
    <div className={styles.kiloWrapperMain}>

            <Breadcrumb title={pageTitles} />

       <div className={styles.kiloWrapper}>
        <KiloCard
          currentPrice={currentPrice}
          newPrice={newPrice}
          setNewPrice={setNewPrice}
          setShowModal={setShowModal}
          error={error}
        />
        <HistoryCard priceHistory={priceHistory} />
      </div>

      <ConfirmModal
        show={showModal}
        setShow={setShowModal}
        currentPrice={currentPrice}
        newPrice={newPrice}
        saveNewPrice={saveNewPrice}
      />
    </div>
  );
};

export default AdminKiloPrice;
