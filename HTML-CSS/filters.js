const buscar = document.querySelector('#buscador')

const filter = document.querySelector('#filtro-ubicacion')
const filtera = document.querySelector('#filtro-tipo-de-contrato')
const filterb = document.querySelector('#filtro-nivel-de-experiencia')
const filterc = document.querySelector('#filtro-tecnologia')

function applyFilters() {
    const jobs = document.querySelectorAll('.job-listing-card')

    const buscarValue = buscar.value.toLowerCase().trim()

    const selectedValue = filter.value
    const selectedValuea = filtera.value
    const selectedValueb = filterb.value
    const selectedValuec = filterc.value

    jobs.forEach(job=> {
        const titulo = (job.getAttribute('data-titulo')).toLowerCase()

        const modalidad = job.getAttribute('data-modalidad')
        const contrato = job.getAttribute('data-contrato')
        const nivel = job.getAttribute('data-nivel')
        const technology = job.getAttribute('data-technology')

        const matchsearch = buscarValue === '' || titulo.includes(buscarValue)
        const matchtech = selectedValuec === '' || technology.includes(selectedValuec)

        const matchmodalidad = selectedValue === '' || selectedValue === modalidad
        const matchcontrato = selectedValuea === '' || selectedValuea === contrato
        const matchnivel = selectedValueb === '' || selectedValueb === nivel

        const isShown = matchsearch && matchmodalidad && matchcontrato && matchnivel && matchtech
        
        job.classList.toggle('is-hidden', !isShown)
        
    })

}

filter.addEventListener('change', applyFilters)
filtera.addEventListener('change', applyFilters)
filterb.addEventListener('change', applyFilters)
filterc.addEventListener('change', applyFilters)
buscar.addEventListener('input', applyFilters)
