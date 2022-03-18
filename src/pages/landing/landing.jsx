import main from '../../assets/images/cloud-services.png';
import './landing.css';


const Landing = () => {
  return (
    <main>
      <div className='container page'>
        <div className='info'>
          <h1>HELPING <span>YOU</span> MAKE BETTER TECHNOLOGY DECISIONS.</h1>
          <p>Your business communications should fit your business. A good consultant knows that your technology needs are unique. Communications Advantage, Inc. brings experience and expertise in Unified Communications and Telecom Expense Management to your individual business requirements.</p>
        </div>
        <img src={main} alt='main img' className='img main-img cloud'/>
      </div>
    </main>
  )
};

export default Landing;
