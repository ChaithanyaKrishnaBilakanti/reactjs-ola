import React, {Component} from 'react';

class Header extends Component
{
	render()
	{
		return(
			<div>
			<header className="ola-responsive-header">
				<center><img src="https://www.olacabs.com/webstatic/img/olalogo-mb.png" /></center>
			</header>
			<header className="ola-header sticky">
	          <div className="primary-header hide-xs">
	            <div className="max-width">
	              <div className="pull-left">
	              </div>
	              <div className="pull-right">
	                <div className="primary-links">
	                  <div className="link-wrapper">
	                    <a href="https://partners.olacabs.com">Drive With Ola</a>
	                  </div>
	                  <div className="link-wrapper">
	                    <a href="https://olamoney.com">Ola Money</a>
	                  </div>
	                  <div className="link-wrapper">
	                    <a href="https://corporate.olacabs.com" className="event-elem">Ola Corporate</a>
	                  </div>
	                  <div className="link-wrapper">
	                    <a href="https://www.olacabs.com/share" className="event-elem">Share</a>
	                  </div>
	                  <div className="link-wrapper">
	                    <a href="https://blog.olacabs.com" className="event-elem">Offers</a>
	                  </div>
	                  <div className="link-wrapper">
	                    <a href="https://help.olacabs.com/support" className="event-elem">Support</a>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>

	          <div className="secondary-header">
	          	<div className="max-width">
	          		<div className="pull-left">	          			
	          			<a href="/" className="olaImage">
	          				<img src="https://www.olacabs.com/webstatic/img/ola-logo.svg" alt="Ola Logo" className="logo" />
	          			</a>
	          			<a href="/" className="mb-logo">
	          				<img src="https://www.olacabs.com/webstatic/img/olalogo-mb.png" alt="Ola Logo" className="mb-logo-img" />
	          			</a>
	          		</div>
	          		<div className="pull-right">
	          			<div className="secondary-links hide-xs">
	          				<a href="https://www.olacabs.com/olaSelect" className="event-elem">Ola Select</a>
	          				<a href="https://www.olacabs.com/fleet" className="event-elem">Ola Fleet</a>
	          				<a href="https://www.olacabs.com/features" className="event-elem">Features</a>
	          				<a href="http://localhost:3000/bookola" className="login-link event-elem">Book Now</a>
	          			</div>
	          		</div>
	          	</div>
	          </div>

	        </header>
	        </div>
		);
	}
}

export default Header;