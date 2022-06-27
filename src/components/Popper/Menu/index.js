import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import styled from 'styled-components';
import WrapperPopper from '../Wrapper';
import HeaderMenu from './HeaderMenu';
import MenuItem from './MenuItem';

const Menu = ({ children, item = [] }) => {
    //luoon lay dc phan tu o cuoi
    const [history, setHistory] = useState([{ data: item }]);
    const current = history[history.length - 1];

    const arr = [
        {
            id: 1,
            name: '2',
        },
        {
            id: 2,
            name: 3,
        },
    ];

    
    const renderItem = () => {
        return current?.data.map((items, index) => {
            const isParent = !!items?.children;

            return (
                <MenuItem
                    key={index}
                    data={items}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, items.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <MenuCommon>
            <Tippy
                visible
                delay={[0, 700]}
                interactive
                placement="bottom-end"
                render={(attrs) => (
                    <div className="contents" tabIndex="-1" {...attrs}>
                        <WrapperPopper>
                            {history.length > 1 && (
                                <HeaderMenu
                                    title="Language"
                                    onBack={() => {
                                        return setHistory((pre) =>
                                            pre.slice(0, history.length - 1)
                                        );
                                    }}
                                />
                            )}
                            {renderItem()}
                        </WrapperPopper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </MenuCommon>
    );
};

export default Menu;

const MenuCommon = styled.div`
    .contents {
        width: 224px;
        padding-top: 8px;
    }
`;
