
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MapPin, Building, Leaf, Wifi, Rocket, TrendingUp, Calendar, Users, X, LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface District {
  id: number;
  name: string;
  focus: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  description: string;
  features: string[];
  keyTechnologies: string[];
  economicImpact: string;
  stats: {
    startups: string;
    investment: string;
    jobs: string;
  };
  coordinates: {
    x: number;
    y: number;
  };
}

export function InnovationImpact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);

  const districts: District[] = [
    {
      id: 1,
      name: 'Cape Town CBD',
      focus: 'Fintech & Digital Services Hub',
      icon: Building,
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'bg-blue-500',
      description: 'Leveraging the city\'s established financial sector and world-class infrastructure to become Africa\'s premier fintech innovation hub.',
      features: [
        'Regulatory sandboxes for blockchain and AI',
        'Integrated 5G infrastructure deployment',
        'International co-working spaces and incubators',
        'Strategic partnerships with global fintech leaders'
      ],
      keyTechnologies: ['Blockchain', 'AI/ML', 'Digital Payments', 'RegTech'],
      economicImpact: 'R2.5B GDP contribution by 2030',
      stats: { startups: '25+', investment: 'R250M', jobs: '2500+' },
      coordinates: { x: 18, y: 72 }
    },
    {
      id: 2,
      name: 'Stellenbosch',
      focus: 'AgriTech & Sustainability Hub',
      icon: Leaf,
      color: 'from-green-400 to-emerald-400',
      bgColor: 'bg-green-500',
      description: 'Combining world-renowned university research with agricultural expertise to drive sustainable farming innovation across Africa.',
      features: [
        'Smart agriculture IoT testbeds',
        'Climate-resilient crop research labs',
        'Community maker spaces for rural innovation',
        'Water-smart irrigation technology pilots'
      ],
      keyTechnologies: ['IoT Sensors', 'Precision Agriculture', 'Climate Tech', 'Biotech'],
      economicImpact: 'R1.8B agricultural sector enhancement',
      stats: { startups: '18+', investment: 'R180M', jobs: '1800+' },
      coordinates: { x: 28, y: 68 }
    },
    {
      id: 3,
      name: 'George',
      focus: 'Tourism Tech & Rural Innovation Hub',
      icon: MapPin,
      color: 'from-purple-400 to-pink-400',
      bgColor: 'bg-purple-500',
      description: 'Transforming the Garden Route into a smart tourism destination while bridging the digital divide in rural communities.',
      features: [
        'Smart tourism experience platforms',
        'Rural connectivity infrastructure',
        'Digital skills training centers',
        'Remote work and entrepreneurship hubs'
      ],
      keyTechnologies: ['Smart Tourism', 'Rural 5G', 'Digital Inclusion', 'Remote Work Tech'],
      economicImpact: 'R1.2B tourism sector digitization',
      stats: { startups: '12+', investment: 'R120M', jobs: '1200+' },
      coordinates: { x: 72, y: 78 }
    },
  ];

  const timeline = [
    { quarter: 'Q4 2025', milestone: 'Site selection and stakeholder agreements', status: 'upcoming' },
    { quarter: 'Q2 2026', milestone: 'Infrastructure development and regulatory framework', status: 'upcoming' },
    { quarter: 'Q4 2026', milestone: 'First district operational launch', status: 'upcoming' },
    { quarter: 'Q4 2027', milestone: 'All three districts fully operational', status: 'upcoming' },
  ];

  const impactMetrics = [
    { icon: Rocket, label: 'Startups Incubated', value: '50+', period: 'annually' },
    { icon: Users, label: 'Citizens Engaged', value: '10,000+', period: 'in innovation activities' },
    { icon: TrendingUp, label: 'Investment Attraction', value: 'R500M', period: 'over 5 years' },
    { icon: MapPin, label: 'Global Recognition', value: 'African', period: 'digital innovation leader' },
  ];

  return (
    <section id="innovation" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Innovation & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bold Initiative: Western Cape Digital Innovation Districts as living laboratories 
            for Fourth Industrial Revolution technologies
          </p>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-8 text-center">Digital Innovation Districts Map</h3>
            <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
              Strategic placement across the Western Cape to maximize economic impact and technological advancement
            </p>
            
            <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl p-4 h-[600px] overflow-hidden border border-white/10">
              {/* Real Western Cape Map */}
              <motion.div
                className="absolute inset-4 rounded-xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/western-cape-map.png"
                    alt="Western Cape Province Map with Districts and Municipalities"
                    fill
                    className="object-contain"
                    priority
                  />
                  {/* Overlay for better contrast with markers */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none"></div>
                </div>
              </motion.div>

              {/* Legend */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-xs border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-200">Fintech Hub</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-200">AgriTech Hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-200">Tourism Tech Hub</span>
                </div>
              </div>
              
              {/* Districts with improved positioning */}
              {districts.map((district, index) => (
                <motion.div
                  key={district.id}
                  className="absolute cursor-pointer"
                  style={{ 
                    left: `${district.coordinates.x}%`, 
                    top: `${district.coordinates.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.3 }}
                  whileHover={{ scale: 1.15 }}
                  onClick={() => setSelectedDistrict(district)}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${district.color} rounded-full flex items-center justify-center shadow-2xl group relative border-4 border-white/20 hover:border-white/40 transition-all duration-300`}>
                    <district.icon className="w-10 h-10 text-white drop-shadow-lg" />
                    
                    {/* Enhanced Pulse Animation */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${district.color} rounded-full`}
                      animate={{ 
                        scale: [1, 1.8, 1], 
                        opacity: [0.4, 0, 0.4] 
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: index * 0.5 
                      }}
                    />
                    
                    {/* District Label */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-semibold text-white shadow-xl">
                        {district.name}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Enhanced Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                <motion.path
                  d="M 18 72 Q 23 70 28 68"
                  stroke="url(#connectionGradient1)"
                  strokeWidth="1.2"
                  fill="none"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2.5, delay: 1.5 }}
                />
                <motion.path
                  d="M 28 68 Q 50 73 72 78"
                  stroke="url(#connectionGradient2)"
                  strokeWidth="1.2"
                  fill="none"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2.5, delay: 1.8 }}
                />
                
                <defs>
                  <linearGradient id="connectionGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#34D399" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#34D399" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#F472B6" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Geographic Labels */}
              <div className="absolute bottom-6 left-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Western Cape Province</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* District Detail Modal */}
        {selectedDistrict && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDistrict(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${selectedDistrict.color} rounded-2xl flex items-center justify-center`}>
                    <selectedDistrict.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{selectedDistrict.name}</h3>
                    <p className="text-lg text-cyan-400">{selectedDistrict.focus}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDistrict(null)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {selectedDistrict.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-cyan-400" />
                    Key Features
                  </h4>
                  <div className="space-y-3">
                    {selectedDistrict.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Key Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedDistrict.keyTechnologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <h5 className="text-lg font-semibold text-white mb-2">Economic Impact</h5>
                    <p className="text-green-400 font-semibold">{selectedDistrict.economicImpact}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">{selectedDistrict.stats.startups}</div>
                  <div className="text-sm text-gray-400">Startups Expected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">{selectedDistrict.stats.investment}</div>
                  <div className="text-sm text-gray-400">Investment Target</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">{selectedDistrict.stats.jobs}</div>
                  <div className="text-sm text-gray-400">Jobs Created</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* District Details */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {districts.map((district, index) => (
            <motion.div
              key={district.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedDistrict(district)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${district.color} rounded-lg flex items-center justify-center shadow-lg`}>
                  <district.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{district.name}</h3>
                  <p className="text-sm text-cyan-400">{district.focus}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{district.description}</p>
              
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-semibold text-white">Key Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {district.keyTechnologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {district.keyTechnologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-400">
                      +{district.keyTechnologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-sm text-gray-400 mb-1">Economic Impact</p>
                <p className="text-green-400 font-semibold text-sm">{district.economicImpact}</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400">{district.stats.startups}</div>
                  <div className="text-xs text-gray-400">Startups</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">{district.stats.investment}</div>
                  <div className="text-xs text-gray-400">Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">{district.stats.jobs}</div>
                  <div className="text-xs text-gray-400">Jobs</div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">
                  Click to view details →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Implementation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-8 text-center">Implementation Timeline</h3>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.2 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="font-semibold text-cyan-400">{item.quarter}</span>
                      </div>
                      <p className="text-gray-300">{item.milestone}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-gray-900"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Expected Impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Expected Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-300 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-400">{metric.period}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
