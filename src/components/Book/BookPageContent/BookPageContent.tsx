import { FC, memo } from 'react';

import { IPage } from '../../../interface/page';

import './index.scss';

const BookPageContent: FC<IPage> = ({ page, title, image, description }) => (
  <div className="pageContent">
    {title && <h1 className="pageTitle">{title}</h1>}

    <img className="pageImage" src={image} alt="bg" />

    <p className="pageDescription">{description}</p>

    <div className="pageFooter">{page}</div>
  </div>
);

export default memo(BookPageContent);
