describe('Auth Page test', () => {
  const testUser = {
    name: 'Test User',
    email: 'test@example.com',
    password: 'password123'
  };

  before(() => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:5000/api/user',
      body: testUser,
      failOnStatusCode: false 
    });
  });

  describe('Login page', () => {
    beforeEach(() => {
      cy.visit('/auth'); 
    });

    it('should submit login form with existing user', () => {
      cy.intercept('POST', 'http://localhost:5000/api/login').as('loginRequest');

      cy.get('input[name="email"]').type(testUser.email);
      cy.get('input[name="password"]').type(testUser.password);
      
      cy.get('button[type="submit"]').should('be.enabled').click();
      
      cy.wait('@loginRequest', { timeout: 5000 }).then((interception) => {
        expect(interception.request.body).to.deep.equal({
          email: testUser.email,
          password: testUser.password
        });
        
        expect(interception.response.statusCode).to.be.oneOf([200, 400]);
      });
      
      cy.url().should('eq', 'http://localhost:5173/');
    });
  });

  describe('Register page', () => {
    beforeEach(() => {
      cy.visit('/auth/register'); 
    });

    it('should submit register form', () => {
      const newUser = {
        name: 'John Smith',
        email: 'johnsmith@test.com',
        password: 'pass123'
      };

      cy.intercept('POST', 'http://localhost:5000/api/user').as('registerRequest');


      cy.get('input[name="name"]').type(newUser.name);
      cy.get('input[name="email"]').type(newUser.email);
      cy.get('input[name="password"]').type(newUser.password);
      
     
      cy.get('button[type="submit"]').click();

      cy.wait('@registerRequest', { timeout: 5000 }).then((interception) => {
        expect(interception.request.body).to.deep.equal({
          name: newUser.name,
          email: newUser.email,
          password: newUser.password
        });
        
        expect(interception.response.statusCode).to.be.oneOf([200, 400]);
      });
    });
  });
});
