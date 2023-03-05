import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

type BaseModalProps = {
  open?: boolean;
  children: React.ReactNode;
  closeButton?: boolean;
  onBlur?: () => void;
  onClose?: () => void;
};

const BaseModal = ({
  open,
  children,
  closeButton,
  onBlur,
  onClose,
  ...props
}: BaseModalProps) => {
  const [body, setBody] = useState<HTMLBodyElement>();

  useEffect(() => {
    setBody(document.body as HTMLBodyElement);
  }, []);

  return open && body
    ? createPortal(
        <div
          className={
            "fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center w-full h-full"
          }
            onClick={onBlur}
          {...props}
        >
          <div
            className={
              "flex flex-col bg-white/80 backdrop-blur-md p-4 max-w-xl w-full rounded-3xl"
            }
          >
            <div className="flex">
              {closeButton && (
                <button className={"ml-auto text-3xl"} onClick={onClose}>
                  <HiXMark />
                </button>
              )}
            </div>
            {children}
          </div>
        </div>,
        body
      )
    : null;
};

export default BaseModal;
