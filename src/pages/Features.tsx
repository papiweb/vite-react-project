import React from 'react'
import { Shield, Zap, Clock, BarChart, Users, Lock } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols and data encryption at rest and in transit.',
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with response times under 100ms.',
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock support from our dedicated team of experts.',
    },
    {
      icon: <BarChart className="w-8 h-8 text-indigo-600" />,
      title: 'Advanced Analytics',
      description: 'Detailed insights and reporting for data-driven decisions.',
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: 'Team Collaboration',
      description: 'Built-in tools for seamless team coordination and communication.',
    },
    {
      icon: <Lock className="w-8 h-8 text-indigo-600" />,
      title: 'Access Control',
      description: 'Granular permissions and role-based access management.',
    },
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Business
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to scale your business and delight your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">API & Integration</h3>
              <ul className="space-y-3 text-gray-600">
                <li>RESTful API with comprehensive documentation</li>
                <li>WebSocket support for real-time updates</li>
                <li>OAuth2 authentication</li>
                <li>Custom webhook configurations</li>
                <li>SDK support for major programming languages</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Infrastructure</h3>
              <ul className="space-y-3 text-gray-600">
                <li>99.99% uptime guarantee</li>
                <li>Global CDN distribution</li>
                <li>Automatic scaling and load balancing</li>
                <li>Daily backups with point-in-time recovery</li>
                <li>GDPR and CCPA compliant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features