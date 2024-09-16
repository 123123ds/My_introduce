import logo from './logo.svg';
import Card from './Card';
import './App.css';

function App() {
  return (
  <body>
    <div className='MainName'>
      <a>프론트엔드 자기소개서
      </a>
      </div>
    <nav>
      <ul>
        <li>나의 소개</li>
      </ul>
    </nav>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card 
                title="멋진 카드" 
                content="이것은 카드의 내용입니다." 
                imageUrl="https://via.placeholder.com/300"
            />
        </div>
  </body>
  );
}

export default App;
