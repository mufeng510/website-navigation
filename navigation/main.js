import { initializeSearch } from './search.js';
import { initializeSuggestions } from './sou.js';
import { initializeNavigation } from './url.js';
import { initializeLan } from './lan.js';

const initializers = [initializeSearch, initializeSuggestions, initializeNavigation, initializeLan];

document.addEventListener('DOMContentLoaded', function () {
    initializers.forEach(function (initialize) {
        initialize();
    });
});
