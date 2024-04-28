import styled from "styled-components";
import { SectionInnerHeading } from "../../components";

export const StyledTinyHeading = styled((props) => (
  <SectionInnerHeading {...props} />
))`
  font-family: sans-serif;
  font-weight: bold;
  font-size: larger;
  margin: 1px;
  color: black;
`;
export const StyledCard = styled(({ ...props }) => <div {...props} />)`
  flex-direction: row;
  display: flex;
  gap: 2rem;
  background: #f5f5f5;
  padding: 2rem;
  font-family: sans-serif;
  border-radius: 0.5rem;
  align-items: center;
  border: 2px solid transparent;
  &:hover,
  &:focus {
    border: 2px solid #0a7cff;

    ${StyledTinyHeading} {
      color: #0a7cff;
      text-decoration: underline;
    }
  }
`;

export const StyledIconContainer = styled(({ ...props }) => <div {...props} />)`
  width: 35px;
  height: 35px;
`;

export const StyledCardDescription = styled(({ ...props }) => (
  <div {...props} />
))`
  flex-direction: column;
  display: flex;
`;
