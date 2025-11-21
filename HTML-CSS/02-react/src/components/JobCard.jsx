function JobCard ({ job }) {

    const { title, company, location, salary, description, tags } = job
    return (
            <article className = "job-card">
                <header className = "job-card-header">
                    <h3 className="job-titulo">{job.titulo}</h3>
                    <p className="job-empresa">{job.empresa}</p>
                </header> 

                <div className="job-card-body">
                    <p className="job-ubiacion">{job.ubicacion}</p>
                    <p className="job-salario">{job.salary}</p>
                    <p className="job-descripcion">{job.descripcion}</p>
                </div>   
                
                <footer className="job.card.footer">
                    <span className="job.data">{job.data.join(', ')}</span>
                    <button className="btn-apply">Aplicar</button>
                </footer>
            </article>
    )
}

export default JobCard