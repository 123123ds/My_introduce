import React, { useState } from 'react';
import Card from './Card';
import BicycleAnimation from './BicycleAnimation'; // 추가된 부분
import './App.css';

function App() {
  const [visible, setVisible] = useState(true);
  const [slideOut, setSlideOut] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const [background, setBackground] = useState('');
  const [showBackButton, setShowBackButton] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // 클릭한 카드의 인덱스

  const handleCardClick = (index) => {
    setSelectedCard(index);
    setSlideOut(true); // 카드 슬라이드 아웃 시작

    setTimeout(() => {
      setVisible(false); // 카드 컨테이너 숨김

      // 카드 인덱스에 따라 배경 설정
      if (index === 0) {
        setBackground('new-background-1'); // 첫 번째 카드 배경
      } else if (index === 1) {
        setBackground('new-background-2'); // 두 번째 카드 배경
      } else if (index === 2) {
        setBackground('new-background-3'); // 세 번째 카드 배경
      }

      setShowBackButton(true); // 돌아가기 버튼 표시
    }, 500); // 애니메이션 지속 시간과 일치
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
    <main className='Main'>
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
        {background === 'new-background-1' && (
          <div className="additional-content">
            <h2>안녕하세요 프론트엔드 개발자가 되고 싶은 윤여원입니다.</h2>
            <p>여기에 추가적인 내용을 작성할 수 있습니다.</p>
            <ul className='background1Ul'>
              윤여원이란 사람이란?
              <li>1.</li>
              <li>2.</li>
              <li>3.</li>
              <li>4.</li>
              <li>5.</li>
            </ul>
          </div>
        )}
      </div>
      {/* 자전거 애니메이션 추가: main 안으로 이동 */}
      <BicycleAnimation />
    </main>
  );
}

export default App;

