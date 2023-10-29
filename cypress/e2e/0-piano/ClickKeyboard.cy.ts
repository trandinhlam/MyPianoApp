/// <reference types="cypress" />

import {defaultPianoKeys} from '../../../src/const'

describe('piano app e2e test suites:', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://localhost:3000/piano')
    })

    it('should show piano keyboard with 64 keys', () => {
        const keys = cy.get('[data-testid="keyboard"]').children()
        keys.should('have.length', 29)
    })

    it('Should play correct note when click each keys',()=>{
        defaultPianoKeys.forEach((key)=>{
            
        })
        for (let i = 16; i < 65; i++) {
            cy.get(`[data-testid="key-${i}"]`).click()
        }
    })
})