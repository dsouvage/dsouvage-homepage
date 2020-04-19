import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import {
  SectionTitle, Paragraph, DarkGrayBlock, RegularBlock,
} from '../../styles';
import AboutMe from '../../components/AboutMe/AboutMe';
import Education from '../../components/Education/Education';
import Experience from '../../components/Experience/Experience';
import Involvement from '../../components/Involvement/Involvement';
import WebsiteInfo from '../../components/WebsiteInfo/WebsiteInfo';

const Me = ({ user }) => (
  <Layout user={user}>
    <DarkGrayBlock>
      <WebsiteInfo SectionTitle={SectionTitle} Paragraph={Paragraph} />
    </DarkGrayBlock>
    <RegularBlock>
      <AboutMe user={user} SectionTitle={SectionTitle} Paragraph={Paragraph} />
    </RegularBlock>
    <DarkGrayBlock>
      <Education user={user} SectionTitle={SectionTitle} Paragraph={Paragraph} />
    </DarkGrayBlock>
    <RegularBlock>
      <Experience user={user} SectionTitle={SectionTitle} Paragraph={Paragraph} />
    </RegularBlock>
    <DarkGrayBlock>
      <Involvement user={user} SectionTitle={SectionTitle} Paragraph={Paragraph} />
    </DarkGrayBlock>
  </Layout>
);

Me.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Me;
