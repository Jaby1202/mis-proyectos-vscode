class DevJobsAvatar extends HTMLElement {
    constructor() {
        super(); // Llamamos al constructor de la clase padre
        this.attachShadow({ mode: 'open' }); // Adjuntamos un shadow DOM
    }
    createurl(service, username) {
        return  `https://unavatar.io/${service}/${username}`

    }

    render() {
        const service = this.getAttribute('service') ?? 'github'
        const username = this.getAttribute('username') ?? 'midudev'
        const size = this.getAttribute('size') ?? '40'
        const url = this.createurl(service, username)
        this.shadowRoot.innerHTML = `
            <style>
            img{
                width: ${size}px; height: ${size}px;
                border-radius: 9999px;
                margin-block: 5px;
            }
            </style>
            <img 
                src="${url}"
                alt="Avatar de ${username} "
                class="avatar"
            />
            
        `
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('devjobs-avatar', DevJobsAvatar);