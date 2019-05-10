  module.exports = function (api) {
    api.cache(true);
  
    const presets = ["@babel/preset-react", "@babel/env"];
    const plugins = [ "@babel/plugin-proposal-class-properties", "@babel/plugin-transform-arrow-functions"];
  
    return {
      presets,
      plugins
    };
  }
