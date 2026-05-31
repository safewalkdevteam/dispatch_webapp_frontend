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
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2000,
            }}
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
                style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '1.5em',
                    width: "clamp(20em, 40%, 40em)",
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    height: "90%",
                    overflow: "auto"
                }}
                onClick={(e) => e.stopPropagation()} // prevent backdrop close
            >
                <div style={{
                    display: 'flex',
                    flexFlow: "row nowrap",
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1em',
                    padding: 0,
                    height: "3em"
                }}>
                    <h2 id="modal-title" style={{
                        margin: 0,
                        padding: 0
                    }}>{title}</h2>
                    <button
                        onClick={onClose}
                        aria-label="Close modal"
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            padding: '0.25em',
                            color: "black",
                            position: ""
                        }}
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