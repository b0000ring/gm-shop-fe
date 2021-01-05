const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  const items = await graphql(`
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
  items.data.allDataJson.edges.forEach(({ node }) => {
    createPage({
      path: `/item/${node.id}`,
      component: path.resolve(`./src/templates/item.js`),
      context: {
        id: node.id,
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

  console.log(JSON.stringify(groups, null, 4))
}
