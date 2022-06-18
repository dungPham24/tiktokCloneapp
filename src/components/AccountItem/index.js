import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import imageCover from 'assets/image/download.png';

const AccountItem = () => {
    return (
        <Wrapper>
            <img className="avatar" src={imageCover} alt="Hoaa" />
            <div className="info">
                <div className="name">
                    <span>nguyen van a</span>
                    <FontAwesomeIcon className="check" icon={faCheckCircle} />
                </div>
                <div className="username"> nguyen van a</div>
            </div>
        </Wrapper>
    );
};

export default AccountItem;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 6px 16px;
    overflow: hidden;
    &:hover {
        background-color: rgba(22, 24, 35, 0.03);
    }
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
    .info {
        flex: 1;
        margin-left: 12px;
    }
    .name {
        font-size: 1.6rem;
        font-weight: 600;
    }
    .check {
        margin-left: 6px;
        color: rgb(32, 213, 326);
    }
    .username {
        font-size: 1.4rem;
        color: rgba(22, 24, 35, 0.5);
    }
`;
