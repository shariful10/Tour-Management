import React from "react";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/logo.png"

const Header = () => {
	return (
		<header className="header">
			<Container>
				<Row>
               <div className="nav__wrapper d-flex align-items-center juutify-content-between">
                  {/* <==<<=== Logo ===>>==> */}
                  <img src={logo} alt="" />
               </div>
            </Row>
			</Container>
		</header>
	);
};

export default Header;
