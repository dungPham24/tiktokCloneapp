import Home from 'pages/Home';
import Following from 'pages/Following';
import Profile from 'pages/Profile';
import UploadFile from 'pages/Upload';
import { HeaderOnly } from 'components/Layout';
import Search from 'pages/Search';

const publicRoutes = [
    { path: '/', element: <Home /> },
    { path: '/following', element: <Following /> },
    { path: '/profile', element: <Profile /> },
    { path: '/upload', element: <UploadFile />, layout: HeaderOnly },
    { path: '/search', element: <Search />, layout: null },
];

//router phai dang nhap moi dc vao
const privateRoutes = [];

export { publicRoutes, privateRoutes };
