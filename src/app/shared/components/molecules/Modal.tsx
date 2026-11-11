'use client'
import React from 'react';

interface ModalProps {
	isOpen: boolean;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
	if (!isOpen) return null
	return (
		<div
			id="popup-modal"
			tabIndex={-1}
			className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] min-h-screen content-center bg-black/50 backdrop-blur-xs">
			<div className="relative p-4 w-full max-w-md max-h-full justify-self-center">
				{children}
			</div>
		</div>
	)
};

export default Modal;