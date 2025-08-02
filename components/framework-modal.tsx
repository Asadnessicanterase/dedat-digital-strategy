
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Target, Rocket, Globe, CheckCircle, Users, Building, Lightbulb, TrendingUp, Award, MapPin } from 'lucide-react';

interface FrameworkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FrameworkModal({ isOpen, onClose }: FrameworkModalProps) {
  const phases = [
    {
      id: 1,
      title: 'Foundation Strengthening',
      period: '2025-2027',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      description: 'Building robust digital infrastructure and governance foundations',
      keyFocus: 'Infrastructure, Skills Development, Governance',
      timeline: [
        { year: '2025', milestone: 'Digital Infrastructure Assessment & Broadband 2.0 PPP Launch' },
        { year: '2026', milestone: '#SkillsBoostWesternCape Program Implementation & Digital Enablement Fund Activation' },
        { year: '2027', milestone: 'Integrated Governance Structures & Municipal Digital Capacity Framework' }
      ],
      objectives: [
        'Consolidate existing digital infrastructure through Broadband 2.0 PPP expansion',
        'Implement #SkillsBoostWesternCape initiatives targeting critical skills gaps',
        'Establish integrated governance structures across all levels',
        'Deploy Digital Enablement Fund resources to support 500+ SME transformations',
        'Develop municipal digital capacity frameworks',
        'Create provincial data governance standards'
      ],
      deliverables: [
        'Broadband coverage expansion to 85% of households',
        '10,000+ citizens trained in digital skills',
        'Provincial Digital Leadership Council established',
        '500+ SMEs digitally transformed',
        'Unified data governance framework',
        'Municipal digital readiness assessments'
      ],
      metrics: [
        { label: 'Broadband Coverage', target: '85%', current: '65%' },
        { label: 'Digital Skills Training', target: '10,000', current: '2,500' },
        { label: 'SME Transformations', target: '500', current: '75' },
        { label: 'Municipal Readiness', target: '26/26', current: '8/26' }
      ],
      progress: 15,
    },
    {
      id: 2,
      title: 'Ecosystem Acceleration',
      period: '2028-2030',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      description: 'Scaling successful programs and building innovation ecosystems',
      keyFocus: 'Innovation Hubs, Connectivity Expansion, Economic Growth',
      timeline: [
        { year: '2028', milestone: 'Quadruple Helix Innovation Platform Activation' },
        { year: '2029', milestone: 'Pilot Program Scaling & Innovation District Development' },
        { year: '2030', milestone: 'Regional Digital Hub Recognition & 50% Connectivity Target' }
      ],
      objectives: [
        'Activate Quadruple Helix innovation platforms across key sectors',
        'Scale successful pilot programs across all 26 municipalities',
        'Achieve 50% household internet connectivity',
        'Establish Western Cape as recognized African digital hub',
        'Launch Fourth Industrial Revolution test environments',
        'Develop advanced digital skills programs'
      ],
      deliverables: [
        'Innovation districts in Cape Town CBD, Stellenbosch, and George',
        '50% household internet connectivity achieved',
        'Quadruple Helix innovation platforms operational',
        'Advanced manufacturing 4.0 implementations',
        'AgriTech innovation ecosystem established',
        'Regional digital hub status achieved'
      ],
      metrics: [
        { label: 'Household Connectivity', target: '50%', current: '35%' },
        { label: 'Innovation Districts', target: '3', current: '1' },
        { label: 'Quadruple Helix Platforms', target: '5', current: '0' },
        { label: 'Digital Economy Jobs', target: '25,000', current: '12,000' }
      ],
      progress: 5,
    },
    {
      id: 3,
      title: 'Global Positioning',
      period: '2031-2035',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      description: 'Achieving universal access and international recognition',
      keyFocus: 'Universal Access, Global Recognition, Sustainable Innovation',
      timeline: [
        { year: '2031', milestone: 'Universal Broadband Access Initiative Launch' },
        { year: '2033', milestone: 'Fourth Industrial Revolution Testbed Designation' },
        { year: '2035', milestone: '100,000+ Digital Economy Jobs & Global Hub Status' }
      ],
      objectives: [
        'Achieve universal broadband access across the province',
        'Position province as Fourth Industrial Revolution testbed',
        'Establish sustainable innovation ecosystem',
        'Generate 100,000+ digital economy jobs',
        'Achieve international smart region recognition',
        'Develop exportable digital solutions'
      ],
      deliverables: [
        'Universal broadband access (95%+ coverage)',
        'Fourth Industrial Revolution testbed status',
        '100,000+ digital economy jobs created',
        'International smart region certification',
        'Exportable digital solutions portfolio',
        'Sustainable innovation ecosystem'
      ],
      metrics: [
        { label: 'Universal Access', target: '95%+', current: '65%' },
        { label: 'Digital Economy Jobs', target: '100,000+', current: '12,000' },
        { label: '4IR Testbed Projects', target: '10+', current: '0' },
        { label: 'Export Solutions', target: '50+', current: '5' }
      ],
      progress: 0,
    },
  ];

