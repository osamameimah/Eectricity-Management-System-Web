 import React, { useState } from "react";
import AddUserButton from "../../../components/Admin/NewUser/AddUserButton/AddUserButton";
import UsersTable from "../../../components/Admin/NewUser/UsersTable/UsersTable";
import ActionModal from "../../../components/Admin/NewUser/ActionModal/ActionModal";
import AddUserModal from "../../../components/Admin/NewUser/AddUserModal/AddUserModal";
import EditUserModal from "../../../components/Admin/NewUser/EditUserModal/EditUserModal";
import Toast from "../../../components/Admin/NewUser/Toast/Toast";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
 

const AdminNewUser = () => {
  const [disabledButtons, setDisabledButtons] = useState({});
  const [users, setUsers] = useState([
    {
      name: "محمد أحمد",
      id: "402198765",
      address: "تل الزعتر - برج رقم 8",
      phone: "0599123456",
      date: "2025-01-11",
      panel: "طبلون 14",
      status: "قيد المراجعة",
      notes: ""
    },
    {
      name: "سارة محمود",
      id: "402112233",
      address: "جباليا البلد - شارع المدارس",
      phone: "0599988776",
      date: "2025-01-12",
      panel: "طبلون 22",
      status: "قيد المراجعة",
      notes: ""
    },
  ]);

  // ============ مودالات =============
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const [modalUser, setModalUser] = useState(null);
  const [note, setNote] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    id: "",
    address: "",
    phone: "",
    date: "",
    panel: "",
    status: "قيد المراجعة",
    notes: ""
  });

  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState({});

  // ============ Toast ============
  const [toast, setToast] = useState({ show: false, msg: "", type: "" });
  const showToast = (msg, type) => {
    setToast({ show: true, msg, type });
    setTimeout(() => setToast({ show: false, msg: "", type: "" }), 2500);
  };

  // ============ الموافقة / الرفض ============
  const openModal = (user, type) => {
    setModalUser(user);
    setActionType(type);
    setNote(user.notes || "");
    setShowModal(true);
  };

  const handleSubmitAction = () => {
    const updated = users.map(u =>
      u.id === modalUser.id
        ? { ...u, status: actionType === "approve" ? "تمت الموافقة" : "تم الرفض", notes: note }
        : u
    );
    setUsers(updated);
    setShowModal(false);
    setDisabledButtons(prev => ({ ...prev, [modalUser.id]: true }));
    showToast(actionType === "approve" ? "تمت الموافقة على الطلب" : "تم رفض الطلب", actionType);
  };

  // ============ إضافة مشترك ============
  const handleAddUser = () => {
    setUsers([...users, newUser]);
    setShowAddModal(false);
    setNewUser({ name: "", id: "", address: "", phone: "", date: "", panel: "", status: "قيد المراجعة", notes: "" });
    showToast("تم إضافة المشترك بنجاح", "approve");
  };

  // ============ تعديل مشترك ============
  const openEditModal = (user) => {
    setEditData(user);
    setShowEditModal(true);
  };

  const handleEditUser = () => {
    const updated = users.map(u => (u.id === editData.id ? editData : u));
    setUsers(updated);
    setShowEditModal(false);
    showToast("تم تعديل بيانات المشترك", "approve");
  };

  return (
    <>
      <Breadcrumb title="المشتركين الجدد" />
      <AddUserButton onClick={() => setShowAddModal(true)} />

      <UsersTable
        users={users}
        disabledButtons={disabledButtons}
        openModal={openModal}
        openEditModal={openEditModal}
      />

      <ActionModal
        show={showModal}
        user={modalUser}
        actionType={actionType}
        note={note}
        setNote={setNote}
        onClose={() => setShowModal(false)}
        onConfirm={handleSubmitAction}
      />

      <AddUserModal
        show={showAddModal}
        newUser={newUser}
        setNewUser={setNewUser}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddUser}
      />

      <EditUserModal
        show={showEditModal}
        editData={editData}
        setEditData={setEditData}
        onClose={() => setShowEditModal(false)}
        onSave={handleEditUser}
      />

      <Toast show={toast.show} msg={toast.msg} type={toast.type} />
    </>
  );
};

export default AdminNewUser;
