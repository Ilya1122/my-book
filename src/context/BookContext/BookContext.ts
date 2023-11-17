import { createContext } from 'react';

export interface BookContextProps {
  setPage?: (value: number) => void;
  page: number;
}

export const BookContext = createContext<BookContextProps>({ page: 0 });

export const LOCAL_STORAGE_BOOK_KEY = 'book';
