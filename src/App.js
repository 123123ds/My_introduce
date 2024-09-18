import React, { useState } from 'react';
import Card from './Card';
import './App.css';

function App() {
  const [visible, setVisible] = useState(true);
  const [slideOut, setSlideOut] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const [background, setBackground] = useState('');
  const [showBackButton, setShowBackButton] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // 클릭한 카드의 인덱스

  const handleCardClick = (index) => {
    if (index === 0) { // 첫 번째 카드만 애니메이션 적용
      setSelectedCard(index);
      setSlideOut(true); // 카드 슬라이드 아웃 시작
      setTimeout(() => {
        setVisible(false); // 카드 컨테이너 숨김
        setBackground('new-background'); // 새로운 배경 설정
        setShowBackButton(true); // 돌아가기 버튼 표시
      }, 500); // 애니메이션 지속 시간과 일치
    }
  };

  const handleBackButtonClick = () => {
    setVisible(true); // 카드 컨테이너 다시 보이기
    setSlideIn(true); // 카드 슬라이드 인 시작
    setBackground(''); // 배경 원래대로 돌리기
    setShowBackButton(false); // 돌아가기 버튼 숨기기

    setTimeout(() => {
      setSlideOut(false); // 슬라이드 아웃 상태 초기화
      setSlideIn(false); // 슬라이드 인 상태 초기화
      setSelectedCard(null); // 선택된 카드 초기화
    }, 500); // 애니메이션 지속 시간과 일치
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
        <div className={`card-container ${slideOut ? 'slide-out' : slideIn ? 'slide-in' : ''}`}>
          <Card
            title="카드 1"
            content="이것은 카드 1의 내용입니다."
            imageUrl="https://via.placeholder.com/300"
            onClick={() => handleCardClick(0)} // 첫 번째 카드 클릭 시
          />
          <Card
            title="카드 2"
            content="이것은 카드 2의 내용입니다."
            imageUrl="https://via.placeholder.com/300"
            onClick={() => handleCardClick(1)} // 두 번째 카드 클릭 시
          />
          <Card
            title="카드 3"
            content="이것은 카드 3의 내용입니다."
            imageUrl="https://via.placeholder.com/300"
            onClick={() => handleCardClick(2)} // 세 번째 카드 클릭 시
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
