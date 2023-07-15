import { g, auth, config } from '@grafbase/sdk'

const user=g.model('User',{
  name:g.string().length(),
})

export default config({
  schema: g

})
