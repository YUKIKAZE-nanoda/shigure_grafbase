import { g, auth, config } from '@grafbase/sdk'

const user=g.model('User',{
  name:g.string(),
})

export default config({
  schema: g

})
