import { useThree, useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { Vector3 } from "three";
import { useEffect, useRef } from "react";
import { useKeyboard } from "../hooks/useKeyboard";

const JUMP_VELOCITY = 2.3;

export const Player = () => {
  const actions = useKeyboard();
  console.log(
    "player->actions-> ",
    Object.entries(actions).filter(([k, v]) => v)
  );
  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 1, 0],
  }));

  //velocity
  const vel = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((v) => (vel.current = v));
  }, [api.velocity]);

  //position
  const pos = useRef([0, 0, 0]);
  useEffect(() => {
    api.position.subscribe((p) => (pos.current = p));
  }, [api.position]);

  useFrame(() => {
    //   console.log('frame count:')
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2])
    );
    //velocity
    // api.velocity.set(0, 0, 0);
    if (actions.jump && Math.abs(vel.current[1]) < 0.002) {
      api.velocity.set(vel.current[0], JUMP_VELOCITY, vel.current[2]);
    }
  });
  return <mesh ref={ref}></mesh>;
};
