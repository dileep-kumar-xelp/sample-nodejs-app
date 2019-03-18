module.exports = {
  apps: [
    {
      name: "sample-nodejs-app",
      script: "./build/index.js",
      watch: true,
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "52.66.243.203",
      key: "/Users/xelp/Downloads/sample-node-js-app.pem",
      ref: "origin/master",
      repo: "git@github.com:dileep-kumar-xelp/sample-nodejs-app.git",
      path: "/home/ubuntu/sample-nodejs-app",
      "post-deploy": "yarn install --check-files && yarn run start"
    }
  }
};
