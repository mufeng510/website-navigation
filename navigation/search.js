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

function createSearchEngineOption(engine, checked) {
    const item = document.createElement('li');
    const input = document.createElement('input');
    const label = createSearchLabel(engine.labelParts);

    input.hidden = true;
    input.type = 'radio';
    input.name = 'type';
    input.id = engine.id;
    input.value = engine.action;
    input.dataset.placeholder = engine.placeholder;
    input.checked = checked;
    label.htmlFor = engine.id;

    item.append(input, label);

    return item;
}

function renderSearchEngines(container) {
    const fragment = document.createDocumentFragment();

    SEARCH_ENGINES.forEach(function (engine, index) {
        fragment.appendChild(createSearchEngineOption(engine, index === 0));
    });

    container.replaceChildren(fragment);
}

function getSearchElements() {
    const form = document.getElementById('super-search-fm');
    const input = document.getElementById('search-text');
    const blankToggle = document.getElementById('set-search-blank');
    const group = document.querySelector('.search-group');
    const typeList = document.getElementById('searchTypeList');

    if (!form || !input || !blankToggle || !group || !typeList) {
        return null;
    }

    return { form, input, blankToggle, group, typeList };
}

function updateSearchTarget(form, openInNewTab) {
    if (openInNewTab) {
        form.target = '_blank';
        return;
    }

    form.removeAttribute('target');
}

function applySelectedEngine(engineInput, elements) {
    if (!engineInput) {
        return;
    }

    const { form, input, group } = elements;

    engineInput.checked = true;
    input.placeholder = engineInput.dataset.placeholder || '站内搜索';
    form.action = engineInput.value;
    group.classList.add('s-current');
    localStorage.setItem(SEARCH_STORAGE_KEYS.engine, engineInput.value);
}

function getInitialEngine(engineInputs) {
    const storedEngine = localStorage.getItem(SEARCH_STORAGE_KEYS.engine);

    return (
        engineInputs.find(function (engineInput) {
            return engineInput.value === storedEngine;
        }) || engineInputs[0]
    );
}

function buildSearchUrl(form, keyword) {
    return form.action + encodeURIComponent(keyword);
}

export function initializeSearch() {
    const elements = getSearchElements();

    if (!elements) {
        return;
    }

    renderSearchEngines(elements.typeList);

    const engineInputs = Array.from(document.querySelectorAll('input[name="type"]'));
    if (engineInputs.length === 0) {
        return;
    }

    const selectedEngine = getInitialEngine(engineInputs);
    const openInNewTab = localStorage.getItem(SEARCH_STORAGE_KEYS.blank) !== '0';

    elements.blankToggle.checked = openInNewTab;
    updateSearchTarget(elements.form, openInNewTab);
    applySelectedEngine(selectedEngine, elements);

    engineInputs.forEach(function (engineInput) {
        engineInput.addEventListener('change', function (event) {
            applySelectedEngine(event.target, elements);
            elements.input.focus();
        });
    });

    elements.blankToggle.addEventListener('change', function (event) {
        const enabled = event.target.checked;

        localStorage.setItem(SEARCH_STORAGE_KEYS.blank, enabled ? '1' : '0');
        updateSearchTarget(elements.form, enabled);
    });

    elements.form.addEventListener('submit', function (event) {
        const activeEngine = document.querySelector('input[name="type"]:checked') || selectedEngine;
        const keyword = elements.input.value.trim();

        if (!keyword) {
            elements.input.focus();
            event.preventDefault();
            return;
        }

        event.preventDefault();
        applySelectedEngine(activeEngine, elements);

        const searchUrl = buildSearchUrl(elements.form, keyword);
        elements.input.value = keyword;

        if (elements.blankToggle.checked) {
            window.open(searchUrl, '_blank', 'noopener');
            return;
        }

        window.location.href = searchUrl;
    });
}
