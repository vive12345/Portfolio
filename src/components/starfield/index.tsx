// src/components/starfield/index.tsx
import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, type ThreeElements } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import type { Points as ThreePoints } from 'three';

const StarParticles = (props: ThreeElements['points']) => {
  const ref = useRef<ThreePoints | null>(null);

  // Create a sphere of randomly distributed points
  const [sphere] = useState<Float32Array>(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
  );

  // Rotate the star field on each frame
  useFrame((_state, delta) => {
    if (!ref.current) {
      return;
    }
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#8a85ff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Starfield = () => {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarParticles />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Starfield;
