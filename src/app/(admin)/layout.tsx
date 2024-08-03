import type { PropsWithChildren } from 'react';
import Sidebar from '@/Component/admin/sidebar';

function Layout(props: PropsWithChildren) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      {props.children}
    </div>
  );
}

export default Layout;