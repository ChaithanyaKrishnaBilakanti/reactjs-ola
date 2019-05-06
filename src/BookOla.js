import React, {Component} from 'react';

class Bookola extends Component {
	render() {
		return (
			<section>
				<div className="responsive-top-banner">
					<div className="search-box-overlay">
					</div>
					<div className="searchCabBox">
								<div className="tabBar">
									<div className="tabButtonBack text-center">                                
                                    	<a href="/" className="tabButton tabButton-active">City Taxi</a>                                
                            		</div>
                            		<div className="tabButtonBack">                                
                                    	<a href="/" className="tabButton">OUTSTATION</a>                                
                            		</div>
                            		<div className="tabButtonBack">                                
                                    	<a href="/" className="tabButton">RENTALS</a>                                
                            		</div>
								</div>
								<div className="boxContentWrapper">
									<div className="boxContent">
										<div className="boxHeaderWrapper">
											<div className="boxHeader">Your everyday travel partner</div>
											<div className="boxSubHeader">AC Cabs for point to point travel</div>
										</div>
										<div className="searchInputWrapper">
											<div className="searchInputRow">
												<div className="searchInputLabel">PICKUP</div>
												<div className="searchInputText">Current location</div>
											</div>
										</div>
										<div className="searchInputWrapper">
											<div className="searchInputRow">
												<div className="searchInputLabel">DROP</div>
												<div className="searchInputText dropLocationColor">Enter drop for ride estimate</div>
											</div>
										</div>
										<div className="searchInputWrapper">
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
										<div className="searchButtonWrapper">
											<button className="searchButton">Search Cabs</button>
										</div>
									</div>
								</div>
							</div>
				</div>

				<div className="top-banner">
					<div className="custom-carousel-wrapper">
						<div className="carousel-item banner section1-backimage">
							<div className="overlay-left"></div>
							<div className="top_heading">
								<div className="text-overlay-top"></div>
								<h1 className="top_title">
									Book a City Taxi to your destination in town
								</h1>
								<label className="top_subtitle">Choose from a range of categories and prices</label>
							</div>

							<div className="searchCabBox">
								<div className="tabBar">
									<div className="tabButtonBack text-center">                                
                                    	<a href="/" className="tabButton tabButton-active">City Taxi</a>                                
                            		</div>
                            		<div className="tabButtonBack">                                
                                    	<a href="/" className="tabButton">OUTSTATION</a>                                
                            		</div>
                            		<div className="tabButtonBack">                                
                                    	<a href="/" className="tabButton">RENTALS</a>                                
                            		</div>
								</div>
								<div className="boxContentWrapper">
									<div className="boxContent">
										<div className="boxHeaderWrapper">
											<div className="boxHeader">Your everyday travel partner</div>
											<div className="boxSubHeader">AC Cabs for point to point travel</div>
										</div>
										<div className="searchInputWrapper">
											<div className="searchInputRow">
												<div className="searchInputLabel">PICKUP</div>
												<div className="searchInputText">Current location</div>
											</div>
										</div>
										<div className="searchInputWrapper">
											<div className="searchInputRow">
												<div className="searchInputLabel">DROP</div>
												<div className="searchInputText dropLocationColor">Enter drop for ride estimate</div>
											</div>
										</div>
										<div className="searchInputWrapper">
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
										<div className="searchButtonWrapper">
											<button className="searchButton">Search Cabs</button>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Bookola;