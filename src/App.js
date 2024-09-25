import React, { useState, useRef,useEffect } from 'react';
import Slider from 'react-slick'; // Slick import
import Card from './Card';
import BicycleAnimation from './BicycleAnimation';
import './App.css';

function App() {
  const [visible, setVisible] = useState(true);
  const [slideOut, setSlideOut] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const [background, setBackground] = useState('');
  const [showBackButton, setShowBackButton] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [skyClass, setSkyClass] = useState(''); // 하늘 클래스 상태 추가
  const [skyColor, setSkyColor] = useState(''); // 하늘 색상 상태 추가
  // 슬라이더 참조 생성
  const sliderRef = useRef(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
    setSlideOut(true); // 카드 슬라이드 아웃 시작
    setSkyClass('hide'); // 하늘 숨기기 애니메이션 시작

    setTimeout(() => {
      setVisible(false); // 카드 컨테이너 숨김

      // 카드 인덱스에 따라 배경 설정
      if (index === 0) {
        setBackground('new-background-1'); 
      } else if (index === 1) {
        setBackground('new-background-2'); 
      } else if (index === 2) {
        setBackground('new-background-3'); 
      }

      setShowBackButton(true); // 돌아가기 버튼 표시
    }, 500);
  };


  useEffect(() => {
    const updateSkyColor = () => {
      const hour = new Date().getHours();

      if (hour >= 6 && hour < 12) {
        setSkyColor('linear-gradient(to bottom, #87CEEB, #B0E0E6)'); // 아침
      } else if (hour >= 12 && hour < 18) {
        setSkyColor('linear-gradient(to bottom, #87CEEB, #B0E0E6)'); // 낮
      } else if (hour >= 18 && hour < 21) {
        setSkyColor('linear-gradient(to bottom, #FF4500, #FF6347)'); // 저녁
      } else {
        setSkyColor('linear-gradient(to bottom, #1E1E1E, #4B0082)'); // 밤
      }
    };

    updateSkyColor();
    const interval = setInterval(updateSkyColor, 3600000); // 매시간 색상 업데이트

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);

  const handleBackButtonClick = () => {
    setVisible(true); 
    setSlideIn(true); 
    setSkyClass(''); // 하늘 클래스 초기화
    setBackground(''); 
    setShowBackButton(false); 

    setTimeout(() => {
      setSlideOut(false); 
      setSlideIn(false); 
      setSelectedCard(null); 
    }, 500);
  };

  // 슬라이드 설정
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 한 슬라이드에 3개 카드 표시
    slidesToScroll: 1,
    autoplay: true, // 자동 슬라이드
    autoplaySpeed: 4000, // 2초마다 슬라이드
    pauseOnHover: true, // 마우스 호버 시 일시 정지
  };

  return (
    <main className='Main'>
      <div className={`app-container ${background}`}>
      <img className="background-image" />
        <nav className='MainName'>
          <a>프론트엔드 자기소개서</a>
          <ul>
            <li>나의 소개</li>
          </ul>
        </nav>

        <div className="sky" style={{ background: skyColor }}>
          <div className="sun"></div>
          <img src="/구름.jpeg" alt="구름" className="cloud" /> {/* 구름 이미지 추가 */}
        </div>

        {/* 카드 슬라이더 추가 */}
        {visible && (
          <div>
            <Slider 
              ref={sliderRef} 
              {...settings} 
              className={`card-slider ${slideOut ? 'slide-out' : slideIn ? 'slide-in' : ''}`}
            >
              <div>
                <Card
                  title="카드 1"
                  content="이것은 카드 1의 내용입니다."
                  imageUrl="https://via.placeholder.com/300"
                  onClick={() => handleCardClick(0)} // 첫 번째 카드 클릭 시
                />
              </div>
              <div>
                <Card
                  title="카드 2"
                  content="이것은 카드 2의 내용입니다."
                  imageUrl="https://via.placeholder.com/300"
                  onClick={() => handleCardClick(1)} // 두 번째 카드 클릭 시
                />
              </div>
              <div>
                <Card
                  title="카드 3"
                  content="이것은 카드 3의 내용입니다."
                  imageUrl="https://via.placeholder.com/300"
                  onClick={() => handleCardClick(2)} // 세 번째 카드 클릭 시
                />
              </div>
              <div>
                <Card
                  title="카드 4"
                  content="이것은 카드 4의 내용입니다."
                  imageUrl="https://via.placeholder.com/300"
                  onClick={() => handleCardClick(3)} // 네 번째 카드 클릭 시
                />
              </div>
              <div>
                <Card
                  title="카드 5"
                  content="이것은 카드 5의 내용입니다."
                  imageUrl="https://via.placeholder.com/300"
                  onClick={() => handleCardClick(4)} // 다섯 번째 카드 클릭 시
                />
              </div>
              <div>
                <Card
                  title="카드 6"
                  content="이것은 카드 6의 내용입니다."
                  imageUrl="https://via.placeholder.com/300"
                  onClick={() => handleCardClick(5)} // 여섯 번째 카드 클릭 시
                />
              </div>
            </Slider>

            {/* 좌우 이동 버튼 추가 */}
            <button onClick={() => sliderRef.current.slickPrev()} className="slick-prev">이전</button>
            <button onClick={() => sliderRef.current.slickNext()} className="slick-next">다음</button>
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
      <BicycleAnimation />
    </main>
  );
}

export default App;
