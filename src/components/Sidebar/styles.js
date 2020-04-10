import styled from 'styled-components';
import { SideNav } from 'carbon-components-react/lib/components/UIShell';

// eslint-disable-next-line import/prefer-default-export
export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`;
