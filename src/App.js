import React, { useState } from 'react';
import Card from './Card';
import './App.css';

function App() {
  const [visible, setVisible] = useState(true);
  const [slideOut, setSlideOut] = useState(false); // 애니메이션 상태 추가

  const handleCardClick = () => {
    setSlideOut(true); // 클릭 시 애니메이션 시작
    setTimeout(() => {
      setVisible(false); // 애니메이션 후 카드 컨테이너를 숨김
    }, 500); // 애니메이션 지속 시간과 일치시킴
  };

  return (
    <div>
      <div className='MainName'>
        <a>프론트엔드 자기소개서</a>
      </div>
      <nav>
        <ul>
          <li>나의 소개</li>
        </ul>
      </nav>
      {visible && (
        <div className={`card-container ${slideOut ? 'slide-out' : ''}`}>
          <Card 
            title="카드 1" 
            content="이것은 카드 1의 내용입니다." 
            imageUrl="https://via.placeholder.com/300"
            onClick={handleCardClick} // 클릭 이벤트 추가
          />
          <Card 
            title="카드 2" 
            content="이것은 카드 2의 내용입니다." 
            imageUrl="https://via.placeholder.com/300"
            onClick={handleCardClick} // 클릭 이벤트 추가
          />
          <Card 
            title="카드 3" 
            content="이것은 카드 3의 내용입니다." 
            imageUrl="https://via.placeholder.com/300"
            onClick={handleCardClick} // 클릭 이벤트 추가
          />
        </div>
      )}
    </div>
  );
}

export default App;
