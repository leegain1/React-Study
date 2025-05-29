import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Articles />} />
                <Route path="category/:category" element={<Articles />} />
                <Route path="article/:id" element={<Article />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
