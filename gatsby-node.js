const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  const result = await graphql(`
    query {
      allDataJson(filter: {type: {eq: "item"}}) {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  result.data.allDataJson.edges.forEach(({ node }) => {
    createPage({
      path: `/item/${node.id}`,
      component: path.resolve(`./src/templates/item.js`),
      context: {
        id: node.id,
      },
    })
  })
}