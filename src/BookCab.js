import React, {Component} from 'react';
import './bookcab.css';
import $ from 'jquery';

class BookCab extends Component {
	constructor(props) {
		super(props);
		this.changeCabType = this.changeCabType.bind(this);
	}

	changeCabType(id)
	{
		var imgArray = ["city","outstation","rentals"];
		console.log("Log Entered "+id);
		var i;
		for(i=1; i<=3; i++)
		{
			$("#cabType"+i).attr("class","");
			$("#bookCab"+i).attr("class","show-no");
		}
		$("#cabType"+id).attr("class","cabtype-active");
		$("#bookCab"+id).attr("class","show-yes");

		var imgSrc ="https://olawebcdn.com/images/v1/bg_"+imgArray[id-1]+".jpg";
		$("#activeCabType").css("background-image","url("+imgSrc+")");
	}

	render()
	{
		return(
			<div className="bookcab-outer">
				<div className="bookcab-left">
					<div className="bookcab-header">
						<img src="https://www.olacabs.com/webstatic/img/olalogo-mb.png" />
						<div className="bookcab-header-right">Log in</div>
					</div>
					<div className="bookcab-box">
						<div className="box-header">
							<div onClick={()=>this.changeCabType('1')} className="box-header-item">
								<span id="cabType1" className="cabtype-active">
									DAILY RIDES
								</span>
							</div>
							<div onClick={()=>this.changeCabType('2')} className="box-header-item">
								<span id="cabType2">
									OUTSTATION
								</span>
							</div>
							<div onClick={()=>this.changeCabType('3')} className="box-header-item">
								<span id="cabType3">
									RENTALS
								</span>
							</div>
						</div>
						<div className="pic-n-drop">
							<div id="bookCab1" className="show-yes">
								<div className="searchInputWrapper margin-side">
									<div className="searchInputRow">
										<div className="searchInputLabel">PICKUP</div>
										<div className="searchInputText">Current location</div>
									</div>
								</div>
								<div className="searchInputWrapper margin-side">
									<div className="searchInputRow">
										<div className="searchInputLabel">To</div>
										<div className="searchInputText">Search for a Locality or Landmark</div>
									</div>
								</div>
								<div className="searchInputWrapper margin-side">
									<div className="searchInputRow">
										<div className="searchInputLabel">WHEN</div>
										<div className="selectInputText dropLocationColor">
											<select className="inputSelect">
												<option value="NOW">Now</option>
												<option value="LATER">Schedule for later</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div id="bookCab2" className="show-no">
								<div className="searchInputWrapper margin-side">
									<div className="searchInputRow">
										<div className="searchInputLabel">PICKUP</div>
										<div className="searchInputText">Enter pickup location</div>
									</div>
								</div>
								<div className="searchInputWrapper margin-side">
									<div className="searchInputRow">
										<div className="searchInputLabel">To</div>
										<div className="searchInputText">Enter a city, hotel or address</div>
									</div>
								</div>
							</div>
							<div id="bookCab3" className="show-no">
								<div className="searchInputWrapper margin-side">
									<div className="searchInputRow">
										<div className="searchInputLabel">PICKUP</div>
										<div className="searchInputText">Enter pickup location</div>
									</div>
								</div>
								<div className="searchInputWrapper margin-side">
									<div className="searchInputRow">
										<div className="searchInputLabel">Package</div>
										<div className="searchInputText">Select a package</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="ola-service-msg">
						<center>
							<svg viewBox="0 0 50 50"><g><path fill="#707070" d="M13.5349731,27.9579561 L13.9085123,29.5137416 C8.24967231,30.872411 4.8,33.257165 4.8,35.5999999 C4.8,39.3761094 13.3597262,42.7999999 24,42.7999999 C34.6402738,42.7999999 43.2,39.3761094 43.2,35.5999999 C43.2,33.1096487 39.3116483,30.5926752 33.1033111,29.2918292 L33.4314369,27.7258364 C40.3110441,29.167335 44.8,32.0730863 44.8,35.5999999 C44.8,40.6604464 35.4511162,44.3999999 24,44.3999999 C12.5488838,44.3999999 3.2,40.6604464 3.2,35.5999999 C3.2,32.25646 7.22726543,29.4724166 13.5349731,27.9579561 Z M23.5714286,3.5999999 C26.7857297,3.5999999 29.5178469,4.72498962 31.7678571,6.9749999 C34.0178674,9.22501019 35.1428571,11.9571273 35.1428571,15.1714285 C35.1428571,17.8500136 34.1785817,21.2249776 32.25,25.2964285 C30.3214183,29.3678793 28.3928674,32.7696273 26.4642857,35.5017856 L23.5714286,39.5999999 C22.7142789,38.4214226 21.6428623,36.9080449 20.3571429,35.0598213 C19.0714234,33.2115993 17.3571549,30.1044856 15.2142857,25.7383953 C13.0714176,21.3722999 12,17.8500136 12,15.1714285 C12,11.9571273 13.1249887,9.22501019 15.375,6.9749999 C17.6250103,4.72498962 20.3571274,3.5999999 23.5714286,3.5999999 Z M28.0593871,30.0170829 C31.7930656,23.6164897 33.6571429,18.6633702 33.6571429,15.1714285 C33.6571429,12.3311368 32.6868173,9.94465993 30.7425072,8.00034983 C28.7981971,6.05603973 26.4117203,5.08571419 23.5714286,5.08571419 C20.7311369,5.08571419 18.34466,6.05603973 16.40035,8.00034976 C14.4560406,9.94466119 13.4857143,12.3311387 13.4857143,15.1714285 C13.4857143,18.6633717 15.3497917,23.6164925 19.0837995,30.0176497 C20.7777459,32.9435549 22.2738397,35.3015993 23.5714286,37.091188 C24.8690179,35.3015984 26.3651244,32.9435323 28.0593871,30.0170829 Z M23.5714286,9.82857133 C25.0178363,9.82857133 26.2738912,10.3589056 27.3289214,11.4139357 C28.3839515,12.4689658 28.9142857,13.7250208 28.9142857,15.1714285 C28.9142857,16.6178362 28.3839515,17.8738911 27.3289214,18.9289213 C26.2738912,19.9839514 25.0178363,20.5142856 23.5714286,20.5142856 C22.1250209,20.5142856 20.8689659,19.9839514 19.8139358,18.9289213 C18.7589057,17.8738911 18.2285714,16.6178362 18.2285714,15.1714285 C18.2285714,13.7250208 18.7589057,12.4689658 19.8139358,11.4139357 C20.8689659,10.3589056 22.1250209,9.82857133 23.5714286,9.82857133 Z M23.5714286,19.1482142 C24.695227,19.1482142 25.6435883,18.7660397 26.4048163,18.0048172 C27.1660398,17.2435882 27.5482143,16.2952269 27.5482143,15.1714285 C27.5482143,14.04763 27.1660398,13.0992687 26.4048173,12.3380408 C25.6435883,11.5768172 24.695227,11.1946428 23.5714286,11.1946428 C22.4476301,11.1946428 21.4992688,11.5768172 20.7380409,12.3380398 C19.9768173,13.0992687 19.5946429,14.04763 19.5946429,15.1714285 C19.5946429,16.2952269 19.9768173,17.2435882 20.7380399,18.0048162 C21.4992688,18.7660397 22.4476301,19.1482142 23.5714286,19.1482142 Z"></path></g></svg>
							<div className="width-50">
								<span>
									For an accurate pickup -<br />please allow location access
								</span><br /><br />

								<span>
									1. Turn on your device location
								</span><br />
								<span>
									2. Give 'Olacabs' access to your browser's location
								</span>
							</div>
						</center>
					</div>

				</div>
				<div id="activeCabType" className="bookcab-right">
					
				</div>
			</div>
		);
	}
}

export default BookCab;