import React from 'react';
import styled from 'styled-components';

const WrapperPopper = ({ children }) => {
    return <Wrappers>{children}</Wrappers>;
};

export default WrapperPopper;

const Wrappers = styled.div`
    width: 100%;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 12%) 0px 2px 12px;
    border-radius: 8px;
    max-height: min((100vh, 96px) - 60px, 734px);
    min-height: 100px;
    padding-top: 8px;
`;
