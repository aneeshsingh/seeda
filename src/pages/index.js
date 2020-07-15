import React from "react"
import HomePage from "../components/Sections/HomePage"
import "../assets/Style.css"
import { graphql } from "gatsby"
import { Hemlet, Helmet } from "react-helmet"
export default ({ data }) => {
  //console.log(data.wpcontent.pages.edges)
  return (
    <div>
      <Helmet>
        <title>Seeda | Generate intelligent demand for your business</title>
        <meta
          name="description"
          content="Seeda is an all in one martech platform for businesses seeking to drive scalable demand for its product and services. Our platform ensures you get quality and speed and are in control every step of the way"
        />
        <meta
          name="keywords"
          content="Demand Generation, Data Extraction, Data Crawling"
        />
      </Helmet>
      {data.wpcontent.pages.edges.map(page => (
        <HomePage key={page.node.id} title={page.node.Homepage} />
      ))}
    </div>
  )
}

export const query = graphql`
  {
    wpcontent {
      pages(where: { title: "Home" }) {
        edges {
          node {
            id
            status
            title
            content
            Homepage {
              fieldGroupName
              headerBannerTitle
              headerDescription
              section2Description
              section2Heading
              section3Description
              section3Heading
              section4Description
              section4Heading
              section2Features {
                description
                heading
                image {
                  mediaItemUrl
                }
              }
              headerImage {
                mediaItemUrl
              }
              section3Items {
                description
                heading
                icon {
                  mediaItemUrl
                }
              }
              section4Image {
                mediaItemUrl
              }
              facebookLink
              footerDescription1
              footerHeading1
              footerLogo {
                mediaItemUrl
              }
              footerLogoText
              headerLogo {
                mediaItemUrl
              }
              section5Description
              section5Heading
              section5Image {
                mediaItemUrl
              }
              twitterLink
            }
          }
        }
      }
    }
  }
`
