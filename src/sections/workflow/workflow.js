/** @jsx jsx */
import { jsx, Container, Grid } from 'theme-ui';

import WorkflowCard from 'components/workflow-card';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';

import data from 'sections/workflow/data';

export default function WorkFlow() {
  const renderCard = (item, index) => {
    const icon = (index + 1).toString().padStart(2, '0');

    return (
      <WorkflowCard
        key={item.id}
        icon={icon}
        title={item.title}
        text={item.text}
      />
    );
  };

  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Meet the feature of our product"
          isWhite
        />

        <Grid sx={styles.grid}>
          {data.map(renderCard)}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
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
