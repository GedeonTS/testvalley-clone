import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' style={{ display: 'block' }}>
      <Image
        src='/logo/logo.svg'
        alt='Logo'
        width='128'
        height='25'
        className='relative hidden lg:inline-block'
      />

      <Image
        src='/logo/logo-mobile.svg'
        alt='Logo'
        width='126'
        height='48'
        className='relative lg:hidden'
      />
    </Link>
  );
};

export default Logo;
