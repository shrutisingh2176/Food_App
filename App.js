import React from "react";
import ReactDOM from "react-dom/client";


const Header =() => {
    return(
        <div className ="header">
            <div className="logo-container">
                <img className = "logo" src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"/>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li> About Us</li>
                    <li> Contact Us</li>
                    <li> Cart </li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: "#f0f0f0",
}




 const RestrauntCard = (props) =>{
    console.log(props);
    return(
        <div className="res-card" style={styleCard}>
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbQMgD79WJwULTkrE5C-MsHcUMyKozMq-Kw&s"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
 }



const Body = () =>{
    return(
        <div className="Body" >
            <div className="search">Search</div>
            <div className="res-container">
                <RestrauntCard resName="Meghana Foods" cuisine="Biryani,North Indian , Asian"/> 
                <RestrauntCard  resName="KFC" cuisine="Burger,Cold drink,Fast food"/> 

            </div>
        </div>
    )
}



const AppLayout =() => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(<AppLayout/>);
  