  const keyDecisionPoints = [
    { quarter: 'Q4 2025', decision: 'Approval of integrated municipal digital capacity framework', impact: 'High' },
    { quarter: 'Q2 2026', decision: 'Selection of priority sectors for AI and IoT pilot implementations', impact: 'Critical' },
    { quarter: 'Q4 2026', decision: 'Evaluation of Digital Enablement Fund impact and scaling decisions', impact: 'High' },
    { quarter: 'Q2 2027', decision: 'Assessment of skills development outcomes and curriculum adjustments', impact: 'Medium' },
    { quarter: 'Q1 2028', decision: 'Innovation district locations and partnership agreements', impact: 'Critical' },
    { quarter: 'Q3 2029', decision: 'Fourth Industrial Revolution testbed proposal submission', impact: 'Critical' },
  ];

  const riskFactors = [
    { risk: 'Infrastructure delays', mitigation: 'Multi-vendor approach with backup providers', level: 'Medium' },
    { risk: 'Skills gap persistence', mitigation: 'Accelerated training programs and international partnerships', level: 'High' },
    { risk: 'Funding shortfalls', mitigation: 'Diversified funding sources and phased implementation', level: 'Medium' },
    { risk: 'Technology obsolescence', mitigation: 'Continuous technology assessment and adaptive planning', level: 'Low' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Strategic Implementation Framework</h2>
                    <p className="text-blue-100">Comprehensive 3-Phase Digital Transformation Roadmap</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Overview */}
                <div className="mb-12">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
                      <Target className="w-8 h-8 text-blue-600 mb-3" />
                      <h3 className="font-bold text-gray-900 mb-2">Strategic Vision</h3>
                      <p className="text-sm text-gray-600">Position Western Cape as Africa's leading digital hub by 2035</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                      <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                      <h3 className="font-bold text-gray-900 mb-2">Growth Target</h3>
                      <p className="text-sm text-gray-600">5% annual economic growth aligned with provincial strategy</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                      <Award className="w-8 h-8 text-green-600 mb-3" />
                      <h3 className="font-bold text-gray-900 mb-2">Global Recognition</h3>
                      <p className="text-sm text-gray-600">International smart region certification and 4IR testbed status</p>
                    </div>
                  </div>
                </div>

                {/* Phase Details */}
                <div className="space-y-12">
                  {phases.map((phase, index) => (
                    <motion.div
                      key={phase.id}
                      className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {/* Phase Header */}
                      <div className={`bg-gradient-to-r ${phase.color} text-white p-6`}>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                            <phase.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold">{phase.title}</h3>
                            <p className="text-white/90">{phase.period} • {phase.keyFocus}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-white/80 mb-1">Current Progress</div>
                            <div className="text-2xl font-bold">{phase.progress}%</div>
                          </div>
                        </div>
                        <p className="mt-4 text-white/90">{phase.description}</p>
                      </div>

                      {/* Phase Content */}
                      <div className="p-6">
                        <div className="grid lg:grid-cols-2 gap-8">
                          {/* Timeline & Objectives */}
                          <div className="space-y-6">
                            {/* Timeline */}
                            <div>
                              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-blue-600" />
                                Key Milestones
                              </h4>
                              <div className="space-y-3">
                                {phase.timeline.map((item, idx) => (
                                  <div key={idx} className="flex gap-4">
                                    <div className={`w-16 h-8 bg-gradient-to-r ${phase.color} rounded-lg flex items-center justify-center text-white text-sm font-bold`}>
                                      {item.year}
                                    </div>
                                    <p className="text-sm text-gray-700 flex-1">{item.milestone}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Objectives */}
                            <div>
                              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                Strategic Objectives
                              </h4>
                              <div className="space-y-2">
                                {phase.objectives.map((objective, idx) => (
                                  <div key={idx} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-sm text-gray-700">{objective}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Deliverables & Metrics */}
                          <div className="space-y-6">
                            {/* Deliverables */}
                            <div>
                              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Building className="w-5 h-5 text-purple-600" />
                                Key Deliverables
                              </h4>
                              <div className="space-y-2">
                                {phase.deliverables.map((deliverable, idx) => (
                                  <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-gray-700">{deliverable}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Metrics */}
                            <div>
                              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-orange-600" />
                                Success Metrics
                              </h4>
                              <div className="space-y-3">
                                {phase.metrics.map((metric, idx) => (
                                  <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                      <span className="text-sm font-medium text-gray-900">{metric.label}</span>
                                      <span className="text-sm text-gray-600">{metric.current} → {metric.target}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                      <div 
                                        className={`h-2 bg-gradient-to-r ${phase.color} rounded-full`}
                                        style={{ width: '25%' }}
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Key Decision Points */}
                <div className="mt-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Lightbulb className="w-7 h-7 text-yellow-600" />
                    Critical Decision Points
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {keyDecisionPoints.map((decision, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl border border-gray-200">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                            decision.impact === 'Critical' ? 'bg-red-100 text-red-800' :
                            decision.impact === 'High' ? 'bg-orange-100 text-orange-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {decision.impact}
                          </div>
                          <span className="text-sm font-semibold text-gray-900">{decision.quarter}</span>
                        </div>
                        <p className="text-sm text-gray-700">{decision.decision}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Risk Management */}
                <div className="mt-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Target className="w-7 h-7 text-red-600" />
                    Risk Mitigation Strategy
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {riskFactors.map((risk, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl border border-gray-200">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                            risk.level === 'High' ? 'bg-red-100 text-red-800' :
                            risk.level === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {risk.level}
                          </div>
                          <span className="text-sm font-semibold text-gray-900">{risk.risk}</span>
                        </div>
                        <p className="text-sm text-gray-700">{risk.mitigation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
