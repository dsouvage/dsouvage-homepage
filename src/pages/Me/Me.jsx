import React from 'react';
import PropTypes from 'prop-types';
import { SectionTitle, Paragraph, DarkGrayBlock, RegularBlock } from '../../styles';
import Layout from '../../components/Layout/Layout';
import AboutMe from '../../components/AboutMe/AboutMe';
import Timeline from '../../components/Timeline/Timeline';
import ResumeFrame from '../../components/Resume/ResumeFrame';
// import Education from '../../components/Education/Education';
// import Experience from '../../components/Experience/Experience';
// import Involvement from '../../components/Involvement/Involvement';
import WebsiteInfo from '../../components/WebsiteInfo/WebsiteInfo';
import Gallery from '../../components/Gallery/Gallery';

const Me = ({ user }) => (
  <Layout user={user}>
    <DarkGrayBlock>
      <WebsiteInfo SectionTitle={SectionTitle} Paragraph={Paragraph} />
    </DarkGrayBlock>
    <RegularBlock>
      <AboutMe user={user} SectionTitle={SectionTitle} Paragraph={Paragraph} />
    </RegularBlock>
    <DarkGrayBlock>
      <Timeline SectionTitle={SectionTitle} Paragraph={Paragraph} />
    </DarkGrayBlock>
    {/* <RegularBlock>
      <Education user={user} SectionTitle={SectionTitle} Paragraph={Paragraph} />
    </RegularBlock>
    <DarkGrayBlock>
      <Experience user={user} SectionTitle={SectionTitle} Paragraph={Paragraph} />
    </DarkGrayBlock>
    <RegularBlock>
      <Involvement user={user} SectionTitle={SectionTitle} Paragraph={Paragraph} />
    </RegularBlock> */}
    <RegularBlock>
      <Gallery SectionTitle={SectionTitle} />
    </RegularBlock>
    <DarkGrayBlock>
      <ResumeFrame SectionTitle={SectionTitle} Paragraph={Paragraph} />
    </DarkGrayBlock>
  </Layout>
);

Me.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Me;
