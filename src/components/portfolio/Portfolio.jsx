import applications from './applications.json';

const Portfolio = () => {
    return (
        <div id='portfolio'>
            <h1>Portfolio</h1>

            <div id="applications">
                {applications.map(app => 
                    <div className="application">
                        <img src={app.image} alt="" />
                        <div className="info">
                            <h2>{app.title}</h2>
                            <a href={app.github}>Github</a>
                            <a href={app.website}>Website</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Portfolio;