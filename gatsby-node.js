const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const fetch = (...args) =>
  import(`node-fetch`).then(({ default: fetch }) => fetch(...args))

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const result = await fetch(`https://api.github.com/repos/decaporg/decap-cms/releases?per_page=3`)
  const resultData = await result.json()

  createNode({
    releases: resultData,
    id: `decap-releases`,
    parent: null,
    children: [],
    internal: {
      type: `DecapReleases`,
      contentDigest: createContentDigest(resultData),
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const docPage = path.resolve('./src/templates/doc-page.js');
  const blogPost = path.resolve('./src/templates/blog-post.js');
  const featurePage = path.resolve('./src/templates/feature-page.js');

  // get all markdown with a frontmatter path field and title
  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { title: { ne: null } } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors); // eslint-disable-line no-console
    throw Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug } = node.fields;

    let template = docPage;

    if (slug.includes('blog/')) {
      template = blogPost;
    }
    if (slug.includes('features/')) {
      template = featurePage;
    }

    createPage({
      path: slug,
      component: template,
      context: {
        slug,
      },
    });
  });

  // redirects from older URLs
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/docs/add-to-your-site/`,
    toPath: `/docs/basic-steps/`,
  })

  createRedirect({
    fromPath: `/chat`,
    toPath: `https://discord.gg/KZRDXmTm9v`,
  })

  createRedirect({
    fromPath: `/blog/1/`,
    toPath: `/blog/`,
  })

  // Create blog-list pages
  const blogPostListPage = path.resolve('./src/templates/blog-post-list.js');
  const blogPosts = allMarkdown.data.allMarkdownRemark.edges.filter(({ node }) => node.fields.slug.includes('blog/'));
  const blogPostsPerPage = 3
  const numPages = Math.ceil(blogPosts.length / blogPostsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogPostListPage,
      context: {
        limit: blogPostsPerPage,
        skip: i * blogPostsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
};

function pad(n) {
  return n >= 10 ? n : `0${n}`;
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    const { relativePath } = getNode(node.parent);

    let slug = value;

    if (relativePath.includes('blog/')) {
      const date = new Date(node.frontmatter.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const filename = path.basename(relativePath, '.md');
      slug = `/blog/${year}/${pad(month)}/${filename}`;

      createNodeField({
        node,
        name: 'date',
        value: date.toJSON(),
      });
    }

    // used for doc posts
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    // used to create GitHub edit link
    createNodeField({
      node,
      name: 'path',
      value: relativePath,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
  });
};
