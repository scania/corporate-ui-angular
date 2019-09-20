export const items = [
  {
    text: 'Home', 
    url:'/home', 
    type:'primary'
  },
  { 
    text: 'Info', 
    url:'/info',
    type:'primary',
    subMenu : [
      { text: 'List', url : '/list', type: 'primary'},
      { text: 'Table', url : '/table', type: 'primary'},
      { text: 'Form', url : '/form', type: 'primary'},
    ]
  },
  { 
    text: 'Contact', 
    url:'/contact', 
    type:'primary',
    subMenu : [
      { text: 'About', url : '/about', type: 'primary'},
      { text: 'Profile', url : '/profile', type: 'primary'},
    ]
  },
  { 
    text: 'More', 
    url:'/more', 
    type:'secondary'
  },
]