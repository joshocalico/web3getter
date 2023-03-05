import IconButton from "@/components/IconButton";

import { HiMagnifyingGlass, HiQrCode, HiWrench } from "react-icons/hi2"

const Navigation = () => {
  return <>
    <nav className="flex justify-between items-center" style={{
      background: "var(--color-primary)",
      color: "var(--color-primary-contrast)",
      borderRadius: "0 0 1em 1em",
      height: "4em",
    }}>
      <a href="#">
        Logo
      </a>
      <div id="button-section">
        <IconButton icon={<HiMagnifyingGlass />} />
        <IconButton icon={<HiQrCode />} />
        <IconButton icon={<HiWrench />} />
      </div>
    </nav>
  </>;
};

export default Navigation;