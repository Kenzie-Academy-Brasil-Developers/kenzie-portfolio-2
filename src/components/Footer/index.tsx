import { Container, Flex, Box} from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Footer as FooterWrapper } from "./style";
import { UserImage } from "@/pages/home/style";
import { userData } from "@/utils/userData";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Button } from "@/styles/Buttons";

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <Container>
        <Flex>
          <UserImage
            src={`https://github.com/${userData.githubUser}.png`}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={"70px"}
            height={"70px"}
          />
          <Box css={{marginLeft: "$2"}}>
            <Text type="heading4" color="grey5" css={{marginBottom: "$2"}}>
              Thank you! ✋
            </Text>
            <Text type="body1" color="grey2">
              Follow me on my social networks and let's talk
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Button className="instagram" type="circle" as="a" href=""><FaInstagram/></Button>
          <Button className="facebook" type="circle" as="a" href=""><FaFacebookF/></Button>
          <Button className="linkedin" type="circle" as="a" href=""><FaLinkedinIn/></Button>
        </Flex>
      </Container>
    </FooterWrapper>
  );
};
