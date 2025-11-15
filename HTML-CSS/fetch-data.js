const conteiner = document.querySelector('.jobs-listings')
fetch ('./data.json')
    .then((response) => {
        return response.json()
    })
    .then((jobs) => {
        jobs.forEach((job) => {
            const article = document.createElement('article')
            article.className = 'job-listing-card'

            article.dataset.titulo = job.titulo

            article.dataset.modalidad = job.data.modalidad
            article.dataset.technology = job.data.technology
            article.dataset.nivel = job.data.nivel
            article.dataset.contrato = job.data.contrato
            
            article.dataset.technology = Array.isArray(job.data.technology)
                ? job.data.technology.join(',')
                : job.data.technology

            article.innerHTML = `
                <div>
                    <h4>${job.titulo} ${job.cargo}</h4>
                    <small>${job.empresa} | ${job.ubicacion} | ${job.tipo}</small>
                    <p> ${job.descripcion}</p>
                </div>
                <button  class="button-apply-job">Aplicar</button>
            `
            conteiner.appendChild(article)  
        })
        
    })