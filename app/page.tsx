
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { StrategicApproach } from '@/components/strategic-approach';
import { GovernanceSection } from '@/components/governance-section';
import { RiskManagement } from '@/components/risk-management';
import { InnovationImpact } from '@/components/innovation-impact';
import { MonitoringEvaluation } from '@/components/monitoring-evaluation';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <StrategicApproach />
      <GovernanceSection />
      <RiskManagement />
      <InnovationImpact />
      <MonitoringEvaluation />
      <Footer />
    </div>
  );
}
