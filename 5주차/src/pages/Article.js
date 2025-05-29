// src/pages/Article.js
import { useLocation } from 'react-router-dom';

const Article = () => {
    const location = useLocation();
    const { article } = location.state || {};

    if (!article) return <div>뉴스 정보를 찾을 수 없습니다.</div>;

    return (
        <div>
            <h2>{article.title}</h2>
            {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} style={{ width: '100%', maxWidth: '600px' }} />
            )}
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
                원문 기사 보기
            </a>
        </div>
    );
};

export default Article;
