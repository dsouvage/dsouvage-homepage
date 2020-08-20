/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Me from '../../pages/Me/Me';
import user from '../test-user.json';
import { SectionTitle, Paragraph } from '../../styles';
import WebsiteInfo from '../../components/WebsiteInfo/WebsiteInfo';
import AboutMe from '../../components/AboutMe/AboutMe';
import TimeLine from '../../components/Timeline/Timeline';
import Gallery from '../../components/Gallery/Gallery';
import ResumeFrame from '../../components/Resume/ResumeFrame';

const wrapper = shallow(<Me user={user} />);

describe('loads every component required', () => {
  it('renders without crashing', () => {
    shallow(<Me user={user} />);
  });
  it('renders WebsiteInfo section', () => {
    const wi = <WebsiteInfo SectionTitle={SectionTitle} Paragraph={Paragraph} />;

    expect(wrapper.contains(wi)).toEqual(true);
  });
  it('renders AboutMe section', () => {
    const am = <AboutMe user={user} SectionTitle={SectionTitle} Paragraph={Paragraph} />;

    expect(wrapper.contains(am)).toEqual(true);
  });
  it('renders TimeLine section', () => {
    const tl = <TimeLine SectionTitle={SectionTitle} Paragraph={Paragraph} />;

    expect(wrapper.contains(tl)).toEqual(true);
  });
  it('renders Gallery section', () => {
    const gy = <Gallery SectionTitle={SectionTitle} />;

    expect(wrapper.contains(gy)).toEqual(true);
  });
  it('renders ResumeFrame section', () => {
    const rf = <ResumeFrame SectionTitle={SectionTitle} Paragraph={Paragraph} />;

    expect(wrapper.contains(rf)).toEqual(true);
  });
});
