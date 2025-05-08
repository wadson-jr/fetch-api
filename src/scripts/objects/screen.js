<<<<<<< HEAD
const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
                                        <div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto de Perfil do usuário"/>
                                                <div class="data">
                                                    <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                                                    <p>${user.bio ?? 'Não possui biografia cadastrada'}</p>
                                                    <br>
                                                    <p>Seguidores:${user.followers}</p>
                                                    <p>Seguindo:${user.following}</p>
                                                </div>
                                        </div>`
                                     
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `
            <li>
                <a href= "${repo.html_url}" target="_blank"> ${repo.name}</a>
                <p>
                    ⭐: ${repo.stargazers_count} - 
                    🍴: ${repo.forks_count} - 
                    👀 ${repo.watchers_count} - 
                    🗺: ${repo.language || '🤷‍♂️'}
                </p>
            </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
                                            <div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
    },
    
    renderEvents(user){
        let eventsItens = ''
        
        user.events
            .filter(event => event.type === 'PushEvent' || event.type === 'CreateEvent')
            .slice(0,10)
            .forEach(event =>{
                let message = 'Sem mensagem de Commit'
                if (event.type === 'PushEvent') {
                    message= event.payload.commit?.[0]?.message || message
                }
                eventsItens += `<li>${event.repo.name} - ${message}</li>`
            })
        if(eventsItens){
            this.userProfile.innerHTML += `
                                            <div class="events section">
                                                <h2>Eventos Recentes</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }
    }

}
=======
const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
                                        <div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto de Perfil do usuário"/>
                                                <div class="data">
                                                    <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                                                    <p>${user.bio ?? 'Não possui biografia cadastrada'}</p>
                                                </div>
                                        </div>`
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `
            <li>
                <a "href= ${repo.html_url} target="_blank"> ${repo.name} </a>
            </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
                                            <div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
    }
}
>>>>>>> fcf530bbf688bd4cc2f1b6c09fcc43328325349c
export { screen }