import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Stars, Float } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'

function RotatingGlobe() {
  const meshRef = useRef<THREE.Mesh>(null)
  const wireRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15
    }
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.08
      wireRef.current.rotation.x += delta * 0.05
    }
  })

  return (
    <group>
      {/* Core sphere */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <Sphere ref={meshRef} args={[2.2, 64, 64]}>
          <meshStandardMaterial
            color="#0d9488"
            emissive="#134e4a"
            emissiveIntensity={0.4}
            metalness={0.7}
            roughness={0.25}
          />
        </Sphere>
      </Float>

      {/* Wireframe overlay */}
      <Sphere ref={wireRef} args={[2.35, 32, 32]}>
        <meshBasicMaterial
          color="#5eead4"
          wireframe
          transparent
          opacity={0.25}
        />
      </Sphere>

      {/* Outer glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#14b8a6" transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

function HeroContent() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#5eead4" />
      <pointLight position={[-8, -5, -5]} intensity={0.6} color="#14b8a6" />
      <Stars radius={80} depth={50} count={2500} factor={4} saturation={0} fade speed={0.8} />
      <RotatingGlobe />
    </>
  )
}

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <HeroContent />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-brand-400">
            Data Analyst &amp; ML Enthusiast
          </p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            Kartik Singh
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-gray-300 sm:text-xl">
            Turning complex data into clear stories and intelligent systems.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-brand-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-400 hover:shadow-brand-400/30"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
            <div className="h-2 w-1.5 rounded-full bg-brand-400 mx-auto" />
          </div>
        </motion.div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface-900 to-transparent" />
    </section>
  )
}
