exports.config = {
  bundles:[
    {
      components: ['h5-user']
    }
  ],
  namespace: 'mycomponent',
  outputTargets:[
    { 
      type: 'dist' 
    },
    { 
      type: 'www',
      serviceWorker: false
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
