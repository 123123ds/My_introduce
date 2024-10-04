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
      } else if (index === 3) {
        setBackground('new-background-4'); // 배경 4번 추가
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
        setSkyColor('linear-gradient(to bottom, #87CEEB, #B0E0E6)'); // 저녁
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

  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // 0과 1 사이를 토글
  };

  return (
    <main className='Main'>
      <div className={`app-container ${background}`}>

        <nav className='MainName'>
          <a>프론트엔드 자기소개서</a>
          <ul>
            <li>나의 소개</li>
          </ul>
        </nav>

        {/* background가 new-background-1부터 new-background-6일 때 하늘과 구름 숨기기 */}
        {['new-background-1', 'new-background-2', 'new-background-3', 'new-background-4', 'new-background-5', 'new-background-6'].indexOf(background) === -1 && (
        <div className="sky" style={{ background: skyColor }}>
          <img className="background-image" />
          <div className="sun"></div>
          <img className="cloud" />
          <img className="road-image" />
        </div>
      )}


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
            <p>윤여원 프로필</p>
            <ul className='background1Ul'>
              윤여원이란 사람이란?
              <li>학력 : 대구가톨릭대학교(4년)</li>
              <li>전공 : 컴퓨터전공</li>
              <li>성별 : 남</li>
              <li>생년월일 : 1998.01.23</li>
              <li>거주지 : 대구 북구 태전동 현대전원 101동 606호</li>
              <li>개발 직종 : 프론트엔드</li>
              <li>개발 프로젝트 : 알바튠, 넥스트</li>
            </ul>
            <div className='My_img'></div>
          
          </div>
        )}
        {background === 'new-background-2' && (
          <div className="additional-content">
            <h2>사용 가능한 기술 스택들</h2>
            <p>여기에 추가적인 내용을 작성할 수 있습니다.</p>
            <img className="react"/>
            <img className="js"/>
          </div>
        )}
{background === 'new-background-3' && (
   <>
   <div className={`additional-content ${currentIndex === 0 ? 'active' : 'inactive'}`}>
     <h2>나의 프로젝트</h2>
     <p>알바튠</p>
     <p>알바튠이란 </p>
     <p>
       알바튠은 제가 처음으로 만들게 된 프로젝트입니다. 알바튠을 개발하게 된 이유는 웹에 대한 기술들을 익히고 적용할 수 있는 웹을 구현할때 좀 더 좋은 내용을 가진 웹을 구현하자 해서 나온 아이디어입니다.
       <br />
       지금 알바와 관련된 가능 유명한 사업은 알바천국, 알바몬일 것입니다. 이미 독점된 사업이었기에 그들과 다른 서비스를 제공해야 메리트가 있다 
       생각하여 저희는 알바에 도움이 될 수 있는 기능을 탑재하는 것으로 차별성을 두기로 하였습니다.
     </p>
     <button onClick={handleNext}>이곳을 누르면 다음페이지</button>
   </div>

   <div className={`additional-content ${currentIndex === 1 ? 'active' : 'inactive'}`}>
     <h2>나의 프로젝트</h2>
     <p>알바튠</p>
     <p>알바튠 소개 </p>
     <p>알바튠은 일단 리액트를 메인으로 Node Exprees를 서버로 두고 My_sql을 DB를 사용하여 구현한 웹입니다<br></br>
       이렇게 구상한 이유는 웹의 기초라 불리는 리액트를 먼저 익히기 위해 리액트를 기반으로 웹을 구상하였고 서버는 next처럼 자체 서버가 없기에 exprees로 서버를 구현하였습니다.
        </p>

     <button onClick={handleNext}>이곳을 누르면 다음페이지</button>
   </div>

   <div className={`additional-content ${currentIndex === 2 ? 'active' : 'inactive'}`}>
     <h2>나의 프로젝트</h2>
     <p>알바튠</p>
     <p>알바튠 소개 </p>
   

     <button onClick={handleNext}>이곳을 누르면 다음페이지</button>
   </div>
 </>
)}
{background === 'new-background-4' && (
          <div className="additional-content">
            <h2>나의 프로젝트</h2>
            <p>여기에 추가적인 내용을 작성할 수 있습니다.</p>
          </div>
        )}

      </div>

      
      <BicycleAnimation />
    </main>
  );
}

export default App;
