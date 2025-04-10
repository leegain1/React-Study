import React, { useState } from 'react';
import './Introduce.css';

function Introduce({ name, age, hobby }) {
    const myFood = ['봉골레파스타', '불닭볶음면', '치킨', '비빔냉면', '학식'];
    const [food, setFood] = useState(0); 

    const foodChange = () => {
        
        setFood((idx) => (idx + 1) % myFood.length);
    };

    return (
        <body>
        <div className="introduce-box">
            <p><b>이름 : {name}</b></p>
            <p>나이 : {age}살</p>
            <p>취미 : {hobby}</p>
            <p>좋아하는 음식 : {myFood[food]}</p>
            <button onClick={foodChange}>음식 바꾸기</button>
        </div>
        </body>

    );
}

Introduce.defaultProps = {
    name: '이름없음',
    age: '나이모름',
    hobby: '취미모름'
};

export default Introduce;
