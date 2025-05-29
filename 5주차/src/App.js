import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Article from './pages/Article';
import Articles from './pages/Articles';


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Articles />} />
                <Route path="category/:category" element={<Articles />} />
                <Route path="article/:id" element={<Article />} />
            </Route>

        </Routes>
    );
};

export default App;
