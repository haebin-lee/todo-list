import React, { Component } from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/*
  페이지 템플리승ㄹ 위한 컴포넌트 
  페이지 틀, 타이틀/콘텐츠 등 속성이 설정 
 */

const PageTemplate = ({children}) =>{
    return (
        <div className={cx('page-template')}>
            <h1>일정관리</h1>
            <div className={cx('content')}>     
                {children}
            </div>
        </div>
    )
}
export default PageTemplate;