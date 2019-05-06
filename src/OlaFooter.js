import React, {Component} from 'react';
import './olafooter.css';

class OlaFooter extends Component{
	render()
	{
		return (
			<div className="ola-footer-outer">
				<div className="ola-footer-inner">

					<div className="ola-footer-section">
						<div className="ola-footer-title"><b>Top Visited Cities</b></div>
					</div>

					<div className="ola-footer-section">
						<div className="ola-footer-title"><b>Popular Outstation Routes</b></div>
						<div className="footer-sub-section">
							<div className="section2-item">
								<span><b>Northern India</b></span>
								<p>Delhi to chandigarh Outstation Cabs</p>
								<p>Delhi to Agra Outstation Cabs</p>
								<p>Delhi to Jaipur Outstation Cabs</p>
								<p>Delhi to Shimla Outstation Cabs</p>
								<p>Delhi to Nainital Outstation Cabs</p>
								<p>Jaipur to Delhi Outstation Cabs</p>
							</div>
							<div className="section2-item">
								<span><b>Southern India</b></span>
								<p>Chennai to Pondicherry Outstation Cabs</p>
								<p>Chennai to Tirupathi Outstation Cabs</p>
								<p>Chennai to Vellore Outstation Cabs</p>
								<p>Hyderabad to Vijayawada Outstation Cabs</p>
								<p>Hyderabad to Warangal Outstation Cabs</p>
								<p>Hyderabad to Tirupathi Outstation Cabs</p>
							</div>
							<div className="section2-item">
								<span><b>East & West India</b></span>
								<p>Mumbai to Pune Outstation Cabs</p>
								<p>Mumbai to Mahabaleshwar Outstation Cabs</p>
								<p>Mumbai to Lonavala Outstation Cabs</p>
								<p>Mumbai to Nashik Outstation Cabs</p>
								<p>Mumbai to Matheran Outstation Cabs</p>
								<p>Mumbai to Shiridi Outstation Cabs</p>
							</div>
						</div>
						<div className="section2-foot">
							<center>+Expand more routes</center>
						</div>
					</div>

					<div className="ola-footer-section">
						<div className="ola-footer-title"><b>Social Links</b></div>
						<div className="footer-sub-section">
							<div className="section3-social-links">
								<div className="section3-image-holder">
									<img src="https://www.olacabs.com/webstatic/img/footer/fb-footer-icon.svg" />
								</div>
								<div className="section3-image-holder">
									<img src="https://www.olacabs.com/webstatic/img/footer/insta-footer-icon.svg" />
								</div>
								<div className="section3-image-holder">
									<img src="https://www.olacabs.com/webstatic/img/footer/youtube-footer-icon.svg" />
								</div>
								<div className="section3-image-holder">
									<img src="https://www.olacabs.com/webstatic/img/footer/twitter-footer-icon.svg" />
								</div>
							</div>
							<div className="section3-country" >
								<img src="https://www.olacabs.com/webstatic/img/footer/india-flag-icon.png" />
								<span>India</span>
							</div>
						</div>
					</div>

					<div className="ola-footer-section">
						<div className="ola-footer-title"><b>Discover ola</b></div>
						<div className="footer-sub-section">
							<div className="discover-ola-middle">
								<div className="discover-ola-item">
									About Ola
								</div>
								<div className="discover-ola-item">
									Careers
								</div>
								<div className="discover-ola-item">
									Offers
								</div>
								<div className="discover-ola-item">
									Media Center
								</div>
							</div>
							<div className="discover-ola-end">
								<div className="discover-ola-item2">
									Become a driver
								</div>
								<div className="discover-ola-item2">
									Book a ride
								</div>
							</div>
						</div>
					</div>

					<div className="ola-footer-section-last">
						<div className="ola-footer-title">
							<img src="https://www.olacabs.com/webstatic/img/footer-ola-logo.svg" />
						</div>
						<div className="footer-sub-section">
							<div className="discover-ola-end">
								<div className="discover-ola-item2">
									Notices
								</div>
								<div className="discover-ola-item2">
									Terms & Conditions
								</div>
								<div className="discover-ola-item2">
									Privacy Policy
								</div>
								<br />
								<p>Copyright © 2018 ANI Technologies Pvt. Ltd. All rights reserved.</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}
}

export default OlaFooter;