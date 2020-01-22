import React from "react"
import { Jumbotron } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import styles from "./jumbotron.module.css"

//  styles.hero_reformation_wall

const MainJumbotron = (props) => {
  const data = useStaticQuery(
    graphql`
    query getImages($src: String){
      fileName: file(relativePath: { eq: $src }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `, {src: "heidelberg.jpg"})
  console.log('image:');
  console.log(props.src);
  return (
    <div>
      <Jumbotron fluid className={[styles.hero, styles.hero_reformation_wall].join(' ')}>
      </Jumbotron>
    </div>
  );
};

export default MainJumbotron;
