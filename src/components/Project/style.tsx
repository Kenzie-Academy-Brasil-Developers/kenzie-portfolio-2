import { styled } from "@/styles/stitches.config"
import { Flex } from "@/styles/Global"
import { Text } from "@/styles/Text";

export const ProjectStack = styled(Flex, {
  margin: "1.25rem 0 1.25rem 0",
});

export const ProjectStackTech = styled("span", {
  backgroundColor: "$grey1",
  color: "$grey2",
  padding: "0  0.5rem",
  borderRadius: "$2",
});

export const ProjectLinks = styled(Flex, {
  marginTop: "2.25rem",
});

export const ProjectLink = styled("a", {
  fontSize: "1rem",
  color: "$grey2",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",

  "&:hover":{
    color: "$grey5"
  },

  [`& svg`]: {
    marginRight: "$1"
  }
});

export const ProjectTitle = styled(Text, {
})

export const Project = styled("article", {
  marginTop: "4rem",
  [`&:first-child`]: {
    [`& ${ProjectTitle}:first-child`]: {
      position: "relative",
      width: "max-content",
      "&::before": {
        content: "New",
        position: "absolute",
        top: "5px",
        right: "-4rem",
        width: "max-content",
        height: "max-content",
        backgroundColor: "$brand2",
        padding: "0 8px",
        borderRadius: "$1",
        fontSize: "$text2"
      }
      
    }
  }
});