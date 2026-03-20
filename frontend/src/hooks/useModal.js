import { useState } from "react";

const useModal = () => {
    const [modalType, setModalType] = useState(null);  
    const [modalData, setModalData] = useState(null);

    const openModal = (type, data = null) => {
        setModalType(type);
        setModalData(data);
    }

    const closeModal = () => {
        setModalType(null);
        setModalData(null);
    }

    return { modalType, modalData, openModal, closeModal };

}

export default useModal;