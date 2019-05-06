import React, {Component} from 'react';
import './downloadola.css';

class DownloadOla extends Component {
	render()
	{
		return (
			<div className="download-ola-outer">
				<div className="download-ola-inner">
					<div className="download-ola-left">
						<div className="download-ola-header">
							<h2>Book an Ola from the App</h2>
							<label>Download the app for exclusive deals and ease of booking</label>
						</div>
						<div className="download-ola-links">
							<div className="download-ola-link">
								<img src="https://www.olacabs.com/webstatic/img/playstore.png" />
							</div>
							<div className="download-ola-link">
								<img src="https://www.olacabs.com/webstatic/img/appstore.png" />
							</div>
							<div className="download-ola-link">
								<img src="https://www.olacabs.com/webstatic/img/windowstore.png" />
							</div>
						</div>
					</div>
					<div className="download-ola-right">
						<center>
							<img src="https://www.olacabs.com/webstatic/img/ola-booking.png" />
						</center>
					</div>
				</div>
			</div>
		);
	}
}

export default DownloadOla;