 import React, { useState } from "react";
import styles from "./AdminNewUser.module.css";

const AdminNewUser = () => {
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

    // ============ Toast =============
    const [toast, setToast] = useState({ show: false, msg: "", type: "" });

    const showToast = (msg, type) => {
        setToast({ show: true, msg, type });
        setTimeout(() => {
            setToast({ show: false, msg: "", type: "" });
        }, 2500);
    };

    // ============ الموافقة / الرفض =============

    const openModal = (user, type) => {
        setModalUser(user);
        setActionType(type);
        setNote(user.notes || "");
        setShowModal(true);
    };

    const handleSubmitAction = () => {
        const updated = users.map(u =>
            u.id === modalUser.id
                ? {
                    ...u,
                    status: actionType === "approve" ? "تمت الموافقة" : "تم الرفض",
                    notes: note
                }
                : u
        );

        setUsers(updated);
        setShowModal(false);

        showToast(
            actionType === "approve" ? "تمت الموافقة على الطلب" : "تم رفض الطلب",
            actionType
        );
    };

    // ============ إضافة مشترك =============

    const handleAddUser = () => {
        setUsers([...users, newUser]);
        setShowAddModal(false);
        setNewUser({
            name: "",
            id: "",
            address: "",
            phone: "",
            date: "",
            panel: "",
            status: "قيد المراجعة",
            notes: ""
        });
        showToast("تم إضافة المشترك بنجاح", "approve");
    };

    // ============ تعديل مشترك =============

    const openEditModal = (user) => {
        setEditData(user);
        setShowEditModal(true);
    };

    const handleEditUser = () => {
        const updated = users.map(u =>
            u.id === editData.id ? editData : u
        );

        setUsers(updated);
        setShowEditModal(false);
        showToast("تم تعديل بيانات المشترك", "approve");
    };

    return (
        <>
            <div className={styles.breadcrumb}>لوحة التحكم / المشتركين الجدد</div>

            <button className={styles.addUserBtn} onClick={() => setShowAddModal(true)}>
                + إضافة مشترك جديد
            </button>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>الاسم</th>
                            <th>الهوية</th>
                            <th>العنوان</th>
                            <th>رقم الجوال</th>
                            <th>التاريخ</th>
                            <th>أقرب طبلون</th>
                            <th>الحالة</th>
                            <th>ملاحظات</th>
                            <th>الإجراءات</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.id}</td>
                                <td>{user.address}</td>
                                <td>{user.phone}</td>
                                <td>{user.date}</td>
                                <td>{user.panel}</td>
                                <td>{user.status}</td>
                                <td>{user.notes || "—"}</td>

                                <td className={styles.actionsTd}>
                                    <button
                                        className={`${styles.actionBtn} ${styles.acceptBtn}`}
                                        onClick={() => openModal(user, "approve")}
                                    >
                                        موافقة
                                    </button>

                                    <button
                                        className={`${styles.actionBtn} ${styles.rejectBtn}`}
                                        onClick={() => openModal(user, "reject")}
                                    >
                                        رفض
                                    </button>

                                    <button
                                        className={`${styles.actionBtn} ${styles.editBtn}`}
                                        onClick={() => openEditModal(user)}
                                    >
                                        تعديل
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ========== مودال الموافقة / الرفض ========= */}
            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalBox}>
                        <h2 className={styles.modalTitle}>
                            {actionType === "approve" ? "تأكيد الموافقة" : "تأكيد الرفض"}
                        </h2>

                        <p><strong>الاسم:</strong> {modalUser.name}</p>
                        <p><strong>الهوية:</strong> {modalUser.id}</p>

                        <label>ملاحظات:</label>
                        <textarea
                            className={styles.noteInput}
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />

                        <div className={styles.modalActions}>
                            <button onClick={handleSubmitAction} className={styles.modalConfirm}>
                                تأكيد
                            </button>
                            <button onClick={() => setShowModal(false)} className={styles.modalCancel}>
                                إغلاق
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ========== مودال إضافة مشترك ========= */}
            {showAddModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalBox}>
                        <h2 className={styles.modalTitle}>إضافة مشترك جديد</h2>

                        <input placeholder="الاسم"
                            value={newUser.name}
                            onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                        />
                        <input placeholder="رقم الهوية"
                            value={newUser.id}
                            onChange={e => setNewUser({ ...newUser, id: e.target.value })}
                        />
                        <input placeholder="العنوان"
                            value={newUser.address}
                            onChange={e => setNewUser({ ...newUser, address: e.target.value })}
                        />
                        <input placeholder="رقم الجوال"
                            value={newUser.phone}
                            onChange={e => setNewUser({ ...newUser, phone: e.target.value })}
                        />
                        <input type="date"
                            value={newUser.date}
                            onChange={e => setNewUser({ ...newUser, date: e.target.value })}
                        />
                        <input placeholder="رقم الطبلون"
                            value={newUser.panel}
                            onChange={e => setNewUser({ ...newUser, panel: e.target.value })}
                        />

                        <div className={styles.modalActions}>
                            <button onClick={handleAddUser} className={styles.modalConfirm}>إضافة</button>
                            <button onClick={() => setShowAddModal(false)} className={styles.modalCancel}>إغلاق</button>
                        </div>
                    </div>
                </div>
            )}

            {/* ========== مودال تعديل ========= */}
            {showEditModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalBox}>
                        <h2 className={styles.modalTitle}>تعديل بيانات المشترك</h2>

                        <input value={editData.name}
                            onChange={e => setEditData({ ...editData, name: e.target.value })}
                        />
                        <input value={editData.address}
                            onChange={e => setEditData({ ...editData, address: e.target.value })}
                        />
                        <input value={editData.phone}
                            onChange={e => setEditData({ ...editData, phone: e.target.value })}
                        />
                        <input type="date" value={editData.date}
                            onChange={e => setEditData({ ...editData, date: e.target.value })}
                        />
                        <input value={editData.panel}
                            onChange={e => setEditData({ ...editData, panel: e.target.value })}
                        />

                        <textarea
                            value={editData.notes}
                            onChange={e => setEditData({ ...editData, notes: e.target.value })}
                        />

                        <div className={styles.modalActions}>
                            <button onClick={handleEditUser} className={styles.modalConfirm}>حفظ</button>
                            <button onClick={() => setShowEditModal(false)} className={styles.modalCancel}>إغلاق</button>
                        </div>
                    </div>
                </div>
            )}

            {/* ========== Toast ========= */}
            {toast.show && (
                <div
                    className={`${styles.toast} ${toast.type === "approve" ? styles.toastSuccess : styles.toastError}`}
                >
                    {toast.msg}
                </div>
            )}
        </>
    );
};

export default AdminNewUser;
