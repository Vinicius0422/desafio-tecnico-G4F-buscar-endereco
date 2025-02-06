module.exports = {
    testEnvironment: "jsdom",
    transform: {
      '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!lucide-react|outros-modulos-que-precisam-de-transformacao)/',
    ],
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
    },
};
  