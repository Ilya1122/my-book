import { FC, useRef, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';

import BookOpenAnimation from './BookOpenAnimation';
import BookPage from './BookPage';
import BookPageCover from './BookPageCover';
import BookFooterButton from './BookPagination';
import { bookProps } from '../../constants/bookDefaultValues';
import { useBook } from '../../hooks/useBook';
import { IPage } from '../../interface/page';

import './index.scss';

interface BookProps {
  imgCover?: string;
  pages: IPage[];
}

const Book: FC<BookProps> = ({ imgCover, pages }) => {
  const { page, setNewPage } = useBook();
  const book = useRef(null);

  const onFlip = useCallback((data: { data: number }) => {
    setNewPage(data.data);
  }, []);

  const onNextPage = useCallback(() => {
    //@ts-ignore
    book?.current?.pageFlip?.()?.flipNext?.();

    if (pages.length <= page) {
      setNewPage(page + 1);
    }
  }, [page]);

  const onPrevPage = useCallback(() => {
    // @ts-ignore
    book?.current?.pageFlip?.()?.flipPrev?.();

    if (page !== 0) {
      setNewPage(page - 1);
    }
  }, [page]);

  return (
    <div className="containerBook">
      <HTMLFlipBook
        className={`flipBook ${page && 'bookBg'}`}
        startPage={page}
        onFlip={onFlip}
        showCover={!!imgCover}
        ref={book}
        size="fixed"
        {...bookProps}
      >
        {imgCover && <BookPageCover imgCover={imgCover} />}

        {pages.map(page => (
          <BookPage number={page.page} key={page.page} page={page} />
        ))}
      </HTMLFlipBook>

      {!page && <BookOpenAnimation />}

      <BookFooterButton onNextPage={onNextPage} onPrevPage={onPrevPage} />
    </div>
  );
};

export default Book;
