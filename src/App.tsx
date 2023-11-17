import { FC } from 'react';

import Layout from './components/Layout';
import { MyBook } from './pages/MyBook/MyBook.async';

const App: FC = () => (
  <Layout>
    <MyBook />
  </Layout>
);

export default App;
