import { useId, useState } from "react"

const useSearchForm  = ({idText, idTechnology, idModalidad, idNivel, idType, onSearch, onTextFilter}) =>{
    const [searchText, setSearchText] = useState("")
    const handleChange = (event) =>{
        
        const formData = new FormData(event.currentTarget)

        const filters = {
            serch: formData.get(idText),
            technology: formData.get(idTechnology),
            modalidad: formData.get(idModalidad),
            nivel: formData.get(idNivel),
            type: formData.get(idType)
            
        }
           
        onSearch(filters)
    }

    const handleTextChange = (event) => {
        const text = event.target.value
        setSearchText(text)
        onTextFilter(text)
    }

    return{
        searchText,
        handleChange,
        handleTextChange
    }
}


function SearchFormSection ( {onSearch, onTextFilter }){
    const idText = useId()
    const idTechnology = useId()
    const idModalidad = useId()
    const idNivel = useId()
    const idType = useId()

    const {
        searchText,
        handleChange,
        handleTextChange
    } = useSearchForm ({idTechnology, idModalidad, idNivel, idType, onSearch, onTextFilter})
   
    return (
        <section className="jobs-search">
                <h2>Encuentra tu próximo trabajo</h2>
                <p>Explora miles de oportunidades en el sector tecnológico.</p>
                
                <form onChange={handleChange} role="search">
                    <div className="search-bar">
                        <span>
                            <svg  xmlns="http://www.w3.org/2000/svg"  
                            width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  
                            stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round" 
                            className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                        </span>
                    
                        <input 
                         name={idText} id="buscador" type="text" placeholder="Buscar trabajos"
                         onChange={handleTextChange}
                        />
                    </div>
                    <div className="search-filters">
                        <select name={idTechnology} id="filtro-tecnologia">
                            <option value="">Tecnología</option>
                            <optgroup value="">
                                <option value="javascript">JavaScript</option>
                                <option value="python">Python</option>
                                <option value="react">React</option>
                                <option value="sql">Sql</option>
                                <option value="nosql">NoSql</option>
                                <option value="linux">Linux</option>
                                <option value="node.js">Node js</option>
                                <option value="express">Express</option>
                                <option value="typescript">TypeScript</option>
                                <option value="tailwindcss">Tailwindcss</option>
                                <option value="selenium">Selenium</option>
                                <option value="cypress">Cypress</option>
                                <option value="playwright">Playwright</option>
                                <option value="doker">Doker</option>
                                <option value="scrum">Scrum</option>it
                                <option value="it">IT</option>

                            </optgroup>
                        </select>
                        <select name={idModalidad} id="filtro-ubicacion">
                            <option value="">Ubicación</option>
                            <optgroup value="">
                                <option value="remoto">Remoto</option>
                                <option value="cdmx">Ciudad de méxico</option>
                                <option value="medellin">Medellin</option>
                                <option value="bogota">Bogotá</option>  
                                <option value="barcelona">Barcelona</option> 
                                <option value="bsas">Buenos Aires</option>  
                                <option value="madrid">Madrid</option> 
                                <option value="valencia">Valencia</option>  
                                <option value="santiago">Santiago de chile</option> 
                                <option value="lima">Lima</option>  
                                <option value="monterrey">Monterrey</option>                           
                            </optgroup>
                        </select>
                        <select name={idType} id="filtro-tipo-de-contrato">
                            <optgroup value="">
                                <option value="">Tipo de contrato</option>
                                <option value="full-time">Full-time</option>
                                <option value="part-time">Part-time</option>
                                <option value="freelance">Freelance</option>
                                <option value="internship">Internship</option>
                            </optgroup>
                        </select>
                        <select name={idNivel} id="filtro-nivel-de-experiencia">
                            <optgroup value="">
                                <option value="">Nivel de experiencia</option>
                                <option value="junior">Junior</option>
                                <option value="mid-level">Mid-level</option>
                                <option value="senior">Senior</option>
                                <option value="lead">Lead</option>  
                            </optgroup> 
                        </select>
                    </div>
                      
                </form>
        </section>
    )
}
export default SearchFormSection

