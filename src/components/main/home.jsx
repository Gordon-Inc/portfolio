import './home.css';
function Home() {

    window.onscroll = function () {
        let scrollY = this.scrollY;
        console.log(scrollY);
        name()
        title()
    }

    const name = () => {
        const elem = document.getElementById('name');
        if (window.scrollY > 325) {
            elem.style.display = 'none';
        } else {
            elem.style.display = 'block'
        }
    }

    const title = () => {
        const elem = document.getElementById('title');
        if (window.scrollY > 497) {
            elem.style.display = 'none';
        } else {
            elem.style.display = 'block'
        }
    }

    const scrollDown = () => {

    }

    return (
        <div className="home">
            <h1 id='name'>Robert Gordon</h1>
            <h2 id='title'>Full Stack Software Developer</h2>
            <div className='learn-more' onClick={scrollDown}>
                <p>LEARN MORE...</p>
                <img src="https://user-images.githubusercontent.com/96712943/201760967-f0f8bef8-b55e-4d0f-b94a-816f16497cac.png" alt="down-arrow" id="down"></img>
            </div>
        </div>
    )
}

export default Home