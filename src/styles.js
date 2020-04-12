/* eslint-disable no-tabs */
import styled from 'styled-components';
import { blue } from '@carbon/colors';

export const SectionTitle = styled.h3` 
	margin-bottom: 0.5rem;
`;

export const DarkGrayBlock = styled.div`
	background-color: rgb(40,40,40);
	border-radius: 10px;
	padding: 15px;
	padding-bottom: 1rem;
`;

export const RegularBlock = styled.div`
	border-radius: 10px;
	padding: 15px;
	padding-bottom: 1rem;
`;

export const Paragraph = styled.p`white-space: pre-wrap;`;

export const Pill = styled.span`
	display: inline-block;
	margin-right: 0.75rem;
	margin-bottom: 0.75rem;
	padding: 0.5rem 1rem;
	background-color: ${blue[20]};
	color: ${blue[70]};
	border: 3px solid ${blue[70]};
	border-radius: 2px;
	font-weight: bold;
`;
