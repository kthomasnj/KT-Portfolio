
export default function Nav({setPage}) {
    return (
      <nav>
        <h1>Keith Thomas</h1>
        <div>
          <button onClick={()=>setPage('portfolio')}>Portfolio</button>
          <button onClick={()=>setPage('contact')}>Contact</button>
          <button onClick={()=>setPage('resume')}>Resume</button>
        </div>
      </nav>
    )
};