import './header.css'
export default function Header() {
    return (
        <div id="header">
            <div id="navbar">
                <div className="nav">
                    <p className='top'></p>
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="accomplishments">Accomplishments</a>
                    <a href="myJourney">My Journey</a>
                    <a href="techStack">Tech Stack</a>
                    <a href="documentation">Documentation</a>
                    <p className='bottom'></p>
                </div>
            </div>
        </div>
    )
}