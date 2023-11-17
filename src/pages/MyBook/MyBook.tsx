import { FC } from 'react';

import CoverImage from '../../assets/image/wrapperBook.png';
import Book from '../../components/Book';
import { pages } from '../../constants/pages';
import BookContextProvider from '../../context/BookContext/BookContextProvider';

const MyBook: FC = () => (
  <BookContextProvider>
    <Book imgCover={CoverImage} pages={pages} />
  </BookContextProvider>
);

export default MyBook;
