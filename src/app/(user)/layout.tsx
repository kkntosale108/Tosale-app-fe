import { FooterSection } from '../../Component/LandingPage/footerSection';
import Navbar from '../../Component/LandingPage/landing-page-navbar';
import type { PropsWithChildren } from 'react';

function Layout(props: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      {props.children}
      <Navbar />
      <div className='bottom-0'>
      <FooterSection />
      </div>
    </div>
  );
}

export default Layout;