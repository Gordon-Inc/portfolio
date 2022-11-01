import './header.css'
export default function Header() {
    return (
        <div id="header">
            <div className="nav">
                <p className='top'></p>
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Accomplishments</a>
                <a href="#">My Journey</a>
                <a href="#">Tech Stack</a>
                <a href="#">Documentation</a>
                <p className='bottom'></p>
            </div>
        </div>
    )
}