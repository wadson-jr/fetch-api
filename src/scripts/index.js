<<<<<<< HEAD
import { getUser } from "./services/user.js"
import { getRepos } from "./services/repos.js"
import { getEvents } from "./services/events.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if (validadeEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if (validadeEmptyInput(userName)) return
        getUserData(userName)
    }
})

    function validadeEmptyInput(userName) {
        if (userName.length === 0) {
            alert('Preencha o campo com um Nome de Usuário do GitHub')
            return true
        }
    }

async function getUserData(userName) {
    const userResponse = await getUser(userName)

    if (userResponse.status === '404') {
        alert("Usuário não encontrado")
        return
    }

    const repositoriesResponse = await getRepos(userName)

    const eventsResponse = await getEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)

    screen.renderUser(user)
    screen.renderEvents(user)
=======
import { getUser } from "./services/user.js"
import { getRepos } from "./services/repos.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if (validadeEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if (validadeEmptyInput(userName)) return
        getUserData(userName)
    }
})

function validadeEmptyInput(userName) {
    if (userName.length === 0) {
        alert('Preencha o campo com um Nome de Usuário do GitHub')
        return true
    }
}

async function getUserData(userName) {
    const userResponse = await getUser(userName)

    if (userResponse.status === '404') {
        alert("Usuário não encontrado")
        return
    }

    const repositoriesResponse = await getRepos(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)
>>>>>>> fcf530bbf688bd4cc2f1b6c09fcc43328325349c
}