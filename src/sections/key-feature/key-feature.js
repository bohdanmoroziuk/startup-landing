/** @jsx jsx */
import { jsx, Container, Grid } from 'theme-ui';

import SectionHeader from 'components/section-header';
import FeatureCardColumn from 'components/feature-card-column';

import { features } from 'sections/key-feature/data';

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.keyFeature' }} id="feature">
     <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Meet the feature of our product"
        />
        <Grid sx={styles.grid}>
          {features.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
