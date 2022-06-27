import Button from 'components/Button';
import React from 'react';
import styled from 'styled-components';

const MenuItem = ({ data, onClick }) => {
    return (
        <MenuItemcustom>
            <Button leftIcon={data.icon} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
        </MenuItemcustom>
    );
};

export default MenuItem;

const MenuItemcustom = styled.div`
    margin-left: 0px;
    line-height: 1.8rem;
`;
