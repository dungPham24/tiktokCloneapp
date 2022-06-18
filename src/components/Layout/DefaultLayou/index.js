import Header from '../components/Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const DefaultLayout = ({ children }) => {
    return (
        <Container>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </Container>
    );
};

export default DefaultLayout;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .container {
        width: 1150px;
        display: flex;
    }
    .content {
        flex: 3;
    }
`;
