(function () {
    const STORAGE_KEY = 'eddue_cookie_notice_accepted';

    if (localStorage.getItem(STORAGE_KEY)) {
        return;
    }

    const style = document.createElement('style');
    style.textContent = `
        .cookie-banner {
            position: fixed;
            left: 16px;
            right: 16px;
            bottom: 16px;
            z-index: 1000;
            max-width: 760px;
            margin: 0 auto;
            background: rgba(17, 29, 46, .98);
            border: 1px solid rgba(255,255,255,.14);
            border-radius: 16px;
            box-shadow: 0 18px 45px rgba(0,0,0,.35);
            padding: 16px 18px;
            display: flex;
            gap: 14px;
            align-items: center;
            justify-content: space-between;
            font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }

        .cookie-banner-text {
            font-size: 13px;
            color: #a9bfd6;
            line-height: 1.5;
        }

        .cookie-banner-text a {
            color: #7ab3e8;
            text-decoration: underline;
        }

        .cookie-banner button {
            flex-shrink: 0;
            border: 0;
            border-radius: 10px;
            background: #4a7ab5;
            color: #fff;
            padding: 10px 16px;
            font-weight: 750;
            cursor: pointer;
        }

        .cookie-banner button:hover {
            background: #3a6095;
        }

        @media (max-width: 680px) {
            .cookie-banner {
                flex-direction: column;
                align-items: flex-start;
            }

            .cookie-banner button {
                width: 100%;
            }
        }
    `;
    document.head.appendChild(style);

    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
        <div class="cookie-banner-text">
            We use cookies and Yandex Metrica to analyze website traffic, improve the website,
            and track interactions with the page. By continuing to use this website, you agree
            to the use of cookies in accordance with our
            <a href="/terms.html" target="_blank">Privacy Policy</a>.
        </div>
        <button type="button">Got it</button>
    `;

    document.body.appendChild(banner);

    const button = banner.querySelector('button');

    button.addEventListener('click', function () {
        localStorage.setItem(STORAGE_KEY, 'true');
        banner.remove();
    });
})();
