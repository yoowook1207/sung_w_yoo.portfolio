import React from 'react'
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
    Heading2} from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText,headline2, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, linkURL, deployedURL, button2Label }) => {
  return (
    <>
     <InfoContainer lightBg={lightBg} id={id}>
         <InfoWrapper>
             <InfoRow imgStart={imgStart}>
                 <Column1>
                 <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading2 lightText={lightText}>{headline2}</Heading2>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}> {description}</Subtitle>
                    {/* <LinkWrap>
                        <Button 
                        href = {linkURL}
                        target="_blank"
                        rel="noreferrer"
                        spy={true}
                        exact="true"
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1: 0}
                        >{buttonLabel}</Button>
                        
                        <Button 
                        href = {deployedURL}
                        target="_blank"
                        rel="noreferrer"
                        spy={true}
                        exact="true"
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1: 0}
                        >{button2Label}</Button>
                    </LinkWrap> */}
                 </TextWrapper>
                 </Column1>
                 <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                 </Column2>
             </InfoRow>
         </InfoWrapper>
         </InfoContainer>   
    </>
  )
}

export default InfoSection