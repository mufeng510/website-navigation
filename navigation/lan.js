import { LAN_ORIGIN_MAP, LAN_HOST, LAN_PROTOCOL } from './lan-config.js';

const STORAGE_KEY = 'website-navigation:lan-mode';
const NAV_SELECTOR = '#urlContainer a[href]';

function normalizeOrigin(value) {
    try {
        return new URL(value).origin;
    } catch (error) {
        return null;
    }
}

function resolveLanOrigin(value) {
    const trimmed = String(value).trim();

    if (!trimmed) {
        return null;
    }

    // 完整 origin：原样使用（单独 IP / 协议不同的条目）
    if (/^https?:\/\//i.test(trimmed)) {
        return normalizeOrigin(trimmed);
    }

    // 纯端口号：拼成 LAN_PROTOCOL + LAN_HOST + 端口
    if (/^\d+$/.test(trimmed) && Number(trimmed) > 0 && Number(trimmed) <= 65535) {
        return normalizeOrigin(LAN_PROTOCOL + LAN_HOST.replace(/\/+$/, '') + ':' + trimmed);
    }

    return null;
}

function buildOriginPairs() {
    return Object.entries(LAN_ORIGIN_MAP)
        .map(function ([publicValue, lanValue]) {
            const publicOrigin = normalizeOrigin(publicValue);
            const lanOrigin = resolveLanOrigin(lanValue);
            if (!publicOrigin || !lanOrigin) {
                return null;
            }
            return { publicOrigin: publicOrigin, lanOrigin: lanOrigin };
        })
        .filter(Boolean);
}

const ORIGIN_PAIRS = buildOriginPairs();
const TO_LAN = new Map(ORIGIN_PAIRS.map(function (pair) { return [pair.publicOrigin, pair.lanOrigin]; }));
const TO_PUBLIC = new Map(ORIGIN_PAIRS.map(function (pair) { return [pair.lanOrigin, pair.publicOrigin]; }));

function readStoredLan() {
    try {
        return window.localStorage.getItem(STORAGE_KEY) === 'lan';
    } catch (error) {
        return false;
    }
}

function storeLan(useLan) {
    try {
        window.localStorage.setItem(STORAGE_KEY, useLan ? 'lan' : 'wan');
    } catch (error) {
        // localStorage 不可用（隐私模式等）时静默降级为仅本次会话生效
    }
}

function rewriteLinks(useLan) {
    const lookup = useLan ? TO_LAN : TO_PUBLIC;

    document.querySelectorAll(NAV_SELECTOR).forEach(function (link) {
        let url;

        try {
            url = new URL(link.getAttribute('href'), window.location.href);
        } catch (error) {
            return;
        }

        const replacement = lookup.get(url.origin);

        if (replacement) {
            link.setAttribute('href', replacement + url.pathname + url.search + url.hash);
        }
    });
}

function applyMode(useLan, button) {
    rewriteLinks(useLan);

    if (button) {
        button.textContent = useLan ? '🏠 局域网' : '🌐 公网';
        button.setAttribute('aria-pressed', String(useLan));
        button.title = '点击切换公网 / 局域网链接';
    }
}

export function initializeLan() {
    const button = document.getElementById('lan-toggle');
    let useLan = readStoredLan();

    applyMode(useLan, button);

    if (button) {
        button.addEventListener('click', function () {
            useLan = !useLan;
            storeLan(useLan);
            applyMode(useLan, button);
        });
    }
}
