import { g, auth, config } from '@grafbase/sdk'

const user=g.model('User',{
  name:g.string().length({min:2,max:20}),
  email:g.string().unique(),
  avatarUrl:g.string(),
  description:g.string().optional(),
  githubUrl:g.url().optional(),
  projects:g.relation()
})

const Project=g.model('Project',{
  description:g.string(),
  url
})
export default config({
  schema: g

})
