import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  Span,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Pizza</SocialLogo>
            <Span>ozlemozeren©2022</Span>
            <SocialIcons>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Youtube"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
