import logo from './logo.svg';
import './App.css';
import MagicBento from './MagicBento';
import SplitText from './SplitText';
import TrueFocus from './TrueFocus.jsx';
import Folder from './Folder';
import SplashCursor from './SplasCursor';
import ProfileCard from './ProfileCard';

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

        <div className='harmadik'>
          {/* <TrueFocus
            sentence="Vidd felém az egeret!"
            manualMode={true}
            blurAmount={5}
            borderColor="red"
            animationDuration={0.3}
            pauseBetweenAnimations={1}
          /> */}
        </div>

        <div className='negyedik'>
          <div style={{ height: '600px', position: 'relative', top: '30vh', left: '70vw' }}>
            <Folder
              size={1.5}
              color="#00d8ff"
              className="custom-folder"
              items={[
                { link: "https://example.com/1", content: "" },
                { link: "https://example.com/2", content: "" },
                { link: "https://example.com/3", content: "" },
              ]}
            />
          </div>
        </div>

        <div className='otodik'>
          <SplashCursor />
        </div>

        <div className='hatodik'>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
            <ProfileCard
              name="Személy Neve"
              title="Foglalkozása"
              handle="felhasználónév"
              status="Online"
              contactText="Contact Me"
              avatarUrl=""
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;