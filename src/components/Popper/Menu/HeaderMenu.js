import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const HeaderMenu = ({ title, onBack }) => {
    return (
        <Header>
            <button onClick={onBack} className="back-btn">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className="header-title">{title}</h4>
        </Header>
    );
};

export default HeaderMenu;
const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: -8px;
    height: 50px;
    .header-title {
        flex: 1;
    }
    .back-btn {
        width: 50px;
        background-color: transparent;
    }
`;
