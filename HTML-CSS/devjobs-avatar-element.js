class DevJobsAvatar extends HTMLElement {
    constructor() {
        super(); // Llamamos al constructor de la clase padre
    }
    render() {
        this.innerHTML = `
            <img 
            
        `
    }
}

customElements.define('devjobs-avatar', DevJobsAvatar);