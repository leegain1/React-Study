import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_KEY = 'b3d9fa43e80943ab90658a18b6969684';

const Articles = () => {
    const { category } = useParams();
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const queryCategory = category && category !== 'all' ? `&category=${category}` : '';
                // country=kr 부분 제거함
                const url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}${queryCategory}`;
                console.log('요청 URL:', url);
                const response = await axios.get(url);
                console.log('API 응답 데이터:', response.data);
                setArticles(response.data.articles);
            } catch (error) {
                console.error('뉴스 API 에러:', error);
            }
        };

        fetchNews();
    }, [category]);

    return (
        <div>
            {articles.length === 0 ? (
                <p>뉴스가 없습니다.</p>
            ) : (
                <ol style={{ paddingLeft: '1.5rem' }}>
                    {articles.map((a, idx) => (
                        <li
                            key={idx}
                            style={{
                                marginBottom: '1rem',
                                cursor: 'pointer',
                                paddingBottom: '0.8rem',
                                borderBottom: idx !== articles.length - 1 ? '1px solid #ccc' : 'none',
                            }}
                            onClick={() => navigate(`/article/${idx}`, { state: { article: a } })}
                        >
                            <h3 style={{ margin: '0 0 0.3rem 0' }}>{a.title}</h3>
                            <p style={{ margin: 0, color: 'gray' }}>{a.description}</p>
                        </li>
                    ))}
                </ol>


            )}
        </div>
    );

};

export default Articles;
