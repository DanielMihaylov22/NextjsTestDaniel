import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "../../components";

export const StyledAgencyContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  background-image: url("/img/background.png");
  align-items: center;
  justify-content: center;
  padding: 5rem;
  flex-direction: column;
`;

export const StyledCenteredTitle = styled((props) => (
  <SectionBigHeading {...props} />
))`
  margin: 0;
  color: black;
  font-family: sans-serif;
`;
export const StyledSubTitle = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
  color: black;
  font-family: sans-serif;
`;

export const StyledContentContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  flex-direction: column;
  gap: 3rem;
`;
export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 15.03rem;
  max-height: 30rem;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  flex-direction: column;
  display: flex;
  gap: 1rem;
`;
