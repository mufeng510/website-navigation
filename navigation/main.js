import { initializeSearch } from './search.js';
import { initializeSuggestions } from './sou.js';
import { initializeNavigation } from './url.js';

const initializers = [initializeSearch, initializeSuggestions, initializeNavigation];

document.addEventListener('DOMContentLoaded', function () {
    initializers.forEach(function (initialize) {
        initialize();
    });
});
