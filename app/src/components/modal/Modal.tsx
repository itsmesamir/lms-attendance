import React from "react";
import Modal from "react-modal";
import Button from "../button/Button";
import { en } from "../../language/lang";

Modal.setAppElement("#root");

interface ConfirmModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
  message: string;
}

export const ConfirmModal = ({
  isOpen,
  onRequestClose,
  onConfirm,
  message,
}: ConfirmModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      // contentLabel="Confirmation Modal"
      className="flex flex-col items-center justify-center p-8 bg-white border border-gray-300 shadow-lg transform translate-x-[-50%] translate-y-[-50%] absolute top-1/2 left-1/2"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75"
    >
      <p className="text-xl">{message}</p>

      <div className="flex gap-4 mt-6">
        <Button variant="primary" onClick={onConfirm}>
          {en.BUTTON.YES_CONFIRM}
        </Button>
        <Button variant="secondary" onClick={onRequestClose}>
          {en.BUTTON.NO_CANCEL}
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
