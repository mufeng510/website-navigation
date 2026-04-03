import { initializeSuggestions } from './sou.js';
import { initializeNavigation } from './url.js';
import { SEARCH_ENGINES, SEARCH_STORAGE_KEYS } from './search-config.js';

function createSearchLabel(labelParts) {
    const label = document.createElement('label');

    labelParts.forEach(function (part) {
        const span = document.createElement('span');
        span.textContent = part.text;
        span.style.color = part.color;
        label.appendChild(span);
    });

    return label;
}

function renderSearchEngines(container) {
    const fragment = document.createDocumentFragment();

    SEARCH_ENGINES.forEach(function (engine, index) {
        const item = document.createElement('li');
        const input = document.createElement('input');
        const label = createSearchLabel(engine.labelParts);

        input.hidden = true;
        input.type = 'radio';
        input.name = 'type';
        input.id = engine.id;
        input.value = engine.action;
        input.dataset.placeholder = engine.placeholder;
        input.checked = index === 0;
        label.htmlFor = engine.id;

        item.appendChild(input);
        item.appendChild(label);
        fragment.appendChild(item);
    });

    container.replaceChildren(fragment);
}

function initializeSearchForm() {
    const searchForm = document.getElementById('super-search-fm');
    const searchInput = document.getElementById('search-text');
    const blankToggle = document.getElementById('set-search-blank');
    const searchGroup = document.querySelector('.search-group');
    const searchTypeList = document.getElementById('searchTypeList');

    if (!searchForm || !searchInput || !blankToggle || !searchGroup || !searchTypeList) {
        return;
    }

    renderSearchEngines(searchTypeList);

    const engineInputs = Array.from(document.querySelectorAll('input[name="type"]'));
    if (engineInputs.length === 0) {
        return;
    }

    const updatePlaceholder = function (input) {
        searchInput.placeholder = input.dataset.placeholder || '站内搜索';
    };

    const updateActiveGroup = function () {
        searchGroup.classList.add('s-current');
    };

    const updateFormAction = function (input) {
        if (input) {
            searchForm.action = input.value;
        }
    };

    const updateTarget = function (openInNewTab) {
        if (openInNewTab) {
            searchForm.target = '_blank';
            return;
        }

        searchForm.removeAttribute('target');
    };

    const applySelectedEngine = function (input) {
        if (!input) {
            return;
        }

        input.checked = true;
        updatePlaceholder(input);
        updateFormAction(input);
        updateActiveGroup();
        localStorage.setItem(SEARCH_STORAGE_KEYS.engine, input.value);
    };

    const storedEngine = localStorage.getItem(SEARCH_STORAGE_KEYS.engine);
    const selectedEngine =
        engineInputs.find(function (input) {
            return input.value === storedEngine;
        }) || engineInputs[0];

    const openInNewTab = localStorage.getItem(SEARCH_STORAGE_KEYS.blank) !== '0';
    blankToggle.checked = openInNewTab;
    updateTarget(openInNewTab);
    applySelectedEngine(selectedEngine);

    engineInputs.forEach(function (input) {
        input.addEventListener('change', function (event) {
            applySelectedEngine(event.target);
            searchInput.focus();
        });
    });

    blankToggle.addEventListener('change', function (event) {
        const enabled = event.target.checked;
        localStorage.setItem(SEARCH_STORAGE_KEYS.blank, enabled ? '1' : '0');
        updateTarget(enabled);
    });

    searchForm.addEventListener('submit', function (event) {
        const activeEngine = document.querySelector('input[name="type"]:checked') || selectedEngine;
        const keyword = searchInput.value.trim();

        if (!keyword) {
            searchInput.focus();
            event.preventDefault();
            return;
        }

        event.preventDefault();
        updateFormAction(activeEngine);
        searchInput.value = keyword;

        const searchUrl = searchForm.action + encodeURIComponent(keyword);

        if (blankToggle.checked) {
            window.open(searchUrl, '_blank', 'noopener');
            return;
        }

        window.location.href = searchUrl;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initializeSearchForm();
    initializeSuggestions();
    initializeNavigation();
});
