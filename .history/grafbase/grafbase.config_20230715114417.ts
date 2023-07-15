import { g, auth, config } from '@grafbase/sdk'

const user=g.model('User',{
  name:g.string().length({min}),
})

export default config({
  schema: g

})
