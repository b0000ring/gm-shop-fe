const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  const items = await graphql(`
    query {
      allMongodbCybergeekItems {
        edges {
          node {
            code
          }
        }
      }
    }
  `)
  items.data.allMongodbCybergeekItems.edges.forEach(({ node }) => {
    createPage({
      path: `/item/${node.code}`,
      component: path.resolve(`./src/templates/item.js`),
      context: {
        code: node.code,
      },
    })
  })

  const groups = await graphql(`
    query {
      allDataJson(filter: {type: {eq: "collection"}}) {
        edges {
          node {
            id
            name
            value
          }
        }
      }
    }
  `)

  groups.data.allDataJson.edges.forEach(({ node }) => {
    createPage({
      path: `/catalog/${node.name}`,
      component: path.resolve(`./src/templates/group.js`),
      context: {
        name: node.name,
      },
    })
  })
}
