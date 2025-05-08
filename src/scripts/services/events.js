import { baseUrl } from "../variables.js"

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events`)
    const events = await response.json()
    return events
}

export { getEvents }