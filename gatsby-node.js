/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { slugify } = require('./src/util/utilityFunction')
const path = require('path')
const authors = require('./src/util/authors')
const _ = require('lodash')


exports.onCreateNode = ({ node, actions}) => {
    const { createNodeField } = actions
    if(node.internal.type === 'MarkdownRemark'){
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle,
        })
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
   const templates = {
        singlePost: path.resolve('src/templates/single-post.js'),
        tagsPage: path.resolve('src/templates/tags-pages.js'),
        tagPosts: path.resolve('src/templates/tag-posts.js'),
        postList: path.resolve('src/templates/post-list.js'),
        authorPosts: path.resolve('src/templates/author-posts.js')
   
    }


    return graphql(`
       {
           allMarkdownRemark{
               edges{
                   node{
                       frontmatter{
                           author
                           tags
                       }
                       fields{
                           slug
                       }
                   }
               }
           }
       }
    `).then(res => {
        if(res.errors) return Promise.reject(res.errors)
        const posts = res.data.allMarkdownRemark.edges
        //create single post
        posts.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: templates.singlePost,
                context: {
                    //passing slug for template to use to get post
                    slug: node.fields.slug,
                    //find authors imageUrl from authors and pass it to the singlepost template
                    imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl
                },
            })
        });
        //Get All Tags
        let tags = []
        _.each(posts, edge => {
            if(_.get(edge, 'node.frontmatter.tags')){
                tags = tags.concat(edge.node.frontmatter.tags)
       
            }
            })
            //['design', 'code', ....]
            let tagPostCounts = {}
            tags.forEach(tag => {
                tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
            })

            tags = _.uniq(tags)
     //create tags page
            createPage({
                path: `/tags`,
                component: templates.tagsPage,
                context: {
                    tags,
                    tagPostCounts
                },
            })
            //Create tags posts pages
            tags.forEach(tag => {
                createPage({
                    path: `/tag/${slugify(tag)}`,
                    component: templates.tagPosts,
                    context: {
                        tag
                    }
                })
            })
            const postPerPage = 2
            const numberOfPage = Math.ceil(posts.length / postPerPage)

            Array.from({ length: numberOfPage}).forEach((_, index) => {
                const isFirstPage = index === 0
                const currentPage = index + 1

                if(isFirstPage) return

                createPage({
                    path:  `/page/${currentPage}`,
                    component: templates.postList,
                    context: {
                        limit: postPerPage,
                        skip: index * postPerPage,
                        currentPage,
                        numberOfPage
                    }
                })
            })

            authors.forEach(author => {
                createPage({
                    path: `/author/${slugify(author.name)}`,
                    component: templates.authorPosts,
                    context: {
                        authorName: author.name,
                        imageUrl: author.imageUrl
                    }
                })
            })
    })
}