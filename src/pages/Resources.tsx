import React, { Suspense, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { FileText, Music, Video, Image as ImageIcon, Box } from 'lucide-react'

function Model({ url }: { url: string }) {
  // Using a default cube mesh when model fails to load
  try {
    const gltf = useLoader(GLTFLoader, url)
    return <primitive object={gltf.scene} />
  } catch (error) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="purple" />
      </mesh>
    )
  }
}

const Resources = () => {
  const [activeTab, setActiveTab] = useState('3d')
  const [modelError, setModelError] = useState(false)

  const resources = {
    '3d': [
      {
        name: '3D Model',
        type: 'GLB',
        url: '/models/robot.glb',
        description: 'Interactive 3D model',
      },
    ],
    documents: [
      {
        name: 'User Guide',
        type: 'PDF',
        url: '/docs/guide.pdf',
        icon: <FileText className="w-6 h-6 text-indigo-600" />,
      },
      {
        name: 'Technical Specs',
        type: 'PDF',
        url: '/docs/specs.pdf',
        icon: <FileText className="w-6 h-6 text-indigo-600" />,
      },
    ],
    audio: [
      {
        name: 'Background Music',
        type: 'MP3',
        url: '/audio/background.mp3',
        icon: <Music className="w-6 h-6 text-indigo-600" />,
      },
      {
        name: 'Sound Effect',
        type: 'WAV',
        url: '/audio/effect.wav',
        icon: <Music className="w-6 h-6 text-indigo-600" />,
      },
    ],
    media: [
      {
        name: 'Product Video',
        type: 'MP4',
        url: '/videos/product.mp4',
        icon: <Video className="w-6 h-6 text-indigo-600" />,
      },
      {
        name: 'Tutorial',
        type: 'MP4',
        url: '/videos/tutorial.mp4',
        icon: <Video className="w-6 h-6 text-indigo-600" />,
      },
    ],
    images: [
      {
        name: 'Product Photo',
        type: 'JPG',
        url: '/images/product.jpg',
        icon: <ImageIcon className="w-6 h-6 text-indigo-600" />,
      },
      {
        name: 'Diagram',
        type: 'PNG',
        url: '/images/diagram.png',
        icon: <ImageIcon className="w-6 h-6 text-indigo-600" />,
      },
    ],
  }

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resource Gallery
          </h1>
          <p className="text-xl text-gray-600">
            Explore our collection of various resource types
          </p>
        </div>

        {/* Resource Type Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(resources).map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                activeTab === type
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* 3D Model Viewer */}
        {activeTab === '3d' && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="h-[500px] w-full relative">
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                  <Model url="/models/robot.glb" />
                </Suspense>
                <OrbitControls />
              </Canvas>
              {modelError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-90">
                  <div className="text-center p-4">
                    <Box className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                    <p className="text-gray-600">
                      3D model not available. Displaying placeholder.
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Interactive 3D Model
              </h3>
              <p className="text-gray-600 mt-2">
                Drag to rotate, scroll to zoom, and right-click to pan
              </p>
            </div>
          </div>
        )}

        {/* Other Resource Types */}
        {activeTab !== '3d' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources[activeTab as keyof typeof resources].map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className="p-6">
                  <div className="mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {resource.name}
                  </h3>
                  <p className="text-gray-600 mb-4">Type: {resource.type}</p>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition-colors duration-200"
                  >
                    View Resource
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Resources