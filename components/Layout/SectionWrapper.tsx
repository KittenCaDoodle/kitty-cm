import React from "react"
import { Container, Flex } from "theme-ui"

const SectionWrapper = ({
  as = null,
  backgroundColor = "background",
  children,
  flex = 'column',
}) => {
  return (
    <Flex
      sx={{
        padding: "3.2rem 0",
        backgroundColor,

        "@media screen and (max-width: 1080px)": {
          padding: '3.2rem 20px'
        }
      }}
    >
      <Container
        sx={{
          display: "flex",
          gap: "1.6rem",
          flexDirection: flex as 'row' | 'row-reverse' | 'column' | 'column-reverse',
        }}
        as={as}
      >
        {children}
      </Container>
    </Flex>
  )
}

export default SectionWrapper
