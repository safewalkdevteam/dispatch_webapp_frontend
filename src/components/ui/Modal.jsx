import { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
    const modalRef = useRef(null);
    const previousFocusRef = useRef(null);
    useEffect(() => {
        if (isOpen) {
            // store the element that opened the modal
            previousFocusRef.current = document.activeElement;
            // focus the modal
            modalRef.current?.focus();
        } else {
            // return focus to the element that opened the modal
            previousFocusRef.current?.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        // backdrop
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-2000"
            onClick={onClose} // close on backdrop click
            aria-hidden="true"
        >
            {/* modal */}
            <section
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                tabIndex={-1}
                className="bg-white rounded-lg p-6 shadow-lg overflow-auto"
                onClick={(e) => e.stopPropagation()} // prevent backdrop close
            >
                <div className="flex flex-row flex-nowrap justify-between items-center mb-4 h-12">
                    <h2 id="modal-title" className="text-2xl">{title}</h2>
                    <button
                        onClick={onClose}
                        aria-label="Close modal"
                        className="bg-none border-none text-2xl cursor-pointer p-1 text-black"
                    >
                        ✕
                    </button>
                </div>
                {children}
            </section>
        </div>
    );
};

export default Modal;