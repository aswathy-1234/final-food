// // src/components/StartPage.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // import './StartPage.css'; // Create this CSS file for styling if needed

// const StartPage = () => {
//   const navigate = useNavigate();

//   const handleStartClick = () => {
//     navigate('/Recipisearch');
//   };

//   return (
//     <div className="start-page">
//       <h1>Welcome to the Recipe Finder</h1>
//       <button onClick={handleStartClick} className="start-button">Start</button>
//     </div>
//   );
// };

// export default StartPage;
// import React from 'react';

// const StartPage = ({ onPageChange }) => {
//   const handleStartClick = () => {
//     onPageChange('search');
//   };

//   return (
//     <div className="start" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
//       <h1>Welcome to Recipe Search</h1>
//       <button onClick={handleStartClick} className="start-button">
//         Start
//       </button>
//     </div>
//   );
// };

// export default StartPage;
import React from 'react';
import './startpage.css';

const StartPage = ({ onPageChange }) => {
  const handleStartClick = () => {
    onPageChange('search');
  };

  const backgroundImageStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${require('./img2.jpg')})`, // changed to './img2.jpg'
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };

  return (
    <div style={backgroundImageStyle}>
      <h1 className="wave-effect">Dish Discovery</h1>
      <button onClick={handleStartClick} className="start-button">
        Start
      </button>
    </div>
  );
};

export default StartPage;