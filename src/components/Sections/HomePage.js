import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Banner from "../Banner/Banner"
import ThreeColSection from "../Sections/ThreeColSection"
import AquaBGSection from "../Sections/AquaBGSection"
import ColumnLeft from "../Sections/ColumnLeft"
import "../../assets/Style.css"
import ColumnRight from "../Sections/ColumnRight"
import LogosSections from "../Sections/LogosSections"
const HomePage = props => {
  return (
    <div>
      <Header headerLogo={props.title.headerLogo.mediaItemUrl} />
      <Banner
        title={props.title.headerBannerTitle}
        content={props.title.headerDescription}
        image={props.title.headerImage.mediaItemUrl}
      />
      <ThreeColSection
        heading={props.title.section2Heading}
        description={props.title.section2Description}
        sections={props.title.section2Features}
      />
      <AquaBGSection
        heading={props.title.section3Heading}
        description={props.title.section3Description}
        sections={props.title.section3Items}
      />
      <ColumnRight
        heading={props.title.section4Heading}
        description={props.title.section4Description}
        image={props.title.section4Image}
      />
      {/* <ColumnLeft /> */}
      <LogosSections
        heading={props.title.section5Heading}
        description={props.title.section5Description}
        image={props.title.section5Image.mediaItemUrl}
      />
      <Footer
        twitterLink={props.title.twitterLink}
        facebookLink={props.title.facebookLink}
        footerDescription1={props.title.footerDescription1}
        footerHeading1={props.title.footerHeading1}
        footerLogo={props.title.footerLogo.mediaItemUrl}
        footerLogoText={props.title.footerLogoText}
      />
    </div>
  )
}

export default HomePage
