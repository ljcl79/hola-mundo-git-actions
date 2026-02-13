describe('Validando aplicación Hola Mundo', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.wait(4000);
    })

    it('Verificando título de Hola Mundo', () => {
        cy.contains('Hola Mundo');
    });

    it('Verificando la descripcion', () => {
        cy.get('[data-cy="descripcion"]').should('contain.text', 'Celebrando con la gente de Tester Engineer');
    });

});