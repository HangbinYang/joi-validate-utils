'use strict'

module.exports = {

  invalidHandler: async (ctx, next) => {
    if (ctx.invalid) {
      return ctx.bad(ctx.invalid)
    }else {
      await next()
    }
  },

  jsonBody: (body) => {
    return {
      type: 'json',
      body: body,
      continueOnError: true
    }
  },

  queryBody: (query) => {
    return {
      query: query,
      continueOnError: true
    }
  }
}