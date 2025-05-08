<<<<<<< HEAD
const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    events: '',

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories
    },
    setEvents(events){
        this.events = events
    }
}

=======
const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },
    setRepositories(repositories) {
        this.repositories = repositories
    }
}

>>>>>>> fcf530bbf688bd4cc2f1b6c09fcc43328325349c
export { user }