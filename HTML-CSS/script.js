
const jobsListingsSection = document.querySelector('.jobs-listings')

jobsListingsSection.addEventListener('click', (event) => {
    const element = event.target

    if(element.classList.contains('button-apply-job')){
        element.textContent = 'Aplicado'
        element.classList.add('is-applied')
        element.disabled = true
    }
})

const filter = document.querySelector('#filtro-ubicacion')
const jobs = document.querySelectorAll('.job-listing-card')

filter.addEventListener('change', function () {
    const selectedValue = filter.value

    jobs.forEach(job=> {
    const modalidad = job.dataset.modalidad 

    if (selectedValue === '' || selectedValue === modalidad) {
        job.style.display = 'flex'
    } else {
        job.style.display = 'none'
    }
    })
})
