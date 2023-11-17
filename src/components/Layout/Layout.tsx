import { FC, ReactNode, Suspense } from 'react';

import './index.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <main className="mainLayout">
    <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
  </main>
);

export default Layout;
