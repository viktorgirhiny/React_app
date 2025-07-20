import logo from './logo.svg';
import './App.css';
import MagicBento from './MagicBento';
import SplitText from './SplitText';

function App() {
  return (
    <div className='App'>
      <div className='section1'>
        <div className='elso'>
          <SplitText
            text="Üdvözöllek nálam!"
            className="split-text"
            delay={120}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.5}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>

        <div className='masodik'>
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableTilt={false}
            enableBorderGlow={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={500}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>
      </div>
    </div>
  );
}

export default App;