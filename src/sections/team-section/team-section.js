/** @jsx jsx */
import { jsx, Container, Grid } from 'theme-ui';

import TeamCard from 'components/team-card';
import SectionHeader from 'components/section-header';

import { teamMembers } from 'sections/team-section/data';

export default function TeamSection() {
  const renderTeamCard = (teamMember) => (
    <TeamCard
      key={teamMember.id}
      src={teamMember.imgSrc}
      altText={teamMember.altText}
      title={teamMember.title}
      designation={teamMember.designation}
      social={teamMember.socialProfile}
    />
  );

  return (
    <section>
      <Container>
        <SectionHeader
          slogan="Our team"
          title="The most qualified and talented individuals"
        />

        <Grid sx={styles.grid}>
          {teamMembers.map(renderTeamCard)}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
