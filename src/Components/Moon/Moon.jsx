import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import moonModel from '../../Assets/moon2.glb';
import './Moon.css';

const MoonModel = ({ isMobile }) => {
  const modelRef = useRef();
  const { scene } = useGLTF(moonModel); // Load GLTF model

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001; // Rotate model
    }
  });

  // Set scale based on mobile or desktop view
  const scale = isMobile ? [0.15, 0.15, 0.15] : [0.25, 0.25, 0.25]; // Smaller for mobile

  return scene ? (
    <primitive
      ref={modelRef}
      object={scene}
      scale={scale} // Use scale based on isMobile
      position={[0, 0, 0]}
    />
  ) : null;
};

const CameraControls = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 0, 5); // Set initial camera position
  }, [camera]);
  return null;
};

function Moon() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="moonmain">
      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={0.15} />
          <directionalLight
            position={[35, -0.1, 2]}
            intensity={4}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            color="white"
          />
          <MoonModel isMobile={isMobile} /> {/* Pass isMobile to MoonModel */}
          <CameraControls />
          {!isMobile && <OrbitControls enableZoom={false} />} {/* Only render OrbitControls on non-mobile */}
        </Canvas>
        <div className="overlay-text top">Hello, this is the </div>
        <div className="overlay-text bottom"> moon!</div>
        <div className="arrow-icon">spin &#10148;</div>
      </div>
    </div>
  );
}

export default Moon;
