import { useControls } from "leva";
import Hiker from "../components/Hiker";
import Chest from "../components/Chest";
import Flag from "../components/Flag";
import PostLantern from "../components/PostLantern";

import MountainRange from "../components/MountainRange";

const Summit = () => {
  return (
    <group position={[-6, 54, -155]}>
      <MountainRange />

      <Flag position={[6.2, 24, 16.1]} rotation={[0, 0, -0.2]} scale={2} />

      <Hiker position={[2, 23.7, 14.7]} rotation={[0, 2.4, -0.245]} scale={5} />
    </group>
  );
};

export default Summit;
