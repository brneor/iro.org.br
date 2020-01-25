import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
function renderImage(file, props) {
  const vHeight = parseInt(props.height) || file.node.childImageSharp.fixed.height;
  const vWidth = parseInt(props.width) || file.node.childImageSharp.fixed.width;
  console.log(file);
  console.log( "Param: " + vHeight + " x " + vWidth);
  return <Img 
    fluid={file.node.childImageSharp.fluid}
    style={{ 
      height: vHeight,
      width: vWidth
    }}
    className={props.className}
  />
}
const Image = function (props) {
  return <StaticQuery
    query={graphql`
      query {
        images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif|svg/"}}) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
              fixed {
                height
                width
              }
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    `}
    render={({ images }) => renderImage(images.edges.find(image => image.node.relativePath === props.src), props)}
  />
}
export default Image;