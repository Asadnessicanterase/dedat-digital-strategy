
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Building2, GraduationCap, Heart, Crown, Cog, Lightbulb, UserCheck } from 'lucide-react';

export function GovernanceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const governanceStructure = {
    executive: {
      title: 'Executive Steering Committee',
      chair: 'Chief Director Digital Economy (DEDAT)',
      members: [
        'HOD DEDAT',
        'City of Cape Town CIO',
        'Provincial Treasury CFO',
        'UCT/SU/CPUT Representatives'
      ],
      frequency: 'Quarterly strategic oversight',
      color: 'from-purple-600 to-indigo-600',
      icon: Crown,
    }
  };

  const workingGroups = [
    {
      title: 'Infrastructure & Connectivity',
      lead: 'Centre for e-Innovation',
      icon: Cog,
      color: 'from-blue-500 to-cyan-500',
      description: 'Technical infrastructure coordination and implementation'
    },
    {
      title: 'Skills & Workforce Development',
      lead: '#SkillsBoostWesternCape',
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-500',
      description: 'Human capital development and training programs'
    },
    {
      title: 'Innovation & Entrepreneurship',
      lead: 'Silicon Cape Coordination',
      icon: Lightbulb,
      color: 'from-orange-500 to-red-500',
      description: 'Startup ecosystem and innovation facilitation'
    },
    {
      title: 'Digital Inclusion & Community',
      lead: 'Civil Society Organizations',
      icon: UserCheck,
      color: 'from-pink-500 to-purple-500',
      description: 'Community engagement and inclusive access'
    },
  ];

  const stakeholderGroups = [
    {
      category: 'Government Sphere',
      icon: Building2,
      color: 'from-blue-600 to-purple-600',
      members: [
        {
          name: 'Department of the Premier',
          role: 'Transversal ICT coordination',
          entity: 'Centre for e-Innovation'
        },
        {
          name: 'City of Cape Town',
          role: 'Municipal digital infrastructure leadership',
          entity: '360km fibre backbone'
        },
        {
          name: 'District & Local Municipalities',
          role: 'Last-mile service delivery',
          entity: 'Community engagement'
        },
        {
          name: 'Provincial Treasury',
          role: 'Financial oversight',
          entity: 'Performance monitoring'
        }
      ]
    },
    {
      category: 'Private Sector',
      icon: Users,
      color: 'from-green-600 to-emerald-600',
      members: [
        {
          name: 'Liquid Intelligent Technologies',
          role: 'Strategic infrastructure partner',
          entity: 'R2 billion Broadband 2.0 investment'
        },
        {
          name: 'Vodacom Western Cape',
          role: 'Commercial connectivity',
          entity: 'R1 billion annual investment, 99.5% 3G coverage'
        },
        {
          name: 'Silicon Cape',
          role: 'Technology sector coordination',
          entity: 'Startup ecosystem development'
        },
        {
          name: 'Business Support Intermediaries',
          role: 'SME digital transformation',
          entity: 'Facilitation services'
        }
      ]
    },
    {
      category: 'Academic Institutions',
      icon: GraduationCap,
      color: 'from-purple-600 to-pink-600',
      members: [
        {
          name: 'UCT, SU, CPUT',
          role: 'Research, innovation, human capital',
          entity: 'Technology transfer offices'
        },
        {
          name: 'TVET Colleges',
          role: 'Vocational digital skills training',
          entity: 'SABEN partnerships'
        }
      ]
    },
    {
      category: 'Civil Society',
      icon: Heart,
      color: 'from-orange-600 to-red-600',
      members: [
        {
          name: 'Western Cape Civil Society Forum',
          role: 'Community needs articulation',
          entity: 'Advocacy and representation'
        },
        {
          name: 'Project Isizwe & Similar Organizations',
          role: 'Digital inclusion advocacy',
          entity: 'Community Wi-Fi initiatives'
        },
        {
          name: 'NGOs',
          role: 'Digital literacy programs',
          entity: 'Informal settlement upgrading'
        }
      ]
    }
  ];

  return (
    <section id="governance" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Governance & <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Stakeholder Engagement</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collaborative governance architecture leveraging the province's mature stakeholder ecosystem
          </p>
        </motion.div>

        {/* Executive Committee */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className={`bg-gradient-to-r ${governanceStructure.executive.color} rounded-3xl p-8 text-white`}>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <governanceStructure.executive.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold">{governanceStructure.executive.title}</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Committee Chair</h4>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="font-medium">{governanceStructure.executive.chair}</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Key Members</h4>
                <div className="space-y-2">
                  {governanceStructure.executive.members.map((member, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/10 rounded-lg p-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <p className="text-sm font-medium">{member}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-white/90">{governanceStructure.executive.frequency}</p>
            </div>
          </div>
        </motion.div>

        {/* Technical Working Groups */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Working Groups</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingGroups.map((group, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${group.color} rounded-xl flex items-center justify-center mb-4`}>
                  <group.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{group.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{group.description}</p>
                <div className="text-sm">
                  <span className="font-medium text-gray-700">Led by: </span>
                  <span className="text-gray-600">{group.lead}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stakeholder Groups */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Institutional Partners</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {stakeholderGroups.map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                className="bg-gray-50 rounded-2xl p-6"
                initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 + groupIndex * 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${group.color} rounded-lg flex items-center justify-center mr-4`}>
                    <group.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{group.category}</h4>
                </div>
                
                <div className="space-y-4">
                  {group.members.map((member, memberIndex) => (
                    <motion.div
                      key={memberIndex}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.2 + groupIndex * 0.2 + memberIndex * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h5 className="font-semibold text-gray-900 mb-1">{member.name}</h5>
                      <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                      <p className="text-xs text-gray-500">{member.entity}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
