/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* TODO: SwitchModal needs to pull from an indexer like Covalent */

import BaseModal from "./BaseModal";

type SwitchModalProps = {
    onUpdate: (image: string) => void;
    onClose: () => void;
}


const SwitchModal = ({ onUpdate, onClose }: SwitchModalProps) => {
    return <>
        <BaseModal open closeButton onClose={onClose}>
            <div className="flex flex-col">
                <img src="/img/Unknown.jpg" className="w-32 h-32" onClick={() => onUpdate('/img/Unknown.jpg')} />
                <img src="/img/Unknown-2.jpg" className="w-32 h-32" onClick={() => onUpdate('/img/Unknown-2.jpg')} />
                <img src="/img/Unknown-3.jpg" className="w-32 h-32" onClick={() => onUpdate('/img/Unknown-3.jpg')} />
                <img src="/img/Unknown-4.jpg" className="w-32 h-32" onClick={() => onUpdate('/img/Unknown-4.jpg')} />
            </div>
        </BaseModal>
    </>
}

export default SwitchModal;