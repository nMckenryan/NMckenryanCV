import React from 'react';

import config from '../../config';

export class LinkLogos extends Component {

  constructor(props) {
    super(props);
    this.state = {

      dungeonLinks: [
        {
          icon: 'fa-github',
          url: 'https://github.com/nMckenryan/rpgtrackerv2',
        },
        {
          icon: 'fas fa-link',
          url: 'https://rpg-tracker-zugah.mongodbstitch.com/',
        },
      ],
    
      miniLinks: [
        {
          icon: 'fa-github',
          url: 'https://github.com/nMckenryan/Mini-Scaler',
        },
        {
          icon: 'fas fa-link',
          url: 'https://master.d21pbj5c8w53kf.amplifyapp.com/',
        },
      ],
    
      connectLinks: [
        {
          icon: 'fa-github',
          url: 'https://github.com/nMckenryan/ConnectBush' 
        },
        {
          icon: 'fas fa-link',
          url: 'https://brave-mirzakhani-c08a17.netlify.app/ ',
        },
      ],
    
      vivecLinks: [
        {
          icon: 'fa-github',
          url: 'https://github.com/nMckenryan/Vivec-Dummy-Paragraph-API' 
        },
        {
          icon: 'fas fa-link',
          url: 'https://scrsnyygmf.execute-api.ap-southeast-2.amazonaws.com/api/sermons',
        },
      ],
    
      peaceLinks: [
        {
          icon: 'fa-github',
          url: 'https://github.com/nMckenryan/Reddit-Peacemaker' 
        },
        {
          icon: 'fas fa-link',
          url: 'https://chrome.google.com/webstore/detail/reddit-peacemaker/piopibnnjghpenhhegklpdgmccminaen?hl=en-GB&authuser=0',
        },
      ],
    };
  }
render() {
  const linkArray = this.props.list;
  return (
    <div className="social-icons">
    {linkArray.map(social => {
      const { icon, url } = social;
      return (
        <a name="social" key={url} href={url}>
          <i className={`fab ${icon}`}></i>
        </a>
      );
    })}
  </div>
  )
}
};

export default LinkLogos;
