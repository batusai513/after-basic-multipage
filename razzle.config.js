const path = require('path');

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    // do something to config
    if (target === 'web') {
      const devClient = dev && config.entry.client[0];
      delete config.entry.client;
      config.entry.home = [
        devClient,
        path.join(__dirname, path.resolve('/src/home/client.js')),
      ].filter(Boolean);

      config.entry.about = [
        devClient,
        path.join(__dirname, path.resolve('/src/about/client.js')),
      ].filter(Boolean);
    }
    console.log(JSON.stringify(config, null, 2));
    return config;
  },
};
