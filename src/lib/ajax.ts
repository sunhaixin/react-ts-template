import { fetch } from 'whatwg-fetch'
import CONFIG from '../config'

let timer: any = null

function obj2search (obj: any) {
  obj = obj || {}
  let query = '?'

  Object.keys(obj).map(v => {
    query += `${v}=${obj[v]}&`
  })

  return query.slice(0, -1)
}

interface Options {
  method: string,
  headers: Object,
  body: Object,
}
async function ajax(url: string, options: Options) {
  let opts: {
    method: string,
    body: Object,
    headers: Object,
    credentials: string
  } = {
    method: 'GET',
    body: {},
    headers: {},
    credentials: 'include',
  }
  let headers = {
    'Content-Type': 'application/json'
  }
  headers = Object.assign({}, headers, options.headers)
  opts = Object.assign({}, opts, options)
  opts.headers = headers

  const method = opts.method.toUpperCase()
  let profix = CONFIG.API

  return new Promise(async (resolve) => {
    if (method === 'GET') {
      const str = obj2search(opts.body)
      url = profix + url + str
      delete opts.body
    } else if (method === 'POST' || method === 'PUT') {
      url = profix + url
      if (!(opts.body instanceof FormData)) {
        opts.body = JSON.stringify(opts.body)
      } else {
        delete opts.headers
      }
    }

    try {
      clearTimeout(timer)
      timer = setTimeout(() => {
        clearTimeout(timer)
        resolve(null)
      }, 8000)

      const res = await fetch(url, opts)
      const resJson = await res.json()

      clearTimeout(timer)
      resolve(resJson)
    } catch (e) {
      clearTimeout(timer)
      resolve(null)
    }
  })
}

export default ajax
