import React, { useEffect, useState } from 'react';
import { image } from 'assets/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import AccountItem from 'components/AccountItem';
import { WrapperPopper } from 'components/Popper';
import Button from 'components/Button';

const Header = () => {
    const [input, setInput] = useState('');
    const [clear, setClear] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        if (input.length > 0) {
            setClear(true);
        } else {
            setClear(false);
        }
    }, [input]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, [input]);

    return (
        <Headers>
            <div className="inner">
                <img className="logo" alt="" src={image.logo} />
                <div className="search">
                    <Tippy
                        interactive={true}
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div
                                className="search-result"
                                tabIndex="-1"
                                {...attrs}
                            >
                                <WrapperPopper>
                                    <h4 className="search-label">Account</h4>
                                    <AccountItem />
                                </WrapperPopper>
                            </div>
                        )}
                    >
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            placeholder="Search account and videos"
                            spellCheck={false}
                        />
                    </Tippy>
                    {clear && (
                        <button onClick={() => setInput('')} className="clear">
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    <FontAwesomeIcon className="loading" icon={faSpinner} />

                    <button className="search-btn">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className="action">
                    <Button text>upload</Button>
                    <Button primary>Login</Button>
                </div>
            </div>
        </Headers>
    );
};

export default Header;

const height = {
    heightSearch: '46px',
    heightInput: '9px',
};

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
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo {
        display: flex;
        align-items: center;
        height: 100%;
        overflow: hidden;
    }
    .search {
        position: relative;
        display: flex;
        height: ${height.heightSearch};
        width: 365px;
        padding-left: 16px;
        background-color: rgba(22, 24, 35, 0.06);
        border-radius: 30px;
        input {
            color: #828282;
            height: 100%;
            font-size: 1.6rem;
            border: none;
            outline: none;
            background-color: transparent;
            flex: 1;
        }
        &::after {
            content: '';
            position: absolute;
            height: 28px;
            width: 1px;
            height: calc(${height.heightSearch} - ${height.heightInput} * 2);
            top: ${height.heightInput};
            background-color: rgba(22, 24, 35, 0.12);
            right: 48px;
        }
        &:focus-within {
            border: 1px solid rgba(22, 24, 35, 0.02);
        }
    }
    .search-result {
        width: 365px;
        padding-left: 16px;
    }
    .search-btn {
        width: 46px;
        height: 100%;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        font-size: 1.8rem;
        color: #ccc;
        background-color: rgba(22, 24, 35, 0.06);
        &:hover {
            background-color: rgba(22, 24, 35, 0.1);
            cursor: pointer;
        }
    }
    .clear,
    .loading {
        position: absolute;
        right: 60px;
        top: 50%;
        transform: translateY(-50%);
        color: #828282;
        background-color: transparent;
    }
    .search-label {
        color: rgba(22, 24, 35, 0.5);
        font-size: 1.4rem;
        padding-left: 10px;
        font-weight: 600;
    }
    //chuyeern dodong mau icon btn
    input:not(:placeholder-shown) ~ .search-btn {
        color: #fff;
    }
`;
