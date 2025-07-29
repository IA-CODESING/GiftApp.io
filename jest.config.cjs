module.exports = {
    // ... otras configuraciones de Jest ...
    testEnvironment: "jsdom",
    // Le dice a Jest cómo manejar importaciones de archivos específicos
    moduleNameMapper: {
      // Regex para coincidir con archivos CSS, SCSS, SASS, etc.
      // El orden importa, coloca los más específicos primero si tienes varios.
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
  
    // ... el resto de tu configuración ...
  };