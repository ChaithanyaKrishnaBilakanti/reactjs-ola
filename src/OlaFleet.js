import React, {Component} from 'react';
import './mycss.css';
import $ from 'jquery';
import ActiveService from './ActiveService';

class OlaFleet extends Component {

	constructor(props) 
	{
		super(props);
		this.state = {
			activeService : 'auto'
		}
		this.changeService =this.changeService.bind(this);
		this.onHover = this.onHover.bind(this);
		this.mouseOut = this.mouseOut.bind(this);
	}

	changeService(serviceNumber) {
		console.log("Entered changeService    serviceNumber:"+serviceNumber);
		/*var tag ="#" + id;
		console.log($(tag).attr('class'));
		$(tag).attr('class','image-holder-1');*/
		//console.log(id);

		var serviceNameArray = ['auto','bike','share','micro','mini','prime-sedan','prime-play','prime-suv'];
		var serviceIdArray = ['Auto','Bike','Share','Micro','Mini','Sedan','Play','SUV'];
		this.setState({activeService: serviceNameArray[serviceNumber]});
		var i;
		for(i=0;i<8;i++)
		{
			if(serviceNumber == i)
			{
				console.log("Entered IF at "+i);
				var activeSrc = "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-"+serviceNameArray[i]+"-active.svg";
				var imgTag = "#service"+serviceIdArray[i];
				console.log(imgTag+"\n"+activeSrc);
				$(imgTag).attr('src',activeSrc);
				var imgHolderTag = "#service" + serviceIdArray[i] + "Holder";
				$(imgHolderTag).attr('class','image-holder-1');
			}
			else{
				var inActiveSrc = "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-"+serviceNameArray[i]+".svg";
				var imgTag = "#service"+serviceIdArray[i];
				$(imgTag).attr('src',inActiveSrc);
				var imgHolderTag = "#service" + serviceIdArray[i] + "Holder";
				$(imgHolderTag).attr('class','image-holder');
			}
		}
	}

	onHover(id,serviceName)
	{
		var imgTag = "#" + id;
		var imageURL = "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-"+serviceName+"-active.svg";
		$(imgTag).attr('src',imageURL);
	}

	mouseOut(id,serviceName) {
		if(serviceName != this.state.activeService) 
		{
			var imgTag = "#" + id;
			var imageURL = "https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-"+serviceName+".svg";
			$(imgTag).attr('src',imageURL);
		}
	}

	render()
	{
		return (
			<div className="ola-fleet-outer">
					<div className="ola-fleet-inner">
						<div className="ola-fleet-header">
							<h2>Meet our Awesome Fleet</h2>
							<label>The widest variety of cars to choose from</label>
						</div>
						<div className="ola-fleet-content">
							<div className="ola-fleet-item" onClick={()=>this.changeService(0)} onMouseOver={()=>this.onHover("serviceAuto","auto")} onMouseOut={()=> this.mouseOut("serviceAuto","auto")}>
								<div id="serviceAutoHolder" className="image-holder-1">
									<img id="serviceAuto" src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-auto-active.svg" />									
								</div>
								<center>Auto</center>
							</div>
							<div className="ola-fleet-item" onClick={()=>this.changeService(1)} onMouseOver={()=>this.onHover("serviceBike","bike")} onMouseOut={()=> this.mouseOut("serviceBike","bike")}>
								<div id="serviceBikeHolder" className="image-holder">
									<img id="serviceBike" src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-bike.svg" />									
								</div>
								<center>Bike</center>
							</div>
							<div className="ola-fleet-item" onClick={()=>this.changeService(2)} onMouseOver={()=>this.onHover("serviceShare","share")} onMouseOut={()=> this.mouseOut("serviceShare","share")}>
								<div id="serviceShareHolder" className="image-holder">
									<img id="serviceShare" src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-share.svg" />									
								</div>
								<center>Share</center>
							</div>
							<div className="ola-fleet-item" onClick={()=>this.changeService(3)} onMouseOver={()=>this.onHover("serviceMicro","micro")} onMouseOut={()=> this.mouseOut("serviceMicro","micro")}>
								<div id="serviceMicroHolder" className="image-holder">
									<img id="serviceMicro" src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-micro.svg" />									
								</div>
								<center>Micro</center>
							</div>
							<div className="ola-fleet-item" onClick={()=>this.changeService(4)} onMouseOver={()=>this.onHover("serviceMini","mini")} onMouseOut={()=> this.mouseOut("serviceMini","mini")}>
								<div id="serviceMiniHolder" className="image-holder">
									<img id="serviceMini" src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-mini.svg" />									
								</div>
								<center>Mini</center>
							</div>
							<div className="ola-fleet-item" onClick={()=>this.changeService(5)} onMouseOver={()=>this.onHover("serviceSedan","prime-sedan")} onMouseOut={()=> this.mouseOut("serviceSedan","prime-sedan")}>
								<div id="serviceSedanHolder" className="image-holder">
									<img id="serviceSedan" src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-sedan.svg" />									
								</div>
								<center>Prime Sedan</center>
							</div>
							<div className="ola-fleet-item" onClick={()=>this.changeService(6)} onMouseOver={()=>this.onHover("servicePlay","prime-play")} onMouseOut={()=> this.mouseOut("servicePlay","prime-play")}>
								<div id="servicePlayHolder" className="image-holder">
									<img id="servicePlay" src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-play.svg" />									
								</div>
								<center>Prime Play</center>
							</div>
							<div className="ola-fleet-item" onClick={()=>this.changeService(7)} onMouseOver={()=>this.onHover("serviceSUV","prime-suv")} onMouseOut={()=> this.mouseOut("serviceSUV","prime-suv")}>
								<div id="serviceSUVHolder" className="image-holder">
									<img id="serviceSUV" src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-suv.svg" />									
								</div>
								<center>Prime SUV</center>
							</div>
						</div>

						<ActiveService serviceId="1" serviceInfo="The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convenient way to travel everyday." serviceName="Auto" servicemsg="Get an Auto at your door step" mainImg="https://www.olacabs.com/webstatic/img/fleet-image/auto.png" />
					</div>
			</div>
		);
	}
}

export default OlaFleet;