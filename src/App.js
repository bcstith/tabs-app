import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN


const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

const fetchData = async () => {
  setLoading(true);

try {
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setJobs(data);
  } catch (error){
    setLoading(false);
  }
}

useEffect(() => {fetchData()},[])

if(loading){return <section className="section loading"><h1>Loading ...</h1></section>}

const { title, dates, duties, company } = jobs[value];

const filterJobs = (id) => {
  setValue(id);
}

  return (
    <section class="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <div className="btn-container">

          {jobs.map((job, index) => {
            return (
              <button key ={index}
              className={`job-btn ${index === value && 'active-btn'}`}
              onClick={() => filterJobs(index)}>{job.company}</button>
            )
          })}

        </div>

        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>

            {duties.map((duty, index) => {
              return(
                <div key={index} className="job-desc"><FaAngleDoubleRight className="job-icon"/> {duty} </div>)
            })}

          <button className="btn">More Info</button>
        </article>
      </div>
    </section>
  )
}

export default App
