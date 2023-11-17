import { forwardRef } from 'react';

import './index.scss';

interface PageCoverProps {
  imgCover: string;
}

const BookPageCover = forwardRef(({ imgCover }: PageCoverProps, ref: any) => {
  return (
    <div className="pageCover" ref={ref} data-density="hard">
      <div className="coverContent">
        <img src={imgCover} alt="cover" className="coverImage" />
      </div>
    </div>
  );
});

export default BookPageCover;
