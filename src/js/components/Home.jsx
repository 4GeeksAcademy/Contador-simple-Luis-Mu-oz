import React from "react";


function Home({ dig6, dig5, dig4, dig3, dig2, dig1 }) {
	return (
		
		<div className="container text-center mt-5">
			<div className="d-flex justify-content-center bg-dark p-3 rounded">
				<div className="card bg-dark text-white m-1 p-3 fs-1">
					<i className="fa-solid fa-clock"></i>
				</div>
				<div className="card bg-dark text-white m-1 p-3 fs-1">{dig6}</div>
				<div className="card bg-dark text-white m-1 p-3 fs-1">{dig5}</div>
				<div className="card bg-dark text-white m-1 p-3 fs-1">{dig4}</div>
				<div className="card bg-dark text-white m-1 p-3 fs-1">{dig3}</div>
				<div className="card bg-dark text-white m-1 p-3 fs-1">{dig2}</div>
				<div className="card bg-dark text-white m-1 p-3 fs-1">{dig1}</div>
			</div>
		</div>
		
	);
}

export default Home;