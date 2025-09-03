import React from 'react';
import './AppDownload.css'
import { asset } from '../../assets/frontend_assets/asset';


function AppDownload() {
  return (
    <div className='app-download'>
      <p>For Better Experience Download <br /><strong>The Golden Spoon App</strong></p>
      <div className="app-download-platform">
        <img src={asset.play_store} alt="App link" />
        <img src={asset.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
