import React, {Component} from 'react';
import './olasupport.css';

class OlaSupport extends Component {
	render()
	{
		return (
			<div className="ola-support-outer">
				<div className="ola-support-inner">
					<div className="ola-support-item">
						<div className="ola-support-imageholder">
							<img src="https://www.olacabs.com/webstatic/img/ola-support.svg" />
						</div>
						<div className="ola-support-content">
							<h3>24/7 Customer Support</h3>
							<p>A dedicated 24x7 customer</p>
							<p>support team always at your</p>
							<p>service to help solve any problem</p>
						</div>
					</div>
					<div className="ola-support-item">
						<div className="ola-support-imageholder">
							<img src="https://www.olacabs.com/webstatic/img/send_out_succour.svg" />
						</div>
						<div className="ola-support-content">
							<h3>Your Safety First</h3>
							<p>Keep your loved ones informed</p>
							<p>about your travel routes or call</p>
							<p>emergency services when in need</p>
						</div>
					</div>
					<div className="ola-support-item">
						<div className="ola-support-imageholder">
							<img src="https://www.olacabs.com/webstatic/img/ola-best-driver.svg" />
						</div>
						<div className="ola-support-content">
							<h3>Top Rated Driver-Partners</h3>
							<p>All our driver-partners are</p>
							<p>background verified and trained to</p>
							<p>deliver only the best experience</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default OlaSupport;