import "./home.css";
import blackwallet from '../../assets/images/Metamask.png';
const Home = (props) => {
  const acc = props.account.substring(0,8);
  return (
    <div class = "home">
      <img src= {blackwallet} width = "50" height = "50" />  
      <h2 >{acc}...</h2>
    </div>

  )
}

export default Home;