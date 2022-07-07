import { Button } from "@/styles/Buttons";
import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import {
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
  ContactCard,
  ContactCardImage,
  ContactCardContent,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";

export const Contacts = () => {
  return (
    <ContactSection>
      <Container>
        <ContactSectionContent>
          <ContactSectionText>
            <Text type="heading2" color="grey4">
              Let's set up a conversation and <Text as="span" type="heading2" color="brand1">develop our creativity</Text> together?
            </Text>
            <Text color="grey2" type="body1">
              Advertise your brand organically within Dribbble’s design
              inspiration feed.
            </Text>
          </ContactSectionText>
          <ContactsCards>
            <ContactCard>
              <ContactCardImage className="wpp">
                <FaWhatsapp color="#fff" size={24}/>
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  My Whatsapp
                </Text>
                <Text color="grey2" type="body2">
                  I'm available for a voice chat, let's about creativity
                  together?
                </Text>
                <Text as="a" color="grey2" type="body2">
                  Talk Now
                </Text>
              </ContactCardContent>
            </ContactCard>
            <ContactCard>
              <ContactCardImage className="email">
                <FaEnvelopeOpen color="#fff" size={24}/>
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  My email
                </Text>
                <Text color="grey2" type="body2">
                  Send me an email reporting feedbacks, suggestions and ideas
                </Text>
                <Text as="a" color="grey2" type="body2">
                  Send email now
                </Text>
              </ContactCardContent>
            </ContactCard>
            <ContactCard>
              <ContactCardImage className="linkedin">
                <FaLinkedin color="#fff" size={24}/>
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  My LinkedIn
                </Text>
                <Text color="grey2" type="body2">
                  We can create more constant interactions as well as a sharing
                  network
                </Text>
                <Text as="a" color="grey2" type="body2">
                  Go to Telegram Now
                </Text>
              </ContactCardContent>
            </ContactCard>
          </ContactsCards>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};
