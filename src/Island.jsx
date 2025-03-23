const Island = ({ position, color }) => {
    return (
      <mesh position={position} castShadow>
        <boxGeometry args={[3, 1.5, 2]} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  };
  
  export default Island;