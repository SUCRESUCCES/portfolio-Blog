"use client";

import React, { Suspense, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Preload,
  Bounds,
  Center,
} from "@react-three/drei";
import type { Group, Object3D } from "three";
import { MathUtils } from "three";
import { SkeletonUtils } from "three-stdlib"; // npm i three-stdlib

function Model(props: ThreeElements["group"]) {
  const groupRef = useRef<Group>(null!);

  const gltf = useGLTF("/welcome.gltf");
  // ✅ 캐시 원본을 건드리지 않도록 딥클론 (스키닝/본 포함 안전)
  const cloned = useMemo(
    () => SkeletonUtils.clone(gltf.scene) as Object3D,
    [gltf.scene]
  );

  // ✅ 애니메이션을 모델 노드에 직접 바인딩할 ref
  const { actions, ref: animRef } = useAnimations(gltf.animations);

  useEffect(() => {
    // 모델이 프러스텀 컬링으로 사라지지 않도록
    cloned.traverse((o: Object3D) => (o.frustumCulled = false));
  }, [cloned]);

  useEffect(() => {
    const keys = Object.keys(actions ?? {}) as Array<keyof typeof actions>;
    const action = keys[0] ? actions![keys[0]] : undefined;
    action?.reset().fadeIn(0.2).play();
    // cleanup 없음: dev StrictMode 깜빡임 방지
  }, [actions]);

  useFrame((state) => {
    const g = groupRef.current;
    if (!g) return;
    g.rotation.y = MathUtils.lerp(g.rotation.y, state.mouse.x * 0.2, 0.05);
    g.rotation.x = MathUtils.lerp(g.rotation.x, -state.mouse.y * 0.2, 0.05);
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {/* ✅ 애니메이션 ref를 실제 모델 노드에 연결 */}
      <primitive object={cloned} ref={animRef} dispose={null} />
    </group>
  );
}
useGLTF.preload("/welcome.gltf");

export default function ThreeCanvas({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{ background: "#111" }}
    >
      <Canvas
        className="!relative !w-full !h-full"
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 1.2, 6], fov: 60 }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 5, 2]} intensity={2} />
        <pointLight position={[-3, -5, -2]} intensity={1.5} />

        <Suspense fallback={null}>
          {/* ✅ 자동 프레이밍으로 화면에 꼭 들어오게 */}
          <Bounds fit clip observe margin={1.2}>
            <Center>
              <Model scale={1.2} />
            </Center>
          </Bounds>
          <Preload all />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
