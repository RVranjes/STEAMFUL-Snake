module.exports = {
  apps: [
    {
      name: 'steamful-snake',
      exec_mode: 'cluster',
      instances: '1',
      script: 'node app.js',
    },
  ],
}
