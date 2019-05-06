import React, {Component} from 'react';
import './promotions.css';

class Promotions extends Component {
	render()
	{
		return(
			<div className="promotions-outer">
				<div id="myCarousel" className="carousel slide promotions-inner" data-ride="carousel">

					<div className="carousel-inner">
				      <div className="item active promotion">
				      	<center>
					        <div className="promotion-image-holder">
					        	<img src="https://cms-web.olacabs.com/00000000360.jpeg" />
					        </div>
					        <div className="promotion-content-holder">
					        	<h3>Upgrade to Ola Select</h3>
					        	<p>Explore the benefits of Ola</p>
					        </div>
				       	</center>
				      </div>

				      <div className="item promotion">
				        <center>
					        <div className="promotion-image-holder">
					        	<img src="https://cms-web.olacabs.com/00000000362.jpeg" />
					        </div>
					        <div className="promotion-content-holder">
					        	<h3>Sign up for Ola Corporate</h3>
					        	<p>Employee travel management made easy</p>
					        </div>
				       	</center>
				      </div>
				    
				      <div className="item promotion">
				        <center>
					        <div className="promotion-image-holder">
					        	<img src="https://cms-web.olacabs.com/00000000361.jpeg" />
					        </div>
					        <div className="promotion-content-holder">
					        	<h3>Be entertained with Ola Play</h3>
					        	<p>Discover movies and music on daily ride</p>
					        </div>
				       	</center>
				      </div>
				    </div>

				    <a className="left carousel-control button-change" href="#myCarousel" data-slide="prev">
				      <span className="glyphicon glyphicon-chevron-left"></span>
				      <span className="sr-only">Previous</span>
				    </a>
				    <a className="right carousel-control button-change" href="#myCarousel" data-slide="next">
				      <span className="glyphicon glyphicon-chevron-right"></span>
				      <span className="sr-only">Next</span>
				    </a>
				</div>
			</div>
		);
	}
}

export default Promotions;