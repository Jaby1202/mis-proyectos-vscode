const filter = document.querySelector('#filtro-ubicacion')
const filtera = document.querySelector('#filtro-tipo-de-contrato')

filter.addEventListener('change', function () {
    const jobs = document.querySelectorAll('.job-listing-card')

    const selectedValue = filter.value

    jobs.forEach(job=> {
        const modalidad = job.getAttribute('data-modalidad') 
        const isShown = selectedValue === '' || selectedValue === modalidad
        job.classList.toggle('is-hidden', !isShown)
        
    })
})

filtera.addEventListener('change', function () {
    const jobs = document.querySelectorAll('.job-listing-card')
    const selectedValuea = filtera.value
    jobs.forEach(job=> {
        const contrato = job.getAttribute('data-contrato')
        const isShowna = selectedValuea === '' || selectedValuea === contrato
        job.classList.toggle('is-hidden', !isShowna)
    })
})