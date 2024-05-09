// import './index.css';
import logo from './logo.svg';

export default function Navbar(){
    return(
        <div className='nav'>
            {/* <img src='logo'/> */}
            {/* <img src='logo'/> */}
            <img src={logo} alt="Logo" />
            <h1>ReactFacts</h1>
            <h2>ReactCourse Project 1</h2>
        </div>
    );
}