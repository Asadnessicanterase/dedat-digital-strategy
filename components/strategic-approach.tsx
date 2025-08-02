
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Target, Rocket, Globe, CheckCircle } from 'lucide-react';

export function StrategicApproach() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const phases = [
    {
      id: 1,
      title: 'Foundation Strengthening',
      period: '2025-2027',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      description: 'Building robust digital infrastructure and governance',
      objectives: [
        'Consolidate existing digital infrastructure through Broadband 2.0 PPP expansion',
        'Implement #SkillsBoostWesternCape initiatives targeting critical skills gaps',
        'Establish integrated governance structures',
        'Deploy Digital Enablement Fund resources to support 500+ SME transformations'
      ],
      progress: 15,
    },
    {
      id: 2,
      title: 'Ecosystem Acceleration',
      period: '2027-2030',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      description: 'Scaling successful programs and expanding connectivity',
      objectives: [
        'Activate Quadruple Helix innovation platforms',
        'Scale successful pilot programs across all 26 municipalities',
        'Achieve 50% household internet connectivity',
        'Establish Western Cape as recognized African digital hub'
      ],
      progress: 5,
    },
    {
      id: 3,
      title: 'Global Positioning',
      period: '2030-2035',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      description: 'Achieving universal access and global recognition',
      objectives: [
        'Achieve universal broadband access',
        'Position province as Fourth Industrial Revolution testbed',
        'Establish sustainable innovation ecosystem',
        'Generate 100,000+ digital economy jobs'
      ],
      progress: 0,
    },
  ];

  const keyDecisions = [
    { quarter: 'Q4 2025', decision: 'Approval of integrated municipal digital capacity framework' },
    { quarter: 'Q2 2026', decision: 'Selection of priority sectors for AI and IoT pilot implementations' },
    { quarter: 'Q4 2026', decision: 'Evaluation of Digital Enablement Fund impact and scaling decisions' },
    { quarter: 'Q2 2027', decision: 'Assessment of skills development outcomes and curriculum adjustments' },
  ];

  return (
    <section id="strategy" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Strategic <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Approach</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive three-phase implementation framework aligned with the Growth for Jobs Strategy's 
            5% annual growth target by 2035
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"></div>
          
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${phase.color} text-white rounded-full text-sm font-semibold mb-4`}>
                    <Calendar className="w-4 h-4 mr-2" />
                    {phase.period}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600 mb-6">{phase.description}</p>
                  
                  <div className="space-y-4">
                    {phase.objectives.map((objective, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.3 + idx * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 leading-relaxed font-medium">{objective}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm text-gray-600">{phase.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${phase.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${phase.progress}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Center Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-gray-100 flex items-center justify-center z-10">
                <div className={`w-10 h-10 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center`}>
                  <phase.icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Decision Points */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Critical Decision Points
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {keyDecisions.map((decision, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {decision.quarter.split(' ')[0]}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 mb-1">{decision.quarter}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{decision.decision}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
