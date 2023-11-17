import { FC } from 'react';

import Layout from './components/Layout';
import { MyBook } from './pages/MayBook/MayBook.async';

const App: FC = () => (
  <Layout>
    <MyBook />
  </Layout>
);

export default App;
