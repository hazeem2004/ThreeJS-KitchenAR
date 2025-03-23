import { useTexture } from "@react-three/drei";

const Worktop = ({ position, texture }) => {
  const worktopTexture = useTexture(texture);

  return (
    <mesh position={position} receiveShadow>
      <boxGeometry args={[4, 0.2, 2]} />
      <meshStandardMaterial map={worktopTexture} />
    </mesh>
  );
};

export default Worktop;