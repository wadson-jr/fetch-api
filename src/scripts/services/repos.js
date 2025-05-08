<<<<<<< HEAD
import { baseUrl, repositoriesQuantity } from "../variables.js"

async function getRepos(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

=======
import { baseUrl, repositoriesQuantity } from "/src/scripts/variables.js"

async function getRepos(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

>>>>>>> fcf530bbf688bd4cc2f1b6c09fcc43328325349c
export { getRepos }