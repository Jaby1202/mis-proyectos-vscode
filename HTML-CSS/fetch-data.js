const conteiner = document.querySelector('.jobs-listings')
fetch ('/data.json')
    .then((response) => {
        return response.json()
    })
    .then((jobs) => {
        jobs.forEach((job) => {
            const article = document.createElement('article')
            article.className = 'job-listing-card'

            article.dataset.ubicacion = job.data.ubicacion
            article.dataset.technology = job.data.technology
            article.dataset.nivel = job.data.nivel
            article.innerHTML = `
                <div>
                    <h4>${job.titulo}</h4>
                    <small>${job.empresa} | ${job.ubicacion}</small>
                    <p> ${job.descripcion}</p>
                </div>
                <button  class="button-apply-job">Aplicar</button>
            `
            conteiner.appendChild(article)  
        })
        
    })