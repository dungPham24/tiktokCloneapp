import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from 'routes';
import { Fragment } from 'react';
import { DefaultLayout } from 'components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Layout>{route.element}</Layout>}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
