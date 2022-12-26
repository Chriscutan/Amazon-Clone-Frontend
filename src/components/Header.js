import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import useStateValue from "../StateProvider";
import { auth } from "../firebase";
import { signOut, getAuth } from "firebase/auth";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const auth = getAuth();

  const handleAuthentication = () => {
    if (user) {
      //sign out
      signOut(auth)
        .then(() => {
          console.log("Success");
        })
        .catch((error) => alert(error.code + error.message));
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header_logo"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input className="header_searchinput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/signin"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {!user ? "Hello Guest" : "Hello " + user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
