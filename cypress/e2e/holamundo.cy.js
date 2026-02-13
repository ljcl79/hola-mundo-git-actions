describe('Validando aplicación Hola Mundo', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Verificando título de Hola Mundo', () => {
        cy.contains('Hola Mundo');
    });

    it('Verificando la descripcion', () => {
        cy.get('[data-cy="descripcion"]').should('contain.text', 'Celebrando con la gente de Tester Engineer');
    });

});