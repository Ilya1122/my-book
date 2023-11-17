import { FC, useMemo, useState, ReactNode } from 'react';

import { BookContext, LOCAL_STORAGE_BOOK_KEY } from './BookContext';

const defaultPage = localStorage.getItem(LOCAL_STORAGE_BOOK_KEY) || 0;

interface BookContextProviderProps {
  children: ReactNode;
}

const BookContextProvider: FC<BookContextProviderProps> = ({ children }) => {
  const [page, setPage] = useState<number>(+defaultPage || 0);

  const defaultProps = useMemo(
    () => ({
      page,
      setPage,
    }),
    [page],
  );

  return (
    <BookContext.Provider value={defaultProps}>{children}</BookContext.Provider>
  );
};

export default BookContextProvider;
