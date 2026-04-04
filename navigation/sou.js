const SUGGESTION_ENDPOINT = 'https://suggestion.baidu.com/su';
const SUGGESTION_CALLBACK_PREFIX = '__mufengSuggestion__';
const SUGGESTION_DEBOUNCE_MS = 180;

function debounce(fn, delay) {
    let timerId = 0;

    return function () {
        const context = this;
        const args = arguments;

        window.clearTimeout(timerId);
        timerId = window.setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}

function fetchSuggestions(keyword) {
    return new Promise(function (resolve, reject) {
        const callbackName = SUGGESTION_CALLBACK_PREFIX + Date.now();
        const script = document.createElement('script');
        const url = new URL(SUGGESTION_ENDPOINT);

        url.searchParams.set('wd', keyword);
        url.searchParams.set('cb', callbackName);

        // Baidu suggestions are exposed through JSONP, so each request creates
        // a temporary global callback and script tag that must be cleaned up.
        const cleanup = function () {
            delete window[callbackName];
            script.remove();
        };

        window[callbackName] = function (payload) {
            cleanup();
            resolve(Array.isArray(payload.s) ? payload.s : []);
        };

        script.src = url.toString();
        script.async = true;
        script.onerror = function () {
            cleanup();
            reject(new Error('Unable to load suggestions'));
        };

        document.body.appendChild(script);
    });
}

export function initializeSuggestions() {
    const searchForm = document.getElementById('super-search-fm');
    const searchInput = document.getElementById('search-text');
    const suggestionList = document.getElementById('word');
    const shell = document.querySelector('.page-shell');

    if (!searchForm || !searchInput || !suggestionList || !shell) {
        return;
    }

    let activeRequestId = 0;

    const hideSuggestions = function () {
        suggestionList.innerHTML = '';
        suggestionList.style.display = 'none';
    };

    const showSuggestions = function (items) {
        suggestionList.innerHTML = '';

        if (items.length === 0) {
            hideSuggestions();
            return;
        }

        const fragment = document.createDocumentFragment();
        items.forEach(function (item) {
            const li = document.createElement('li');
            li.textContent = item;
            fragment.appendChild(li);
        });

        suggestionList.appendChild(fragment);
        suggestionList.style.display = 'block';
    };

    const requestSuggestions = debounce(function () {
        const keyword = searchInput.value.trim();

        if (!keyword) {
            hideSuggestions();
            return;
        }

        const requestId = activeRequestId + 1;
        activeRequestId = requestId;

        fetchSuggestions(keyword)
            .then(function (items) {
                // Ignore stale responses when a slower request returns after
                // the user has already typed a newer keyword.
                if (requestId !== activeRequestId) {
                    return;
                }

                showSuggestions(items);
            })
            .catch(function () {
                if (requestId === activeRequestId) {
                    hideSuggestions();
                }
            });
    }, SUGGESTION_DEBOUNCE_MS);

    searchInput.addEventListener('input', requestSuggestions);

    suggestionList.addEventListener('click', function (event) {
        const item = event.target.closest('li');

        if (!item) {
            return;
        }

        searchInput.value = item.textContent || '';
        hideSuggestions();
        searchForm.requestSubmit();
    });

    document.addEventListener('click', function (event) {
        if (!shell.contains(event.target)) {
            hideSuggestions();
        }
    });

    searchForm.addEventListener('submit', hideSuggestions);
}
