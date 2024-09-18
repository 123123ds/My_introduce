import React, { useState } from 'react';
import Card from './Card';
import './App.css';

function App() {
  const [visible, setVisible] = useState(true);
  const [slideOut, setSlideOut] = useState(false);
  const [background, setBackground] = useState(''); // 배경 상태 추가
  const [showBackButton, setShowBackButton] = useState(false); // 돌아가기 버튼 상태 추가

  const handleCardClick = () => {
    setSlideOut(true); // 클릭 시 애니메이션 시작
    setTimeout(() => {
      setVisible(false); // 애니메이션 후 카드 컨테이너를 숨김
      setBackground('new-background'); // 새로운 배경 설정
      setShowBackButton(true); // 돌아가기 버튼 표시
    }, 500); // 애니메이션 지속 시간과 일치시킴
  };

  const handleBackButtonClick = () => {
    setSlideOut(false); // 카드 애니메이션 되돌리기
    setVisible(true); // 카드 컨테이너 다시 보이기
    setBackground(''); // 배경 원래대로 돌리기
    setShowBackButton(false); // 돌아가기 버튼 숨기기
  };

  return (
    <div className={`app-container ${background}`}>
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
      {showBackButton && (
        <button onClick={handleBackButtonClick} className="back-button">
          돌아가기
        </button>
      )}
    </div>
  );
}

export default App;
