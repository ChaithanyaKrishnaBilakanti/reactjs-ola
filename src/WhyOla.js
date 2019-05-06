import React, {Component} from 'react';
import './mycss.css';

class Whyola extends Component {
	render()
	{
	return (
			<div className="why-ola-outer">
				<div className="why-ola-inner">
					<div className="why-ola-header">
						<h2>Why ride with Ola?</h2>
						<label>The best way to travel to your destination</label>
					</div>
					<div className="why-ola-content">
						<div className="item">
							<div className="sub-item1">
								<img src="https://cms-web.olacabs.com/00000000368.jpg" />
							</div>
							<div className="sub-item2">
								<div className="text-wrapper">
									<h1>Cabs for Every Pocket</h1>
									<p>From Sedans and SUVs to Luxury cars for special occasions, we have cabs to suit every pocket</p>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="sub-item1">
								<img src="https://cms-web.olacabs.com/00000000370.jpg" />
							</div>
							<div className="sub-item2">
								<div className="text-wrapper">
									<h1>Secure and Safer Rides</h1>
									<p>Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience</p>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="sub-item1">
								<img src="https://cms-web.olacabs.com/00000000374.jpg" />
							</div>
							<div className="sub-item2">
								<div className="text-wrapper">
									<h1>Ola Select</h1>
									<p>A membership program with Ola that lets you ride a Prime Sedan at Mini fares, book cabs without peak pricing and has zero wait time</p>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="sub-item1">
								<img src="https://cms-web.olacabs.com/00000000371.jpg" />
							</div>
							<div className="sub-item2">
								<div className="text-wrapper">
									<h1>In Cab Entertainment</h1>
									<p>Play music, watch videos and a lot more with Ola Play! Also stay connected even if you are travelling through poor network areas with our free wifi facility.</p>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="sub-item1">
								<img src="https://cms-web.olacabs.com/00000000382.jpg" />
							</div>
							<div className="sub-item2">
								<div className="text-wrapper">
									<h1>Share and Express</h1>
									<p>To travel with the lowest fares choose Ola Share. For a faster travel experience we have Share Express on some fixed routes with zero deviations. Choose your ride and zoom away!</p>
								</div>
							</div>
						</div>
						<div className="item">
							<div className="sub-item1">
								<img src="https://cms-web.olacabs.com/00000000372.jpg" />
							</div>
							<div className="sub-item2">
								<div className="text-wrapper">
									<h1>Cashless Rides</h1>
									<p>Now go cashless and travel easy. Simply recharge your Ola money or add your credit/debit card to enjoy hassle free payments.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Whyola;