import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import useStore from "./store";
import Cabinet from "./Cabinet";
import Worktop from "./Worktop";
import Island from "./Island";

function App() {
  const cabinets = useStore((state) => state.cabinets);
  const worktops = useStore((state) => state.worktops);
  const islands = useStore((state) => state.islands);

  return (
    <div className="container">
      <h1 className="title">AR Kitchen Customizer</h1>
      <Canvas shadows className="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} castShadow />
        <gridHelper args={[10, 10]} />
        {cabinets.map((cab) => (
          <Cabinet key={cab.id} {...cab} />
        ))}
        {worktops.map((wt) => (
          <Worktop key={wt.id} {...wt} />
        ))}
        {islands.map((island) => (
          <Island key={island.id} {...island} />
        ))}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;