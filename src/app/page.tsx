"use client";
import { useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, usePlane, useBox } from "@react-three/cannon";

export default function Home() {
  const [ready, set] = useState(false);
  const [hoveredCube, setHoveredCube] = useState<CubeType>("click a cube");
  useEffect(() => {
    const timeout = setTimeout(() => set(true), 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="relative h-screen bg-white">
      <div className="absolute top-1/4 left-0 w-screen text-center z-10">
        <p className="text-black">{hoveredCube}</p>
      </div>
      <Canvas
        className="h-full"
        dpr={[1, 2]}
        shadows
        camera={{ position: [-5, 5, 5], fov: 50 }}>
        <ambientLight color="white" intensity={3} />
        <directionalLight color="white" intensity={1} position={[5, 5, 5]} />
        <directionalLight color="white" intensity={1} position={[5, 5, 5]} />

        <spotLight
          intensity={1}
          angle={0.25}
          penumbra={0.5}
          position={[10, 10, 5]}
          castShadow
        />
        <Physics>
          <Plane />
          <Cube
            position={[0, 5, 0]}
            setHoveredCube={setHoveredCube}
            type="github"
          />
          <Cube
            position={[0.45, 7, -0.25]}
            setHoveredCube={setHoveredCube}
            type="portfolio"
          />
          {/* <Cube position={[-0.45, 9, 0.25]} setHoveredCube={setHoveredCube} type="blog"/> */}
          {ready && (
            <Cube
              position={[-0.45, 10, 0.25]}
              setHoveredCube={setHoveredCube}
              type="blog"
            />
          )}
        </Physics>
      </Canvas>
    </div>
  );
}
function Plane(props: any) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color="#f0f0f0" />
    </mesh>
  );
}

const links = {
  portfolio: "/portfolio",
  github: "",
  blog: "/posts",
};

type CubeType = "github" | "portfolio" | "blog" | "click a cube";

interface CubeProps {
  position: [x: number, y: number, z: number];
  setHoveredCube: (type: CubeType) => void;
  type: CubeType;
}

function Cube({ position, setHoveredCube, type }: CubeProps) {
  const [hovered, setHovered] = useState(false);
  const [ref] = useBox(() => ({ mass: 1, position }));
  const scale = hovered ? [1.1, 1.1, 1.1] : [1, 1, 1];

  useFrame(() => {
    if (ref.current) {
      ref.current.scale.set(...scale);
    }
  });

  return (
    <mesh
      castShadow
      receiveShadow
      ref={ref}
      onPointerEnter={() => {
        setHovered(true);
        setHoveredCube(type);
      }}
      onPointerLeave={() => setHovered(false)}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
