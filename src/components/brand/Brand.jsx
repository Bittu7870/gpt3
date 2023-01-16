
import React from 'react';
import { Google, Slack, Atlassian, Dropbox, Shopify } from './imports';
import './brand.css';

function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={Google} alt="Google" />
      </div>
      <div>
        <img src={Slack} alt="Slack" />
      </div>
      <div>
        <img src={Atlassian} alt="Atlassian" />
      </div>
      <div>
        <img src={Dropbox} alt="Dropbox" />
      </div>
      <div>
        <img src={Shopify} alt="Shopify" />
      </div>
    </div>
  )
}

export default Brand;