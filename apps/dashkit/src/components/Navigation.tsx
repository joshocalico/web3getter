import IconButton from '@/components/IconButton';
import MyRoomLogo from '@/svg/logo.svg';
import {
  HiMagnifyingGlass,
  HiQrCode,
  HiWrench,
} from 'react-icons/hi2';
import Image from 'next/image';

const Navigation = () => {
  return (
    <>
      <nav
        className="flex justify-between items-center"
        style={{
          background: 'var(--color-primary)',
          color: 'var(--color-primary-contrast)',
          borderRadius: '0 0 1em 1em',
          height: '4em',
        }}
      >
        <a href="#" className="mx-7">
          <MyRoomLogo />
        </a>
        <div id="button-section" className="mx-6">
          <IconButton icon={<HiMagnifyingGlass />} />
          <IconButton icon={<HiQrCode />} />
          <IconButton icon={<HiWrench />} />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
