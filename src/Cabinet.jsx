import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import useStore from "./store";

const Cabinet = ({ id, position, color }) => {
  const meshRef = useRef();
  const { moveCabinet } = useStore();

  const bind = useDrag(({ offset: [x, y] }) => {
    moveCabinet(id, [x / 50, 0, y / 50]);
  });

  return (
    <mesh {...bind()} ref={meshRef} position={position} castShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Cabinet;