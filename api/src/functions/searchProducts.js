const { app } = require('@azure/functions');

app.http('searchProducts', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {

        const products = [
            {
                name: "Vectan A0",
                price: 78,
                shop: "Armurerie Gilles",
                link: "https://example.com/a0"
            },
            {
                name: "Vectan A1",
                price: 82,
                shop: "Armurerie Lavaux",
                link: "https://example.com/a1"
            }
        ];

        return {
            jsonBody: products
        };
    }
});