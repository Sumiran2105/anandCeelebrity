import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FleetPreview from "../components/FleetPreview";
import Timeline from "../components/Timeline";
import Testimonials from "../components/Testimonials";
import SecurityProtocolSection from "../components/SecurityProtocolSection";
import PrivacyProtectionSection from "../components/PrivacyProtectionSection";
export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <FleetPreview />
      <Timeline />
      <SecurityProtocolSection />
      <PrivacyProtectionSection />
      <Testimonials />
      
      
    </div>
  );
}
