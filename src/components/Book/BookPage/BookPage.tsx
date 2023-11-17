import { forwardRef } from 'react';

import { IPage } from '../../../interface/page';
import BookPageContent from '../BookPageContent';

import './index.scss';

interface BookPageProps {
  number: number;
  page: IPage;
}

const BookPage = forwardRef(({ number, page }: BookPageProps, ref: any) => {
  const positionPage = number % 2 === 0 ? 'demoPageLeft' : 'demoPageRight';

  return (
    <div className={positionPage} ref={ref} data-density="hard">
      <BookPageContent {...page} />
    </div>
  );
});

export default BookPage;
