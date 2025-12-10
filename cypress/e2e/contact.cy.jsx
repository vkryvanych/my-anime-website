describe('Contact page test', () => {
    beforeEach(() => {
        cy.visit('/contact')
    })

    it('should render all the components', () => {
        cy.get('.contact-page').within(() => {
            cy.get('[data-testid="contact-form-component"]').should('be.visible') 
            cy.get('[data-testid="contact-text-component"]').should('be.visible') 
        })
    })

    it('should submit form to backend successfully', () => {
        cy.intercept('POST', 'http://localhost:5000/api/contact').as('sendMessage')

        cy.get('input[name="username"]').type('Тестовий Користувач')
        cy.get('input[name="email"]').type('test@example.com')
        cy.get('textarea[name="message"]').type('Це тестове повідомлення для перевірки роботи контактної форми')
        
        cy.get('button[type="submit"]').click()

     
        cy.wait('@sendMessage').then((interception) => {
           
            expect(interception.request.body).to.deep.equal({
                username: 'Тестовий Користувач',
                email: 'test@example.com',
                message: 'Це тестове повідомлення для перевірки роботи контактної форми'
            })

            expect(interception.response.statusCode).to.equal(200)

            cy.get('.contact-success', { timeout: 10000 }) 
                .should('be.visible')
                .and('contain', 'Повідомлення успішно надіслано!')
        })
    })


    it('should validate form before sending', () => {
        cy.get('button[type="submit"]').click()

    cy.get('input[name="username"]:invalid').should('exist')
    cy.get('input[name="email"]:invalid').should('exist')
    cy.get('textarea[name="message"]:invalid').should('exist')
    })
}) 

