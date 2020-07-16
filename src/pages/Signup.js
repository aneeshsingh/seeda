import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import SignupForm from "../components/Forms/SignupForm"

const Signup = data => {
  return (
    <div>
      {data.data.wpcontent.pages.edges.map(page => (
        <div key={page.node.id} title={page.node.Homepage}>
          <Header headerLogo={page.node.Homepage.headerLogo.mediaItemUrl} />
          <SignupForm image={page.node.Homepage.signUpPageImage.mediaItemUrl} />
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

export default Signup

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
              twitterLink
              signUpPageImage {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`
