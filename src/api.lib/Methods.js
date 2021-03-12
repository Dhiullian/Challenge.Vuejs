async function baseRequest(method, route) {
    const headers = { 'Content-Type': 'application/json' }

    const resp = await fetch(`${route}`, Object.assign({
        method,
        headers
    }))

    return await resp.json()    
}

export const GET = (route) => baseRequest('GET', route)