import { emailTemplate } from "../../src/js-foundation/01-template";


describe("js-foundation/01-template.ts", () => {

    it('emailTemplate should contain a greeting', () => {
        expect( emailTemplate ).toContain('Hi, ');
    });
    
    it('emailTemplate should contain a {{name}} and {{orderNumber}}', () => {
        expect( emailTemplate ).toMatch(/{{ name }}/)
        expect( emailTemplate ).toMatch(/{{ orderNumber }}/)
    });

});