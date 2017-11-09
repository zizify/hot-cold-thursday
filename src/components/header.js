import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    return (
        <header>
            <TopNav reset={props.reset} />
            {/* <InfoModal /> */}
            <h1>HOT or COLD</h1>
        </header>
    );
};
