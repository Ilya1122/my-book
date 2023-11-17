import { FC, memo } from 'react';

import { ReactComponent as ArrowLeft } from '../../../assets/image/arroLeftBtn.svg';
import { ReactComponent as ArrowRight } from '../../../assets/image/arrowRightBtn.svg';
import { useBook } from '../../../hooks/useBook';

import './index.scss';

interface BookFooterButtonProps {
  onNextPage: () => void;
  onPrevPage: () => void;
}

const BookFooterButton: FC<BookFooterButtonProps> = ({
  onNextPage,
  onPrevPage,
}) => {
  const { page } = useBook();

  return (
    <div className={`footerButton ${page && 'activeFooter'}`}>
      {page && (
        <>
          <button onClick={onPrevPage} className="button buttonPrev">
            <ArrowLeft />
          </button>

          <button onClick={onNextPage} className="button buttonNext">
            <ArrowRight />
          </button>
        </>
      )}
    </div>
  );
};

export default memo(BookFooterButton);
