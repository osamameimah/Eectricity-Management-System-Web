 import { useState } from "react";
 
import styles from "./DashboardElectricalPanelsAndPoles.module.css";
import SuccessNotification from "../../../components/Admin/AdminElectricalPanelsAndPoles/SuccessNotification/SuccessNotification";
import PanelForm from "../../../components/Admin/AdminElectricalPanelsAndPoles/PanelForm/PanelForm";
import PanelTable from "../../../components/Admin/AdminElectricalPanelsAndPoles/PanelTable/PanelTable";
import AddEditModal from "../../../components/Admin/AdminElectricalPanelsAndPoles/AddEditModal/AddEditModal";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

const DashboardElectricalPanelsAndPoles = () => {
  const [panels, setPanels] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingPanel, setEditingPanel] = useState(null);
  const [notification, setNotification] = useState(null);

  const emptyForm = {
    panelNumber: "",
    address: "",
    notes: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  // إظهار إشعار النجاح
  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // فتح مودال الإضافة
  const handleAddOpen = () => {
    setFormData(emptyForm);
    setEditingPanel(null);
    setShowModal(true);
  };

  // فتح مودال التعديل
  const handleEditOpen = (panel) => {
    setFormData(panel);
    setEditingPanel(panel);
    setShowModal(true);
  };

  // حفظ (إضافة أو تعديل)
  const handleSave = () => {
    if (!formData.panelNumber || !formData.address) {
      showNotification("يرجى ملء جميع الحقول المطلوبة", "error");
      return;
    }

    if (editingPanel) {
      // تعديل
      setPanels(
        panels.map((p) =>
          p.id === editingPanel.id ? { ...formData, id: p.id } : p
        )
      );
      showNotification("تم تعديل الطابلون بنجاح ✓");
    } else {
      // إضافة
      setPanels([...panels, { ...formData, id: Date.now() }]);
      showNotification("تم إضافة الطابلون بنجاح ✓");
    }

    setShowModal(false);
    setFormData(emptyForm);
  };

  // حذف
  const handleDelete = (id) => {
    if (window.confirm("هل متأكد من حذف هذا الطابلون؟")) {
      setPanels(panels.filter((p) => p.id !== id));
      showNotification("تم حذف الطابلون بنجاح ✓");
    }
  };
  const pageTitles = "الطابلونات والاعمدة";

  return (
 <>
 
       <Breadcrumb title= {pageTitles}/>

      {notification && (
        <SuccessNotification
          message={notification.message}
          type={notification.type}
        />
      )}

      <PanelForm onAddClick={handleAddOpen} />

      <PanelTable
        panels={panels}
        onEdit={handleEditOpen}
        onDelete={handleDelete}
      />

      {showModal && (
        <AddEditModal
          title={
            editingPanel ? `تعديل الطابلون: ${editingPanel.panelNumber}` : "إضافة طابلون جديد"
          }
          formData={formData}
          onFormChange={setFormData}
          onSave={handleSave}
          onClose={() => {
            setShowModal(false);
            setFormData(emptyForm);
            setEditingPanel(null);
          }}
        />
      )}

</>
  );
};

export default DashboardElectricalPanelsAndPoles;