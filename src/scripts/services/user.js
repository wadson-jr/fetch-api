<<<<<<< HEAD
import { baseUrl } from "../variables.js"

async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

=======
import { baseUrl } from "/src/scripts/variables.js"

async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

>>>>>>> fcf530bbf688bd4cc2f1b6c09fcc43328325349c
export { getUser }