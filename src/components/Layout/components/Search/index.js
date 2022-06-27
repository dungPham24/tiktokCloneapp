import React, { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { WrapperPopper } from 'components/Popper';
import AccountItem from 'components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';
import { SearchIcon } from 'components/Icons';
import useDebounce from 'components/hooks/useDebounce';
import { search } from 'apiServices/searchSevices';

const SearchHeader = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loadingResult, setLoadingResult] = useState(false);

    const refInput = useRef();
    const debounce = useDebounce(searchValue, 500);

    const onClickInput = () => {
        setSearchValue('');
        setSearchResult([]);
        refInput.current.focus();
    };

    const onClickResult = () => {
        setShowResult(false);
    };

    const onChangeInput = (e) => {
        if (e.target.value.startsWith(' ')) {
            return;
        } else {
            setSearchValue(e.target.value);
        }
    };
    useEffect(() => {
        if (!debounce?.trim()) {
            return;
        }
        const fetchApi = async () => {
            setLoadingResult(true);
            const result = await search(debounce);
            setSearchResult(result.data);
            setLoadingResult(false);
        };
        fetchApi();
    }, [debounce]);

    return (
        <SearchHeaderCss className="search">
            <HeadlessTippy
                placement="bottom"
                interactive={true}
                visible={showResult && searchResult?.length > 0}
                render={(attrs) => (
                    <div className="search-result" tabIndex="-1" {...attrs}>
                        <WrapperPopper>
                            <h4 className="search-label">Account</h4>
                            {searchResult?.map((item) => (
                                <AccountItem key={item.id} data={item} />
                            ))}
                        </WrapperPopper>
                    </div>
                )}
                onClickOutside={onClickResult}
            >
                <input
                    ref={refInput}
                    value={searchValue}
                    onChange={onChangeInput}
                    type="text"
                    placeholder="Search account and videos"
                    spellCheck={false}
                    onFocus={() => setShowResult(true)}
                />
            </HeadlessTippy>
            {!!searchValue && !loadingResult && (
                <button onClick={onClickInput} className="clear">
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            )}
            {loadingResult && (
                <button className="loading">
                    <FontAwesomeIcon icon={faSpinner} />
                </button>
            )}

            <button className="search-btn">
                <SearchIcon />
            </button>
        </SearchHeaderCss>
    );
};

export default SearchHeader;

const height = {
    heightSearch: '46px',
    heightInput: '9px',
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const SearchHeaderCss = styled.div`
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
    .search-result {
        width: 365px;
        padding-left: 16px;
    }
    .search-label {
        color: rgba(22, 24, 35, 0.5);
        font-size: 1.4rem;
        padding-left: 10px;
        font-weight: 600;
    }
    .loading {
        animation: ${rotate} 2s linear infinite;
        background-color: transparent;
    }
    .clear {
        color: #828282;
        background-color: transparent;
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
`;
