import { NAVIGATION_GROUPS } from './navigation-data.js';

function createIcon(iconName) {
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    icon.setAttribute('class', 'icon');
    icon.setAttribute('aria-hidden', 'true');
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + iconName);
    icon.appendChild(use);

    return icon;
}

function createTitleItem(group) {
    const titleItem = document.createElement('li');

    titleItem.className = 'title';
    titleItem.appendChild(createIcon(group.icon));
    titleItem.append(' ' + group.title);

    return titleItem;
}

function createLinkItem(item) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    const text = document.createElement('span');

    listItem.className = 'col-3 col-sm-3 col-md-3 col-lg-1';
    link.href = item.href;
    link.target = '_blank';
    link.rel = 'nofollow noopener noreferrer';

    link.appendChild(createIcon(item.icon));
    text.textContent = item.text;
    link.appendChild(text);
    listItem.appendChild(link);

    return listItem;
}

function renderNavigation(groups, container) {
    // Build the navigation list from data only. Group titles and links share
    // the same container to match the existing flat list layout in the page.
    const fragment = document.createDocumentFragment();

    groups.forEach(function (group) {
        fragment.appendChild(createTitleItem(group));
        group.items.forEach(function (item) {
            fragment.appendChild(createLinkItem(item));
        });
    });

    container.replaceChildren(fragment);
}

export function initializeNavigation() {
    const container = document.getElementById('urlContainer');

    if (!container) {
        return;
    }

    renderNavigation(NAVIGATION_GROUPS, container);
}
