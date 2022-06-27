import React, { useEffect, useState } from 'react';
import { image } from 'assets/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCocktail,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from 'components/Button';
import Menu from 'components/Popper/Menu';
import img from 'assets/image/download.png';
import ImageCustom from 'components/ImageCustom';
import { InboxIcon, MessengerIcon, UploadIcon } from 'components/Icons';
import SearchHeader from '../Search';
import { Link } from 'react-router-dom';

const MENU_ICON = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'english',
        children: {
            title: 'language',
            data: [
                {
                    code: 'en',
                    title: ' English',
                },
                {
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const Header = () => {
    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCocktail} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/Settings',
        },
        ...MENU_ICON,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Logout',
            to: '/Logout',
        },
    ];
    return (
        <Headers>
            <div className="inner">
                <Link className="logo" to="/">
                    <img alt="" src={image.logo} />
                </Link>
                <SearchHeader />
                <div className="action">
                    {currentUser ? (
                        <>
                            <Tippy placement="bottom" content="upload video">
                                <button className="action-btn">
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" content="messenger">
                                <button className="action-btn">
                                    <MessengerIcon />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" content="inbox">
                                <button className="action-btn">
                                    <InboxIcon />
                                    <span className="badge">12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu item={currentUser ? userMenu : MENU_ICON}>
                        {currentUser ? (
                            <ImageCustom
                                alt="avatar"
                                src={img}
                                className="user-avatar"
                            />
                        ) : (
                            <button className="more-btn">
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </Headers>
    );
};

export default Header;

const Headers = styled.header`
    width: 100%;
    height: 60px;
    box-shadow: 0px 1px 1px rgb(0 0 0 /12%);
    display: flex;
    align-items: center;
    justify-content: center;
    .inner {
        height: 100%;
        width: 1150px;
        padding: 0px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo {
        display: flex;
        align-items: center;
        height: 100%;
        overflow: hidden;
        width: 40px;
    }

    //chuyeern dodong mau icon btn
    input:not(:placeholder-shown) ~ .search-btn {
        color: #fff;
    }
    .more-btn {
        font-size: 2rem;
        margin-left: 28px;
        background-color: transparent;
        padding: 4px 8px;
        cursor: pointer;
    }
    .action {
        display: flex;
        align-items: center;
        justify-content: center;
        .action-btn {
            position: relative;
            color: #161823;
            background-color: transparent;
            display: flex;
        }
        .user-avatar {
            width: 32px;
            height: 32px;
            object-fit: cover;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
        }
        .badge {
            position: absolute;
            top: -7px;
            right: 0px;
            padding: 0px 6px;
            height: 2rem;
            line-height: 2rem;
            border-radius: 10px;
            font-size: 1.4rem;
            font-weight: 600;
            color: #fff;
            background-color: #fe2c55;
        }
    }
`;
