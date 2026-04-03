const SEARCH_ENGINE_KEY = 'search_engine';
const SEARCH_BLANK_KEY = 'search_blank';

function initializeSearchForm() {
    const searchForm = document.getElementById('super-search-fm');
    const searchInput = document.getElementById('search-text');
    const blankToggle = document.getElementById('set-search-blank');
    const engineInputs = Array.from(document.querySelectorAll('input[name="type"]'));
    const searchGroups = document.querySelectorAll('.search-group');

    if (!searchForm || !searchInput || !blankToggle || engineInputs.length === 0) {
        return;
    }

    const updatePlaceholder = function (input) {
        searchInput.placeholder = input.dataset.placeholder || '站内搜索';
    };

    const updateActiveGroup = function (input) {
        searchGroups.forEach(function (group) {
            group.classList.remove('s-current');
        });

        const parentGroup = input.closest('.search-group');
        if (parentGroup) {
            parentGroup.classList.add('s-current');
        }
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
        updateActiveGroup(input);
        localStorage.setItem(SEARCH_ENGINE_KEY, input.value);
    };

    const storedEngine = localStorage.getItem(SEARCH_ENGINE_KEY);
    const selectedEngine =
        engineInputs.find(function (input) {
            return input.value === storedEngine;
        }) || engineInputs[0];

    const openInNewTab = localStorage.getItem(SEARCH_BLANK_KEY) !== '0';
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
        localStorage.setItem(SEARCH_BLANK_KEY, enabled ? '1' : '0');
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

document.addEventListener('DOMContentLoaded', initializeSearchForm);
