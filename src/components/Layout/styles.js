import styled from 'styled-components';
import { Content } from 'carbon-components-react/lib/components/UIShell';

// eslint-disable-next-line import/prefer-default-export
export const StyledContent = styled(Content)`
  min-height: 100vh;
  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`;
