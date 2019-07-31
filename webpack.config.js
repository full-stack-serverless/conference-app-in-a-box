const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  config.resolve.alias = {
    ...config.resolve.alias,
    "aws-amplify-react-native": "aws-amplify-react",
    "react-native-maps": "react-native-web-maps"
  };
  return config;
};
