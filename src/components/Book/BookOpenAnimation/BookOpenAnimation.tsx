import { FC } from 'react';

import ArrowLeft from '../../../assets/image/arrowLeft.png';
import Ellipse from '../../../assets/image/elipsse.png';

import './index.scss';

const BookOpenAnimation: FC = () => (
  <div className="containerAnimation">
    <div className="leftCircle">
      <img src={Ellipse} alt="ellipse" />
    </div>

    <div className="rightCircle">
      <img src={ArrowLeft} alt="arrow" />
    </div>
  </div>
);

export default BookOpenAnimation;
