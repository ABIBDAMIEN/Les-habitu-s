import React from 'react';
import Dialog from "@mui/material/Dialog";
import { DialogContent } from '@mui/material';

export type ModalProps = {
  open: boolean;
  className?: string;
  children?: React.ReactNode;
  modalTitle: string;
  onModalClose: () => void;
}

const Modal = ({ open, onModalClose, modalTitle, className, children }: ModalProps) => {
  return (
    <>
      <Dialog open={open} onClose={onModalClose} disableEscapeKeyDown={true} className={className} fullWidth={true} maxWidth="md">
        <div className="w-full flex items-center py-3 px-6 border-b-2 border-gray-100">
          <p className="font-semibold text-lg text-gray-600">{modalTitle}</p>
          <button className="ml-auto close-btn py-1" onClick={onModalClose}>
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path d="M16.5 3C9.33187 3 3.5 8.83187 3.5 16C3.5 23.1681 9.33187 29 16.5 29C23.6681 29 29.5 23.1681 29.5 16C29.5 8.83187 23.6681 3 16.5 3ZM21.2069 19.2931C21.3036 19.3851 21.381 19.4954 21.4345 19.6178C21.4879 19.7401 21.5163 19.8718 21.518 20.0053C21.5197 20.1388 21.4947 20.2712 21.4444 20.3949C21.3941 20.5185 21.3196 20.6308 21.2252 20.7252C21.1308 20.8196 21.0185 20.8941 20.8949 20.9444C20.7712 20.9947 20.6388 21.0197 20.5053 21.018C20.3718 21.0163 20.2401 20.9879 20.1178 20.9345C19.9954 20.881 19.8851 20.8036 19.7931 20.7069L16.5 17.4144L13.2069 20.7069C13.0178 20.8865 12.7661 20.9852 12.5053 20.9818C12.2445 20.9785 11.9954 20.8734 11.811 20.689C11.6266 20.5046 11.5215 20.2555 11.5182 19.9947C11.5148 19.7339 11.6135 19.4822 11.7931 19.2931L15.0856 16L11.7931 12.7069C11.6135 12.5178 11.5148 12.2661 11.5182 12.0053C11.5215 11.7445 11.6266 11.4954 11.811 11.311C11.9954 11.1266 12.2445 11.0215 12.5053 11.0182C12.7661 11.0148 13.0178 11.1135 13.2069 11.2931L16.5 14.5856L19.7931 11.2931C19.9822 11.1135 20.2339 11.0148 20.4947 11.0182C20.7555 11.0215 21.0046 11.1266 21.189 11.311C21.3734 11.4954 21.4785 11.7445 21.4818 12.0053C21.4852 12.2661 21.3865 12.5178 21.2069 12.7069L17.9144 16L21.2069 19.2931Z" fill="#1A78A8"/>
            </svg>
          </button>
        </div>
        <DialogContent>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Modal;
