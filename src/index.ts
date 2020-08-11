// Import lit-html functions
import { html, render } from 'lit-html';

// Define a template function
const myTemplate = name =>
  html`
    <p>Hello ${name}</p>
  `;

// Render the template with some data
render(myTemplate('lit-html'), document.body);
