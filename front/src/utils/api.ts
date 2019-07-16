export async function callApi(method: string, url: string, path: string, data?: any, token?: string) {
  const res = await fetch(url + path, {
    method,
    body: JSON.stringify(data),
    headers: {
      'Cookie': token
    }
  })
  return await res.json()
}