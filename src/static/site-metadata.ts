interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://run.mchen.xyz/',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://mchen.xyz/',
    },
    {
      name: 'About',
      url: 'https://mchen.xyz/#about',
    },
  ],
};

export default data;
