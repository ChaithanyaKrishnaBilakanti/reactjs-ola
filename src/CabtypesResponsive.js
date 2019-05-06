import React, {Component} from 'react';
import './mycss.css';
import './cabtypes.css';

class CabtypesResponsive extends Component {
	render()
	{
		return (
			<div className="cab-types-outer">
				<div className="cab-types-inner">
					<h2 className="cabTypesHeading">A car for every occasion</h2>
					<label className="cabTypesSubHeading">Ola offers city taxis, inter-city cabs, and local cabs at hourly packages</label>
					<div className="cards-container">
						<div className="card-holder">
							<div className="card-itself">
									<a href="https://book.olacabs.com/">
										<div className="imgHolder">
											<div className="card-image image-1">
											</div>
											<div className="share-type">
												<img src="https://olacabs.com/webstatic/img/service-type/ola-prime-sedan-active.svg" />
											</div>
										</div>
										<div className="content-container">
											<h3 className="content-heading">CITY TAXI</h3>
											<p className="content-text">The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as Rs. 6/km, you can choose from a wide range of options! You can also opt to do your bit for the environment with Ola Share!</p>
											
											<div className="content-footer">
												<div className="content-footer-item">
													<img src="https://olacabs.com/webstatic/img/service-type/ct_1.svg" className="content-footer-item-image" />
													<span className="content-footer-item-text">AC<br />Cabs</span>
												</div>
												<div className="content-footer-item">
													<img src="https://olacabs.com/webstatic/img/service-type/ct_2.svg" className="content-footer-item-image" />
													<span className="content-footer-item-text">Pocket<br />Friendly</span>
												</div>
												<div className="content-footer-item">
													<img src="https://olacabs.com/webstatic/img/service-type/ct_3.svg" className="content-footer-item-image" />
													<span className="content-footer-item-text">Cashless-<br />Rides</span>
												</div>
											</div>
										</div>
									</a>
								</div>
						</div>
						<div className="card-holder">
							<div className="card-itself">
								<a href="https://book.olacabs.com/">
									<div className="imgHolder">
										<div className="card-image image-2">
										</div>
										<div className="share-type">
											<img src="https://olacabs.com/webstatic/img/service-type/ola-outstation-active.svg" />
										</div>
									</div>
									<div className="content-container">
										<h3 className="content-heading">OUTSTATION</h3>
										<p className="content-text">Ride out of town at affordable one-way and round-trip fares with Ola’s intercity travel service. Choose from a range of AC cabs driven by top partners, available in 1 hour or book upto 7 days in advance. We have you covered across India with presence in 90+ cities with over 500 one way routes.</p>											
										<div className="content-footer">
											<div className="content-footer-item">
												<img src="https://olacabs.com/webstatic/img/service-type/os_1.svg" className="content-footer-item-image" />
												<span className="content-footer-item-text">One-Way<br />Trips</span>
											</div>
											<div className="content-footer-item">
												<img src="https://olacabs.com/webstatic/img/service-type/os_2.svg" className="content-footer-item-image" />
												<span className="content-footer-item-text">Advance<br />Booking</span>
											</div>
											<div className="content-footer-item">
												<img src="https://olacabs.com/webstatic/img/service-type/os_3.svg" className="content-footer-item-image" />
												<span className="content-footer-item-text">Safe<br />Rides</span>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="card-holder">
							<div className="card-itself">
								<a href="https://book.olacabs.com/">
									<div className="imgHolder">
										<div className="card-image image-3">
										</div>
										<div className="share-type">
											<img src="https://olacabs.com/webstatic/img/service-type/ola-prime-suv-active.svg" />
										</div>
									</div>

									<div className="content-container">
										<h3 className="content-heading">RENT</h3>
										<p className="content-text">With Ola Rentals you get a cab at your disposal. So be it a  day long business meeting, a shopping trip with your friends or just a day out in a new city, we have you covered. Packages start at 1 hour and can be extended upto 12 hours!</p>
										<div className="content-footer">
											<div className="content-footer-item">
												<img src="https://olacabs.com/webstatic/img/service-type/rental_1.svg" className="content-footer-item-image" />
												<span className="content-footer-item-text">Hourly<br />Packages</span>
											</div>
											<div className="content-footer-item">
												<img src="https://olacabs.com/webstatic/img/service-type/rental_2.svg" className="content-footer-item-image" />
												<span className="content-footer-item-text">Multiple<br />Stops</span>
											</div>
											<div className="content-footer-item">
												<img src="https://olacabs.com/webstatic/img/service-type/rental_3.svg" className="content-footer-item-image" />
												<span className="content-footer-item-text">Top-Rated<br />Partners</span>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CabtypesResponsive