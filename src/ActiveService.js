import React, {Component} from 'react';
import './mycss.css';
import $ from 'jquery';

class ActiveService extends Component 
{

	constructor(props) 
	{
		super(props);
		this.callFn = this.callFn.bind(this);
	}

	callFn()
	{
		var self = this;
		console.log("Entered Fn");
		if(self.props.serviceId == 1)
		{
			console.log("Entered if");
		}
	}

	render()
	{
		return (
			<div className="ola-fleet-active-service">
				<div className="active-service-img-holder">
					<center>
						<img src={this.props.mainImg} />
					</center>
				</div>
				<div className="active-service-content-holder">
					<h1>{this.props.serviceName}</h1>
					<h4>{this.props.servicemsg}</h4>
					<p>{this.props.serviceInfo}</p>
					<div className="active-service-features">
						<div className="active-service-feature">
							<img src="https://www.olacabs.com/webstatic/img/car-features/eco-friendly.svg" />
						</div>
						<div className="active-service-feature">
							<img src="https://www.olacabs.com/webstatic/img/car-features/value-money.svg" />
						</div>
						<div className="active-service-feature">
							<img src="https://www.olacabs.com/webstatic/img/car-features/cashless.svg" />
						</div>
					</div>
				</div>
			</div>
		);
	}	
}

export default ActiveService;