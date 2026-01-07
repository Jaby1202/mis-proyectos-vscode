import { use, useEffect, useState } from 'react'     
import jobsData from "../data.json"                                                                                     
import  SearchFormSection  from '../components/SearchFormSection.jsx'
import  Pagination from '../components/Pagination.jsx'
import  JobListings  from '../components/JobListings.jsx'

const RESULT_PER_PAGE = 5

 const useFilters = () => {
  const [filters, setFilters] = useState({
            technology: '',
            modalidad: '',
            nivel: '',
            type: ''   
        })

  const [textToFilter, setTextToFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const [jobs, setJobs] = useState ([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    async function fetchJobs() {
      try{
        setLoading(true)

        const params = new URLSearchParams()
        if (textToFilter) params.append('text', textToFilter)
        if (filters.technology) params.append('technology', filters.technology)
        if (filters.location) params.append('type', filters.location)
        if (filters.experienceLevel) params.append('level', filters.experienceLevel)

        const offset = (currentPage - 1 ) * RESULT_PER_PAGE
        params.append('limit', RESULT_PER_PAGE)
        params.append('offset', offset)

        const queryParams = params.toString()

        const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`)
        const json = await response.json()

        setJobs(json.data)
        setTotal(json.total)

      } catch ( error){
        console.error('Error fetching jobs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  },[filters, textToFilter, currentPage]) 


  const totalPages = Math.ceil (total / RESULT_PER_PAGE)

  
  const handlePageChange = (page) =>{
    console.log ('cambiando la pagina', page)
    setCurrentPage(page)
  }
  const handleSearch = (filters) => {
    setFilters(filters)
    setCurrentPage(1)
  }
  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter)
    setCurrentPage(1)
  }
  return{
    loading,
    jobs,
    total,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
    handleTextFilter
  }
}
export function SearchPage() {
  const{
    loading,
    jobs,
    total,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
    handleTextFilter
  }= useFilters()

  useEffect(() => {
    document.title = `Resultados: ${total}, Pagina ${currentPage} - DevJobs`
  }, [total, currentPage])

 
  return (
    <>
        <main>  
            <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} />
            
            <section>
                {
                  loading ? <p>Cargando Empleos...</p>: <JobListings jobs={jobs}/>
                }
                <JobListings jobs={jobs} />

                <Pagination currentPage ={currentPage} totalPages= {totalPages} onPageChange ={handlePageChange}/>
                
            </section>
        </main>
    </>
  )
}

