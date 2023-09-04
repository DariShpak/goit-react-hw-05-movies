import React from "react"
import {ReactComponent as TMDBIcon} from "icons/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
import {FooterSection, Span, Text} from "./footer.styled"

const Footer = () => {
  return <FooterSection>
      <Span>
        <TMDBIcon width="60" height="42" />
        <Text>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB
        </Text>
        <Text>Built with ❤️ by Dari Shpak</Text>
      </Span>
    </FooterSection>
}

export default Footer
