import React from "react"
import { Jumbotron } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import styles from "./jumbotron.module.css"

//  styles.hero_reformation_wall

const MainJumbotron = (props) => {
  const data = useStaticQuery(
    graphql`
    query {
      fileName: file(relativePath: { eq: "reformation-wall.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <Jumbotron fluid className={[styles.hero, styles.hero_reformation_wall].join(' ')}>
      </Jumbotron>
    </div>
  );
};

export default MainJumbotron;
