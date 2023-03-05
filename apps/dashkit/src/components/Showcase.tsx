/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import SwitchModal from "./modals/SwitchModal";

type ShowcaseProps = {
  data: any;
};

const Showcase = ({
    data
}: ShowcaseProps) => {
    const [image1, setImage1] = useState("/img/Unknown.jpg")
    const [image2, setImage2] = useState("/img/Unknown-2.jpg")

    const [open, setOpen] = useState(false)
    const [target, setTarget] = useState(0)

    return (<>
            <span className="font-sans font-semibold ml-4 py-1 px-2 rounded-xl border-4" style={{
                background: "var(--color-primary)",
                color: "var(--color-primary-contrast)",
            }}>Avatars</span>
        <div className="h-96 p-2">
            <div className="flex flex-row justify-evenly items-center w-full h-full rounded-3xl text-white border-4"
                style={{ borderColor: "var(--color-primary)" }}
            >
                <img src={image1} className="w-64 h-64 rounded-3xl border-4" onClick={() => {
                    setTarget(1);
                    setOpen(true);
                }} />
                <img src={image2} className="w-64 h-64 rounded-3xl border-4" onClick={() => {
                    setTarget(2);
                    setOpen(true);
                }}/>
            </div>
        </div>
        {open && <SwitchModal onClose={() => setOpen(false)} onUpdate={(image) => {
            if (target === 1) {
                setImage1(image);
            } else {
                setImage2(image);
            }
            setOpen(false);
        }} />}

    </>);
}

export default Showcase;