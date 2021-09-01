/** @jsx jsx */
import { jsx, Container, Grid } from 'theme-ui';

import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card';

import { features } from 'sections/feature/data';

export default function Feature() {
  const renderFeatureCard = (feature) => (
    <FeatureCard
      key={feature.id}
      src={feature.imgSrc}
      altText={feature.altText}
      title={feature.title}
      text={feature.text}
    />
  );

  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Quality Features"
          title="Amazing useful features"
        />

        <Grid sx={styles.grid}>
          {features.map(renderFeatureCard)}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
