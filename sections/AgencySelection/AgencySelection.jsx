import Image from "next/image";
import { StyledAgencyContainer, StyledCenteredTitle, StyledContentContainer, StyledImageContainer, StyledSubTitle } from "./elements";

export const AgencySelection = ({ image, title, description, cards }) => {
  return (
    <StyledAgencyContainer>
      <StyledCenteredTitle>{title}</StyledCenteredTitle>
      <StyledSubTitle>{description}</StyledSubTitle>
      <StyledContentContainer>
        <StyledImageContainer>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
        </StyledImageContainer>
      </StyledContentContainer>
    </StyledAgencyContainer>
  );
};
