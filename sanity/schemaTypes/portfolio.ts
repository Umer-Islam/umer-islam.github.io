export default {
  name: 'Portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'Overview',
      type: 'string',
      title: 'Small overview',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'projectLink',
      type: 'string',
      title: 'Project Link',
    },
    {
      name: 'GithubLink',
      type: 'string',
      title: 'Github Link',
    },
  ],
}
