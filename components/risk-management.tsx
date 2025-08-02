
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, Shield, TrendingDown, Users, Zap } from 'lucide-react';

export function RiskManagement() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const risks = [
    {
      id: 1,
      title: 'Digital Divide Perpetuation',
      icon: Users,
      level: 'High',
      color: 'from-red-500 to-pink-500',
      impact: 'Failure to achieve universal access goals, reduced economic multiplier effects, social cohesion challenges',
      description: 'Despite infrastructure investments, affordability barriers and digital literacy gaps may entrench existing inequalities, limiting inclusive growth potential.',
      mitigation: [
        'Expand Cape Access e-Centre network to 200+ locations by 2027',
        'Implement sliding-scale data pricing through PPP negotiations',
        'Mandate digital literacy components in all government-funded training programs',
        'Establish community digital champions program in underserved areas'
      ],
      probability: 75,
      severity: 90,
    },
    {
      id: 2,
      title: 'Skills Gap Escalation',
      icon: TrendingDown,
      level: 'High',
      color: 'from-orange-500 to-red-500',
      impact: 'Reduced competitiveness, increased inequality, failure to achieve G4J employment targets',
      description: 'Rapid technological change outpaces skills development, creating structural unemployment and limiting digital economy growth.',
      mitigation: [
        'Establish real-time skills demand monitoring system with industry partners',
        'Create agile curriculum development processes with 6-month update cycles',
        'Implement work-integrated learning requirements for all ICT qualifications',
        'Launch executive digital leadership development program for senior government officials'
      ],
      probability: 80,
      severity: 85,
    },
    {
      id: 3,
      title: 'Infrastructure Vulnerability',
      icon: Zap,
      level: 'Medium',
      color: 'from-yellow-500 to-orange-500',
      impact: 'Reduced investor confidence, service delivery disruptions, economic losses',
      description: 'Load-shedding, cybersecurity threats, and climate change impacts compromise digital infrastructure reliability.',
      mitigation: [
        'Mandate renewable energy integration in all new digital infrastructure projects',
        'Establish provincial cybersecurity operations center by Q2 2026',
        'Develop climate-resilient infrastructure standards for municipal digital assets',
        'Create redundant connectivity pathways for critical government services'
      ],
      probability: 65,
      severity: 70,
    },
  ];

  const getRiskScore = (probability: number, severity: number) => {
    return Math.round((probability * severity) / 100);
  };

  const getRiskLevel = (score: number) => {
    if (score >= 70) return { level: 'Critical', color: 'text-red-600 bg-red-100' };
    if (score >= 50) return { level: 'High', color: 'text-orange-600 bg-orange-100' };
    if (score >= 30) return { level: 'Medium', color: 'text-yellow-600 bg-yellow-100' };
    return { level: 'Low', color: 'text-green-600 bg-green-100' };
  };

  return (
    <section id="risks" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Risk <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Management</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proactive identification and mitigation of strategic risks to ensure successful digital transformation
          </p>
        </motion.div>

        {/* Risk Matrix Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Risk Assessment Matrix</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {risks.map((risk, index) => {
                const riskScore = getRiskScore(risk.probability, risk.severity);
                const riskLevel = getRiskLevel(riskScore);
                
                return (
                  <motion.div
                    key={risk.id}
                    className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${risk.color} rounded-lg flex items-center justify-center`}>
                        <risk.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${riskLevel.color}`}>
                        {riskLevel.level}
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{risk.title}</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-600">Probability</span>
                          <span className="text-sm text-gray-500">{risk.probability}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${risk.probability}%` } : {}}
                            transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-600">Severity</span>
                          <span className="text-sm text-gray-500">{risk.severity}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 bg-gradient-to-r ${risk.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${risk.severity}%` } : {}}
                            transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          />
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{riskScore}</div>
                          <div className="text-xs text-gray-500">Risk Score</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Detailed Risk Analysis */}
        <div className="space-y-8">
          {risks.map((risk, index) => (
            <motion.div
              key={risk.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
            >
              <div className={`bg-gradient-to-r ${risk.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <risk.icon className="w-8 h-8" />
                  <div>
                    <h3 className="text-2xl font-bold">{risk.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span className="text-sm font-medium">{risk.level} Risk</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-500" />
                      Risk Description & Impact
                    </h4>
                    <p className="text-gray-600 mb-4">{risk.description}</p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h5 className="font-semibold text-red-800 mb-2">Potential Impact:</h5>
                      <p className="text-red-700 text-sm">{risk.impact}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-500" />
                      Mitigation Strategies
                    </h4>
                    <div className="space-y-3">
                      {risk.mitigation.map((strategy, strategyIndex) => (
                        <motion.div
                          key={strategyIndex}
                          className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 1.4 + index * 0.2 + strategyIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-green-800">{strategy}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
