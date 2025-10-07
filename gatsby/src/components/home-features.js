import React from 'react';
import Container from '../components/container';
import TemplateBanner from '../components/template-banner';
import Features from '../components/features';

function HomeFeatures({ developers, templateBanner, editors }) {
  return (
    <Container>
      <Features {...developers} />
      <TemplateBanner {...templateBanner} />
      <Features {...editors} />
    </Container>
  );
}

export default HomeFeatures;
