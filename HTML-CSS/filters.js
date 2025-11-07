const filter = document.querySelector('#filtro-ubicacion')

filter.addEventListener('change', function () {
    const jobs = document.querySelectorAll('.job-listing-card')
    const selectedValue = filter.value
    jobs.forEach(job=> {
    const modalidad = job.getAttribute('data-modalidad') 
    const isShown = selectedValue === '' || selectedValue === modalidad
    job.classList.toggle('is-hiden', !isShown)
    })
})