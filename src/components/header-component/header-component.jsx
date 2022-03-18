import logo from '../../assets/images/favicon.ico';

function Header() {
    return (
        <div className='icon-container'>
            <img src={logo} alt='Communications Advantage' className='logo1' />
            <span className='company'>Communications Advantage, Inc</span>
        </div> 
    )
}

export default Header;