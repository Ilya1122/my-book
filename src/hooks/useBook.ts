import { useContext } from 'react';

import {
  LOCAL_STORAGE_BOOK_KEY,
  BookContext,
} from '../context/BookContext/BookContext';

interface UseBookResult {
  setNewPage: (value: number) => void;
  page: number;
}

export function useBook(): UseBookResult {
  const { page, setPage } = useContext(BookContext);

  const setNewPage = (page: number) => {
    setPage?.(page);

    localStorage.setItem(LOCAL_STORAGE_BOOK_KEY, page.toString());
  };

  return {
    page,
    setNewPage,
  };
}
