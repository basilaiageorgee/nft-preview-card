import EquilibiiumImage from "../images/image-equilibrium.jpg"
import AvatarImage from "../images/image-avatar.png"
import IconView from "../images/icon-view.svg"
import "./CardNFT.css"

const CardNFT = () => {
    return(
        <div className="NFT-container">
            <div className="NFT-child-component">
                <div className="divoverlay"><img className="iconview"src={IconView} alt="iconimage"/></div>
                <img className="NFT-img" src={EquilibiiumImage}/>

                <a href="#" className="NFT-name">Equilibrium #3429</a>
                <p className="NFT-metadata">Our Equilibrium collection promotes balance and calm.</p>

                <div className="info">
                    <div className="infoitem1">
                        <img src={require("../images/icon-ethereum.svg").default} alt="eth"/> 
                        <p>0.041 ETH</p>
                    </div>

                    <div className="infoitem2">
                        <img src={require("../images/icon-clock.svg").default} alt="days-left"/> 
                        <p>3 days left</p>
                    </div>
                </div>

                <div className="userinfo">
                    <img src={AvatarImage} alt="userimage"/>
                    <p>Creation of <a href="#" className="user_link"><span className="username">Jules Wyvern</span></a></p>
                </div>
            </div>
        </div>
    )
}

export default CardNFT