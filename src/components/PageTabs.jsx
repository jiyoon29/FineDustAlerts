import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMapLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as S from '../styles/pageTabs';

function PageTabs() {
  return (
    <div className="inner">
      <S.pageTabs className="page_tab">
        <li>
          <Link to="/">
            <div className="page_tab_img">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <p>내 지역보기</p>
          </Link>
        </li>
        <li>
          <Link to="/all">
            <div className="page_tab_img">
              <FontAwesomeIcon icon={faMapLocationDot} />
            </div>
            <p>전체 시도보기</p>
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <div className="page_tab_img">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>즐겨찾기</p>
          </Link>
        </li>
      </S.pageTabs>
    </div>
  );
}

export default PageTabs;