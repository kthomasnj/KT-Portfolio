
export default function Nav({setPage}) {
    return (
      <nav>
        <button onClick={()=>setPage('about')}>Keith S. Thomas</button>
        <div>
          <button onClick={()=>setPage('portfolio')}>Portfolio</button>
          <button onClick={()=>setPage('contact')}>Contact</button>
          <button onClick={()=>setPage('resume')}>Resume</button>
        </div>
      </nav>
    )
};