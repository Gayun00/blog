"use client";

import { ReactNode, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Edges,
  MeshPortalMaterial,
  CameraControls,
  Environment,
  PivotControls,
} from "@react-three/drei";
import { Group } from "three";
import { useControls } from "leva";

export default function Home() {
  return (
    <main className="h-screen">
      <Canvas shadows camera={{ position: [-3, 0.5, 3] }}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2, 2, 2]} />
          <Edges />
          <Side rotation={[0, 0, 0]} bg="orange" index={0}>
            <torusGeometry args={[0.65, 0.3, 64]} />
          </Side>
          <Side rotation={[0, Math.PI, 0]} bg="lightblue" index={1}>
            <torusKnotGeometry args={[0.55, 0.2, 128, 32]} />
          </Side>
          <Side
            rotation={[0, Math.PI / 2, Math.PI / 2]}
            bg="lightgreen"
            index={2}>
            <boxGeometry args={[1.15, 1.15, 1.15]} />
          </Side>
          <Side
            rotation={[0, Math.PI / 2, -Math.PI / 2]}
            bg="aquamarine"
            index={3}>
            <octahedronGeometry />
          </Side>
          <Side rotation={[0, -Math.PI / 2, 0]} bg="indianred" index={4}>
            <icosahedronGeometry />
          </Side>
          <Side rotation={[0, Math.PI / 2, 0]} bg="hotpink" index={5}>
            <dodecahedronGeometry />
          </Side>
        </mesh>
        <CameraControls makeDefault />
      </Canvas>
    </main>
  );
}

interface SideProps {
  rotation: [x: number, y: number, z: number];
  bg: string;
  children: ReactNode;
  index: number;
}

function Side({
  rotation = [0, 0, 0],
  bg = "#f0f0f0",
  children,
  index,
}: SideProps) {
  const groupRef = useRef<Group>(null);
  const { worldUnits } = useControls({ worldUnits: false });
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta;
      groupRef.current.rotation.y += delta;
    }
  });
  const boxSize: [width: number, height: number, depth: number] = [2, 2, 2];

  return (
    <MeshPortalMaterial worldUnits={worldUnits} attach={`material-${index}`}>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <group ref={groupRef}>
        <mesh castShadow receiveShadow rotation={rotation}>
          <meshStandardMaterial aoMapIntensity={1} color={bg} />{" "}
          <spotLight
            castShadow
            color={bg}
            intensity={2}
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            shadow-normalBias={0.05}
            shadow-bias={0.0001}
          />
        </mesh>
        <mesh castShadow receiveShadow>
          {children}
          <meshLambertMaterial color={bg} />
        </mesh>
      </group>
    </MeshPortalMaterial>
  );
}
