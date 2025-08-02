
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, Wifi, GraduationCap, BarChart3, Target, Calendar, Award } from 'lucide-react';
import { AnimatedCounter } from './animated-counter';

export function MonitoringEvaluation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tiers = [
    {
      tier: 1,
      title: 'Economic Impact Indicators',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      metrics: [
        { name: 'Digital economy contribution to provincial GDP', target: '15% by 2030', current: 8.2, icon: BarChart3 },
        { name: 'ICT sector employment growth', target: '20% annually', current: 12.5, icon: Users },
        { name: 'SME digital adoption rates', target: 'Baseline: Digital Enablement Fund recipients', current: 34, icon: Target },
        { name: 'Foreign direct investment in technology sector', target: 'R2B by 2030', current: 0.8, icon: TrendingUp },
      ]
    },
    {
      tier: 2,
      title: 'Infrastructure and Access Metrics',
      icon: Wifi,
      color: 'from-blue-500 to-cyan-500',
      metrics: [
        { name: 'Household internet connectivity', target: '80% by 2030', current: 34, icon: Wifi },
        { name: 'Mobile network quality scores', target: 'Maintain top-3 national ranking', current: 2, icon: Award },
        { name: 'Public Wi-Fi usage satisfaction rates', target: '90%+', current: 78, icon: Users },
        { name: 'Municipal digital service availability', target: '100% by 2028', current: 56, icon: Target },
      ]
    },
    {
      tier: 3,
      title: 'Skills and Inclusion Measures',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500',
      metrics: [
        { name: 'Digital literacy rates across demographic groups', target: '85% by 2030', current: 62, icon: GraduationCap },
        { name: 'ICT qualification completions and employment', target: '5000 annually', current: 3200, icon: Users },
        { name: 'Gender parity in digital participation', target: '95% parity by 2028', current: 88, icon: Users },
        { name: 'Government employee digital competency', target: '90% proficient', current: 67, icon: Target },
      ]
    }
  ];

  const dashboardCards = [
    { title: 'Active Projects', value: 142, change: '+12%', color: 'from-blue-500 to-cyan-500', icon: Target },
    { title: 'Budget Utilization', value: 76, change: '+5%', color: 'from-green-500 to-emerald-500', icon: BarChart3, suffix: '%' },
    { title: 'Stakeholder Satisfaction', value: 89, change: '+8%', color: 'from-purple-500 to-pink-500', icon: Award, suffix: '%' },
    { title: 'Performance Score', value: 84, change: '+3%', color: 'from-orange-500 to-red-500', icon: TrendingUp, suffix: '%' },
  ];

  const reportingSchedule = [
    { frequency: 'Monthly', type: 'Executive Dashboards', audience: 'Senior Leadership', icon: Calendar },
    { frequency: 'Quarterly', type: 'Reports to Provincial Cabinet', audience: 'Cabinet & Treasury', icon: Award },
    { frequency: 'Annual', type: 'Public Report', audience: 'Citizens & Stakeholders', icon: Users },
    { frequency: 'Bi-annual', type: 'Independent Evaluation', audience: 'Performance Assessment', icon: BarChart3 },
  ];

  return (
    <section id="monitoring" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Monitoring & <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Evaluation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Data-driven success measurement framework with continuous improvement approach
          </p>
        </motion.div>

        {/* Dashboard Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardCards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-green-600 font-semibold">{card.change}</div>
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={card.value} suffix={card.suffix || ''} />
                </div>
                <div className="text-sm text-gray-600">{card.title}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Measurement Framework */}
        <div className="space-y-12">
          {tiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, x: tierIndex % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + tierIndex * 0.3 }}
              className="bg-gray-50 rounded-3xl p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-xl flex items-center justify-center`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Tier {tier.tier}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{tier.title}</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {tier.metrics.map((metric, metricIndex) => (
                  <motion.div
                    key={metricIndex}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + tierIndex * 0.3 + metricIndex * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 bg-gradient-to-r ${tier.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <metric.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{metric.name}</h4>
                        <div className="text-sm text-gray-600 mb-3">Target: {metric.target}</div>
                        
                        {/* Progress Bar */}
                        <div className="mb-2">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-700">Current Progress</span>
                            <span className="text-sm text-gray-600">{metric.current}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              className={`h-2 bg-gradient-to-r ${tier.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${Math.min(metric.current, 100)}%` } : {}}
                              transition={{ duration: 1.5, delay: 1 + tierIndex * 0.3 + metricIndex * 0.1 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reporting and Accountability */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">Reporting & Accountability Schedule</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reportingSchedule.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-lg font-bold text-cyan-400 mb-2">{item.frequency}</div>
                  <div className="text-sm font-medium mb-2">{item.type}</div>
                  <div className="text-xs text-gray-300">{item.audience}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
