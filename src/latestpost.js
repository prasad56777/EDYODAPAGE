import "./App.css"
const Latestpost=() =>{
    return(
        <div id="latest-post-section">
        <h2 id="latest-post-heading"> Latest post</h2>
        <p> <i className="fa-solid fa-filter filter-icon"> </i>Filter by Category</p>
        <button className='category-btn-active'>All</button>
        <button className='category-btn'>Artificial Intelligence</button>
        <button className='category-btn'>Cloud Computing</button>
        <button className='category-btn'>DevOps</button>
        <button className='category-btn'>Programming Languages</button>
        <button className='category-btn'>Mobile Appilication Development</button>
        <button className='category-btn'>Technology And Tools</button>
        <button className='category-btn'>Get a Job in a Company</button>
        <button className='category-btn'>Other</button>

      </div>
    )

}
export default Latestpost;
