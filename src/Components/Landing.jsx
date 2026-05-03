import LocomotiveScroll from 'locomotive-scroll';
import LaserFlow from './LaserFlow';
import { useRef } from 'react';
{/* <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
  <LaserFlow />
</div> */}

export default function Landing() {
  const scroll = new LocomotiveScroll();

  const revealImgRef = useRef(null);

  return (
    <div
      style={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        // backgroundColor: '#120F17'
        backgroundColor: '#faf2e9'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y + rect.height * 0}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0}
        color="#d7afff"
        // color="#CF9EFF"
        horizontalSizing={0}
        verticalSizing={0}
        wispDensity={1}
        wispSpeed={30}
        wispIntensity={2}
        flowSpeed={0.65}
        flowStrength={0.25}
        fogIntensity={0.45}
        fogScale={0}
        fogFallSpeed={3}
        decay={0}
        falloffStart={1.2}
      />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        // transform: 'translateX(-50%)',
        backgroundColor: '#faf2e980',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '2px solid #e4e4e7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        fontSize: '2rem',
        zIndex: 6
      }}
        data-scroll data-scroll-speed="-0.2"
        className='flex flex-row text-center md:w-[86%] h-[60%] w-full -translate-x-1/2'>
        <div className='md:max-w-1/2 w-full'>
          <p className='leading-7'>Frontend Engineer building motion-first interfaces & interactive systems.</p>
          <p className='text-sm tracking-tight'>Web · Animation · iOS / iPadOS Dev Crossover</p>
        </div>
      </div>

      <img
        ref={revealImgRef}
        src="/images/landingInfo.png"
        alt="Reveal effect"
        style={{
          position: 'absolute',
          width: '100%',
          top: '0',
          zIndex: 5,
          mixBlendMode: 'darken',
          opacity: 0.3,
          pointerEvents: 'none',
          '--mx': '-9999px',
          '--my': '-9999px',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        }}
        horizontalSizing={0.5}
        verticalSizing={2}
        wispDensity={1}
        wispSpeed={15}
        wispIntensity={5}
        flowSpeed={0.35}
        flowStrength={0.25}
        fogIntensity={0.45}
        fogScale={0.3}
        fogFallSpeed={0.6}
        decay={1.1}
        falloffStart={1.2}
      />

    </div>
  );
}