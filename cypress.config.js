import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    
    specPattern: [
      'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
      'src/**/*.cy.{js,jsx,ts,tsx}'  
    ],
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
  },
}) 