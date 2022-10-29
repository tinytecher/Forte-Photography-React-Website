import React from "react";
import "./style.css";
import NavBar from "../Navbar/NavBar.js";
import Footer from "../Footer/Footer";
import maternity from "../../images/maternity.jpg";

export default function MaternityPage() {
	return (
		<>
			<NavBar />
			<div className='maternity-container'>
				<div className='maternity-col1'>
					<img
						src={maternity}
						className='maternity1'
						alt='maternity1'
						style={{ flex: 1 }}
					></img>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
				</div>
				<div className='maternity-col2'>
					<img
						src={maternity}
						className='maternity1'
						alt='maternity1'
						style={{ flex: 1 }}
					></img>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
				</div>
				<div className='maternity-col3'>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
				</div>
			</div>
			<Footer />
		</>
	);
}
