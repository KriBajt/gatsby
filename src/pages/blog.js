import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
    <Layout>
        <SEO title="Blog" />
        <div>
            <h1>Ostatni Post</h1>
            {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id}>
                    <h3>{post.node.frontmatter.title}
                        <small>Napisany przez {post.node.frontmatter.author} dnia{post.node.frontmatter.date}</small></h3>
                    <br />
                    <br />
                    <Link to={post.node.frontmatter.path}>Czytaj więcej</Link>
                    <br />
                    <br />
                    <hr />
                </div>
            ))}

        </div>
    </Layout>
)
export const pageQuery = graphql`
    query BlogIndexQuery {
            allMarkdownRemark {
            edges {
            node {
            id
                frontmatter {
            path
                    title
        date
        author
         }
     }
}
}
}`

export default BlogPage
