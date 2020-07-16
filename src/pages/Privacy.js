import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import PrivacyComponent from "../components/Forms/PrivacyComponent"
import { graphql } from "gatsby"

const Privacy = data => {
  return (
    <div>
      {data.data.wpcontent.pages.edges.map(page => (
        <div key={page.node.id} title={page.node.Homepage}>
          <Header headerLogo={page.node.Homepage.headerLogo.mediaItemUrl} />
          <PrivacyComponent privacy={page.node.Homepage.privacyPolicy} />
          <Footer
            twitterLink={page.node.Homepage.twitterLink}
            facebookLink={page.node.Homepage.facebookLink}
            footerDescription1={page.node.Homepage.footerDescription1}
            footerHeading1={page.node.Homepage.footerHeading1}
            footerLogo={page.node.Homepage.footerLogo.mediaItemUrl}
            footerLogoText={page.node.Homepage.footerLogoText}
          />
        </div>
      ))}
    </div>
  )
}

export default Privacy

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
              privacyPolicy
              twitterLink
            }
          }
        }
      }
    }
  }
`
