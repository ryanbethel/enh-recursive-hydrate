import arc from '@architect/functions'

async function http(req) {
  return {
    html:'<div>something</div>'
  }
}


export const handler = arc.http.async(http)