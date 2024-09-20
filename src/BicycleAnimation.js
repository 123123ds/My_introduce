// BicycleAnimation.js
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// 애니메이션 키프레임 정의
const move = keyframes`
  0% { transform: translate3d(-100px, 0, 0); }
  100% { transform: translate3d(100vw, 0, 0); }
`;

const StudentContainer = styled.div`
  position: absolute;
  bottom: 20px; /* 바닥에서 위치 조정 */
  animation: ${move} 50s linear infinite; /* 애니메이션 설정 */
`;

const StudentImage = styled.img`
  width: 400px; /* 이미지 크기를 400px로 조정 */
  height: auto; /* 비율 유지 */
`;

// require.context를 사용하여 이미지 파일을 가져오기
const images = require.context('./bike', false, /\.jpg$/);
const gifFiles = images.keys().map(images);

const BicycleAnimation = () => {
  const [currentGif, setCurrentGif] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGif(prev => (prev + 1) % gifFiles.length); // 인덱스를 순환
    }, 200); // 200ms마다 이미지 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 클리어
  }, []);

  return (
    <StudentContainer>
      <StudentImage src={gifFiles[currentGif]} alt="Racing Green Raleigh" />
    </StudentContainer>
  );
};

export default BicycleAnimation;
