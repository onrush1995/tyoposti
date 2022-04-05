import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt='Tyoposti' className='logo' />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        job <span>tracking</span> App
                    </h1>
                    <p>
                        Before you decide which job search website is best for you, learn about the available options &
                        compare the top-rated online utilities for finding employment.
                    </p>
                    <button className='btn btn-hero'>Login/Register</button>
                </div>

                <img src={main} alt='job hunt' className='img main-img' />
            </div>
        </Wrapper>
    );
};

export default Landing;
