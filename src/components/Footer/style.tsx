import { styled } from "@stitches/react";
import { Button } from '@/styles/Buttons';
import { Container } from '@/styles/Global'

export const Footer = styled("footer", {
    backgroundColor: "$brand1",
    padding: "2rem 0 3rem 0",
    [`& ${Container}`]:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    [`& ${Button}`]:{
        transform: "translateY(-124%)"
    }
})