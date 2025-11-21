function Header({ head }){
    
    return (
        <header>
            <a href="/" className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="10" height="10" 
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brackets-angle">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M8 4l-5 8l5 8" />
                    <path d="M16 4l5 8l-5 8" />
                </svg>
                <h1>DevJobs</h1>
        </a>
        <nav>
                <a href="">Inico</a>
                <a href="">Empleos</a>
                <a href="">Empresas</a>
                <a href="">Salarios</a>
        </nav>
        <div>
                <a className="btn-cv" href="">Subir CV</a>
                <devjobs-avatar 
                    service="github" 
                    username="jaby1202"
                    size="40">
                </devjobs-avatar>
        </div>
        </header>
        

    )

}
export default Header