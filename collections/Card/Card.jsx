
import Image from "next/image";
import {
  StyledCard,
  StyledCardDescription,
  StyledCardDescriptionTitle,
  StyledIconContainer,
  StyledTinyHeading,
} from "./elements";

export default function Card({ title, description, icon }) {
  return (
    <StyledCard>
      <StyledIconContainer>
        <Image
          layout="fixed"
          src={icon}
          alt={icon}
          width="35px"
          height="35px"
        />
      </StyledIconContainer>
      <StyledCardDescription>
        <StyledTinyHeading>{title}</StyledTinyHeading>
        <span style={{wordBreak: 'break-word'}} dangerouslySetInnerHTML={{__html: description}}></span>
      </StyledCardDescription>
    </StyledCard>
  );
} 
