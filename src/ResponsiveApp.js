import React, { Component } from 'react';
import Header from './Header';
import Bookola from './BookOla';
import Promotions from './Promotions';
import Cabtypes from './Cabtypes';
import CabtypesResponsive from './CabtypesResponsive';
import Whyola from './WhyOla';
import OlaFleet from './OlaFleet';
import DownloadOla from './DownloadOla';
import OlaSupport from './OlaSupport';
import OlaFooter from './OlaFooter';
import './mycss.css';

import {Router, Route, browserHistory} from 'react-router';

class ResponsiveApp extends Component {
  render()
  {
    return (
    <div>
      	<Header />
      	<Bookola />
      	<Promotions />
      	<CabtypesResponsive />
      	<Whyola />
      	<OlaFleet />
      	<DownloadOla />
      	<OlaSupport />
      	<OlaFooter />
    </div>
    );
  }
}

export default ResponsiveApp;