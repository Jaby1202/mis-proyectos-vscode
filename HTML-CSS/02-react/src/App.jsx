import JobCard from './components/JobCard'                                                                                           
import Header from './components/Header'
import Footer from './components/Footer'
import SearchFormSection from './components/SearchFormSection'
import Pagination  from './components/Pagination'
import JobListings from './components/JobListings'
function App() {
  return (
    <>
        <Header />
        <main>  
            <SearchFormSection />
            
            <section>
                <JobListings />
                <JobCard
                        job={{
                          titulo : "Desarrollador/a Frontend React.js",
                          ubicacion: "Remoto",
                          empresa : "Tech Solutions",
                          descripcion : "Unete a nuestro equipo como desarrollador/a frontend especializado trabaja en proyectos innovadores y colabora con un equipo dinamico.",
                          data : ['React', 'TypeScript', 'CSS']
                        }}
                  />


                <Pagination currentPage={5} totalPages={8} />
                
            </section>
        </main>

        <Footer />
           
    
    </>
  )
}

export default App
