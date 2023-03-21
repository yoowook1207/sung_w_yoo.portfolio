import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  Heading2,
  LinkWrap,
} from "./InfoElements";
import { Button } from "../ButtonElement";
import { ImNewTab } from "react-icons/im";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline2,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  linkURL,
  deployedURL,
  button1Label,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine lightText={lightText}>{topLine}</TopLine>
                <Heading2 lightText={lightText}>{headline2}</Heading2>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}> {description}</Subtitle>
              </TextWrapper>
              <LinkWrap>
                <Button href={deployedURL} target="_blank" primary={!lightBg}>{button1Label}&nbsp;<ImNewTab/></Button>
              </LinkWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
