import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
extend({ OrbitControls });

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <Canvas shadows camera={{ position: [4, 0, -12], fov: 35 }}>
        <Stage
          intensity={1.5}
          environment="city"
          shadows={{
            type: "accumulative",
            color: "#d9afd9",
            colorBlend: 2,
            opacity: 2,
          }}
          adjustCamera={0.9}
        >
          <mesh castShadow>
            <meshNormalMaterial />
            <boxGeometry />
          </mesh>
        </Stage>
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
        <gridHelper />
      </Canvas>
    </section>
  );
};

export default Hero;
