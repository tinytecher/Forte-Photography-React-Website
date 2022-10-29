import React from "react";
import "./style.css";
import NavBar from "../Navbar/NavBar.js";
import Footer from "../Footer/Footer";
import wedding1 from "../../images/wedding.jpg";

export default function WeddingPage() {
	return (
		<>
			<NavBar />
			<div className='wed-container'>
				<div className='wed-col1'>
					<img
						src={wedding1}
						className='wed1'
						alt='wed'
						style={{ flex: 1 }}
					></img>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
				</div>
				<div className='wed-col2'>
					<img
						src={wedding1}
						className='wed1'
						alt='wed'
						style={{ flex: 1 }}
					></img>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
				</div>
				<div className='wed-col3'>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
				</div>
			</div>
			<Footer />
		</>
	);
}
