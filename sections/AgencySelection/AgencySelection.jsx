import Image from "next/image";
import { StyledAgencyContainer, StyledCardContainer, StyledCenteredTitle, StyledContentContainer, StyledImageContainer, StyledSubTitle } from "./elements";
import Card from "../../collections/Card/Card";

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
        <StyledCardContainer>
            {cards.map((item) => (
                <Card {...item} />
            ))}
        </StyledCardContainer>
      </StyledContentContainer>
    </StyledAgencyContainer>
  );
};
