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
    titleItem.append(createIcon(group.icon), ' ' + group.title);

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

    text.textContent = item.text;
    link.append(createIcon(item.icon), text);
    listItem.appendChild(link);

    return listItem;
}

function createNavigationFragment(groups) {
    const fragment = document.createDocumentFragment();

    groups.forEach(function (group) {
        fragment.appendChild(createTitleItem(group));
        group.items.forEach(function (item) {
            fragment.appendChild(createLinkItem(item));
        });
    });

    return fragment;
}

export function initializeNavigation() {
    const container = document.getElementById('urlContainer');

    if (!container) {
        return;
    }

    container.replaceChildren(createNavigationFragment(NAVIGATION_GROUPS));
}
