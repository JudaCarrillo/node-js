"use strict";
const emailTemplate = `
<div>
    <h1>Hi, {{ name }}</h1>
    <p>Tank you for your order.</p>
    <p>Your order number is {{ orderNumber }}</p>
</div>
`;
module.exports = {
    emailTemplate,
};
