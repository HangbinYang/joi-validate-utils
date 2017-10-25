# joi-validate-utils
A joi-router's validate utils

##### Denpendency
koa-usual-response

```
const koa = require('koa')
const response = require('koa-usual-response')
const app = new koa()

app.use(response())

app.use(ctx => {
  /** bad request */
  ctx.bad(...)

  /** success */
  ctx.success(...)

  /** error */
  ctx.error(...)

})

```

##### API
``` Javascript
const router = require('koa-joi-router')()
const utils = require('joi-validate-utils')

router.route({
    method: 'post',
    path: '/validation',
    validate: utils.jsonBody({
        name: Joi.string().required()
    }),
    handler: [
        utils.invalidHandler,
        somecontroller.somemethod
    ]
})

```