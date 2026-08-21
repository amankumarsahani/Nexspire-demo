/* =========================================================
   MEHER — Fine Jewellery House
   Vanilla JS. No dependencies.
   ========================================================= */
(function () {
    'use strict';

    const $ = (s, c) => (c || document).querySelector(s);
    const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const inr = n => '₹' + n.toLocaleString('en-IN');

    /* ---------------------------------------------------------
       CATALOGUE
       --------------------------------------------------------- */
    const PRODUCTS = [
        {
            id: 'p1', name: 'Sitara Solitaire', cat: 'rings', catLabel: 'Ring',
            price: 284000, was: 312000, tag: 'Archive re-issue', tagGold: true,
            img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=85',
            alt: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=85',
            desc: 'A 1.20ct brilliant seated in a six-claw platinum head, drawn from page 41 of the 1974 ledger. Nine will ever be made.',
            specs: [['Metal', 'Platinum 950'], ['Centre stone', '1.20ct · VVS1 · F'], ['Setting', 'Hand-set, six claw'], ['Edition', '9 pieces']]
        },
        {
            id: 'p2', name: 'Rani Haar', cat: 'necklaces', catLabel: 'Necklace',
            price: 946000, was: null, tag: 'Bridal',
            img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=85',
            alt: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=85',
            desc: 'Seven tiers of uncut polki closed on Basra pearls. Nineteen days on the bench, eleven of them setting alone.',
            specs: [['Metal', '22K yellow gold'], ['Stones', 'Uncut polki · Basra pearl'], ['Weight', '148 g'], ['Lead time', '6–8 weeks']]
        },
        {
            id: 'p3', name: 'Meena Jhumka', cat: 'earrings', catLabel: 'Earrings',
            price: 128000, was: 146000, tag: 'Bestseller',
            img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=85',
            alt: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=900&q=85',
            desc: 'Jaipur meenakari fired in five colours over 22K, finished with a bell fringe that moves the way it should.',
            specs: [['Metal', '22K gold'], ['Craft', 'Hand-fired meenakari'], ['Weight', '22 g / pair'], ['Backing', 'Screw-post']]
        },
        {
            id: 'p4', name: 'Kada No. 7', cat: 'bangles', catLabel: 'Bangle',
            price: 219000, was: null, tag: 'Made to order',
            img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=85',
            alt: 'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=900&q=85',
            desc: 'A solid 22K kada with a hand-chased lotus band and a hidden box clasp you can work one-handed.',
            specs: [['Metal', '22K gold'], ['Finish', 'Hand-chased, satin'], ['Weight', '61 g'], ['Sizing', 'Free, for life']]
        },
        {
            id: 'p5', name: 'Anaya Band', cat: 'rings', catLabel: 'Ring',
            price: 74000, was: 82000, tag: 'Everyday',
            img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=900&q=85',
            alt: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=85',
            desc: 'Eleven channel-set diamonds in 18K rose. Thin enough to stack, heavy enough to feel like something.',
            specs: [['Metal', '18K rose gold'], ['Stones', '0.44ct total · VS'], ['Width', '2.1 mm'], ['Ready to ship', '3–5 days']]
        },
        {
            id: 'p6', name: 'Basra Strand', cat: 'necklaces', catLabel: 'Necklace',
            price: 512000, was: null, tag: 'Archive',
            img: 'https://images.unsplash.com/photo-1588444650733-d0767b753fc8?w=900&q=85',
            alt: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=85',
            desc: 'Graduated natural pearls, knotted on silk between every bead, closed with an emerald-set clasp.',
            specs: [['Pearls', 'Natural Basra · 6–9 mm'], ['Length', '44 cm'], ['Clasp', '18K, emerald cabochon'], ['Restring', 'Free, every 3 years']]
        },
        {
            id: 'p7', name: 'Chandbali Noor', cat: 'earrings', catLabel: 'Earrings',
            price: 168000, was: 189000, tag: null,
            img: 'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=900&q=85',
            alt: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=85',
            desc: 'The moon-shape our grandfather drew in 1979, re-cut for a lighter ear. Polki front, meena back.',
            specs: [['Metal', '22K gold'], ['Stones', 'Uncut polki'], ['Weight', '18 g / pair'], ['Edition', 'Open']]
        },
        {
            id: 'p8', name: 'Rasa Stack', cat: 'bangles', catLabel: 'Bangle set',
            price: 96000, was: null, tag: 'Set of three',
            img: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=900&q=85',
            alt: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=85',
            desc: 'Three thin 18K bangles — plain, twisted, diamond-dusted — sold together because they were drawn together.',
            specs: [['Metal', '18K gold'], ['Stones', '0.31ct total'], ['Weight', '27 g / set'], ['Ready to ship', '3–5 days']]
        }
    ];

    /* ---------------------------------------------------------
       IMAGE LOAD + FALLBACK
       --------------------------------------------------------- */
    function watchImage(img) {
        if (img.dataset.watched) return;
        img.dataset.watched = '1';
        const ok = () => img.classList.add('is-loaded');
        const bad = () => img.classList.add('is-loaded', 'is-failed');
        if (img.complete && img.naturalWidth > 0) ok();
        else if (img.complete) bad();
        else {
            img.addEventListener('load', ok, { once: true });
            img.addEventListener('error', bad, { once: true });
        }
    }
    const watchAll = () => $$('[data-img]').forEach(watchImage);

    /* ---------------------------------------------------------
       PRELOADER
       --------------------------------------------------------- */
    (function preloader() {
        const el = $('#loader');
        const count = $('#loaderCount');
        const ring = $('.loader__ring');
        if (!el) return;

        let n = 0;
        const RING = 239;
        const tick = setInterval(() => {
            n += Math.random() * 9 + 3;
            if (n >= 100) n = 100;
            count.textContent = String(Math.floor(n)).padStart(2, '0');
            ring.style.strokeDashoffset = String(RING - (RING * n) / 100);
            if (n >= 100) {
                clearInterval(tick);
                setTimeout(finish, 320);
            }
        }, reduced ? 30 : 110);

        function finish() {
            el.classList.add('is-done');
            document.body.classList.add('is-ready');
            setTimeout(() => el.classList.add('is-gone'), 1400);
        }

        // hard safety: never trap the page
        setTimeout(() => { clearInterval(tick); finish(); }, 5000);
    })();

    /* ---------------------------------------------------------
       CUSTOM CURSOR
       --------------------------------------------------------- */
    (function cursor() {
        const el = $('#cursor');
        const label = $('#cursorLabel');
        if (!el || reduced || window.matchMedia('(pointer:coarse)').matches) return;

        let tx = 0, ty = 0, cx = 0, cy = 0;
        window.addEventListener('mousemove', e => {
            tx = e.clientX; ty = e.clientY;
            el.classList.add('is-on');
        });
        (function loop() {
            cx += (tx - cx) * 0.18;
            cy += (ty - cy) * 0.18;
            el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
            requestAnimationFrame(loop);
        })();

        document.addEventListener('mouseover', e => {
            const hit = e.target.closest('[data-cursor], a, button');
            if (!hit) { el.classList.remove('is-big'); label.textContent = ''; return; }
            const txt = hit.dataset.cursor;
            if (txt) { el.classList.add('is-big'); label.textContent = txt; }
            else { el.classList.remove('is-big'); label.textContent = ''; }
        });
    })();

    /* ---------------------------------------------------------
       NAV + TICKER
       --------------------------------------------------------- */
    (function nav() {
        const nav = $('#nav');
        const ticker = $('#ticker');
        const onScroll = () => {
            const y = window.scrollY;
            nav.classList.toggle('is-solid', y > window.innerHeight * 0.82);
            const hide = y > 90;
            ticker.classList.toggle('is-hidden', hide);
            nav.classList.toggle('is-up', hide);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    })();

    /* ---------------------------------------------------------
       MOBILE MENU
       --------------------------------------------------------- */
    (function menu() {
        const burger = $('#burger');
        if (!burger) return;
        const links = $$('[data-menu-link]');
        const close = () => {
            document.body.classList.remove('menu-open', 'is-locked');
            links.forEach(a => a.style.transitionDelay = '');
        };
        burger.addEventListener('click', () => {
            const open = !document.body.classList.contains('menu-open');
            document.body.classList.toggle('menu-open', open);
            document.body.classList.toggle('is-locked', open);
            links.forEach((a, i) => a.style.transitionDelay = open ? (0.12 + i * 0.06) + 's' : '');
        });
        links.forEach(a => a.addEventListener('click', close));
        window.__closeMenu = close;
    })();

    /* ---------------------------------------------------------
       SMOOTH ANCHORS (offset for fixed nav)
       --------------------------------------------------------- */
    document.addEventListener('click', e => {
        const a = e.target.closest('[data-scroll]');
        if (!a) return;
        const id = a.getAttribute('href');
        if (!id || id.charAt(0) !== '#') return;
        const target = id === '#top' ? document.body : $(id);
        if (!target) return;
        e.preventDefault();
        if (window.__closeMenu) window.__closeMenu();
        const top = id === '#top' ? 0 : target.getBoundingClientRect().top + window.scrollY - 74;
        window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
    });

    /* ---------------------------------------------------------
       REVEAL ON SCROLL
       --------------------------------------------------------- */
    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(en => {
            if (!en.isIntersecting) return;
            const d = parseInt(en.target.dataset.delay || '0', 10);
            setTimeout(() => en.target.classList.add('is-in'), reduced ? 0 : d);
            obs.unobserve(en.target);
        });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

    const observeReveals = () => $$('.reveal:not(.is-in)').forEach(el => io.observe(el));

    /* ---------------------------------------------------------
       MANIFESTO WORD LIGHT-UP
       --------------------------------------------------------- */
    (function manifesto() {
        const words = $$('.manifesto__text .w');
        if (!words.length) return;
        if (reduced) { words.forEach(w => w.classList.add('lit')); return; }
        const wio = new IntersectionObserver(entries => {
            entries.forEach(en => {
                if (!en.isIntersecting) return;
                words.forEach((w, i) => setTimeout(() => w.classList.add('lit'), i * 52));
                wio.disconnect();
            });
        }, { threshold: 0.4 });
        wio.observe($('.manifesto__text'));
    })();

    /* ---------------------------------------------------------
       PARALLAX
       --------------------------------------------------------- */
    (function parallax() {
        if (reduced) return;
        const items = $$('[data-parallax]').map(el => ({ el, k: parseFloat(el.dataset.parallax) || 0.08 }));
        const bg = $('.editorial__bg');
        if (bg) items.push({ el: bg, k: 0.14 });
        if (!items.length) return;

        let ticking = false;
        const run = () => {
            const vh = window.innerHeight;
            items.forEach(({ el, k }) => {
                const r = el.getBoundingClientRect();
                if (r.bottom < -200 || r.top > vh + 200) return;
                const mid = r.top + r.height / 2 - vh / 2;
                el.style.transform = `translate3d(0, ${(-mid * k).toFixed(2)}px, 0)`;
            });
            ticking = false;
        };
        const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(run); } };
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        run();
    })();

    /* ---------------------------------------------------------
       MAGNETIC BUTTONS
       --------------------------------------------------------- */
    (function magnets() {
        if (reduced || window.matchMedia('(pointer:coarse)').matches) return;
        document.addEventListener('mousemove', e => {
            $$('[data-magnet]').forEach(el => {
                const r = el.getBoundingClientRect();
                const dx = e.clientX - (r.left + r.width / 2);
                const dy = e.clientY - (r.top + r.height / 2);
                const dist = Math.hypot(dx, dy);
                if (dist < 110) el.style.transform = `translate(${dx * 0.22}px, ${dy * 0.28}px)`;
                else el.style.transform = '';
            });
        });
    })();

    /* ---------------------------------------------------------
       PRODUCT GRID
       --------------------------------------------------------- */
    const grid = $('#productGrid');

    function cardHTML(p, i) {
        const tag = p.tag
            ? `<span class="card__tag ${p.tagGold ? 'card__tag--gold' : ''}">${p.tag}</span>` : '';
        const was = p.was ? `<span class="card__was">${inr(p.was)}</span>` : '';
        return `
        <article class="card reveal" data-id="${p.id}" data-cat="${p.cat}" data-delay="${(i % 4) * 80}">
            <div class="card__media" data-cursor="View">
                ${tag}
                <img class="main" src="${p.img}" alt="${p.name}" data-img loading="lazy">
                <img class="alt" src="${p.alt}" alt="" data-img loading="lazy">
                <div class="card__quick">
                    <button data-quick="${p.id}">Quick view</button>
                    <button class="is-primary" data-add="${p.id}">Add</button>
                </div>
            </div>
            <span class="card__cat">${p.catLabel}</span>
            <h3 class="card__name">${p.name}</h3>
            <div class="card__meta">
                <span class="card__price">${inr(p.price)}</span>
                ${was}
            </div>
        </article>`;
    }

    if (grid) {
        grid.innerHTML = PRODUCTS.map(cardHTML).join('');
    }

    /* filters */
    $$('#filters .filter').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('#filters .filter').forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const f = btn.dataset.filter;
            $$('.card', grid).forEach(c => {
                const show = f === 'all' || c.dataset.cat === f;
                c.classList.toggle('is-hidden', !show);
                if (show) c.classList.add('is-in');
            });
        });
    });

    /* ---------------------------------------------------------
       CART
       --------------------------------------------------------- */
    const cart = [];
    const drawer = $('#drawer');
    const scrim = $('#drawerScrim');
    const body = $('#drawerBody');
    const countEl = $('#cartCount');
    const totalEl = $('#cartTotal');

    const find = id => PRODUCTS.find(p => p.id === id);

    function openCart(open) {
        drawer.classList.toggle('is-open', open);
        scrim.classList.toggle('is-open', open);
        document.body.classList.toggle('is-locked', open);
    }

    function renderCart() {
        if (!cart.length) {
            body.innerHTML = `<div class="drawer__empty">
                <span>Nothing chosen yet.</span>
                <p>Everything here is made in small numbers. Take your time.</p>
            </div>`;
        } else {
            body.innerHTML = cart.map(it => {
                const p = find(it.id);
                return `<div class="ci">
                    <img src="${p.img}" alt="${p.name}" data-img>
                    <div>
                        <h4 class="ci__name">${p.name}</h4>
                        <span class="ci__cat">${p.catLabel}</span>
                        <div class="ci__qty">
                            <button data-dec="${p.id}" aria-label="Less">−</button>
                            <b>${it.qty}</b>
                            <button data-inc="${p.id}" aria-label="More">+</button>
                        </div>
                    </div>
                    <div>
                        <span class="ci__price">${inr(p.price * it.qty)}</span>
                        <a href="#" class="ci__rm" data-rm="${p.id}">Remove</a>
                    </div>
                </div>`;
            }).join('');
        }
        const qty = cart.reduce((s, i) => s + i.qty, 0);
        const total = cart.reduce((s, i) => s + find(i.id).price * i.qty, 0);
        countEl.textContent = qty;
        totalEl.textContent = inr(total);
        countEl.classList.add('pop');
        setTimeout(() => countEl.classList.remove('pop'), 320);
        watchAll();
    }

    function addToCart(id, silent) {
        const line = cart.find(i => i.id === id);
        if (line) line.qty++;
        else cart.push({ id, qty: 1 });
        renderCart();
        if (!silent) toast(find(id).name + ' added to bag');
    }

    document.addEventListener('click', e => {
        const add = e.target.closest('[data-add]');
        const quick = e.target.closest('[data-quick]');
        const inc = e.target.closest('[data-inc]');
        const dec = e.target.closest('[data-dec]');
        const rm = e.target.closest('[data-rm]');

        if (add) { e.preventDefault(); addToCart(add.dataset.add); return; }
        if (quick) { e.preventDefault(); openQV(quick.dataset.quick); return; }
        if (inc) { const l = cart.find(i => i.id === inc.dataset.inc); if (l) { l.qty++; renderCart(); } return; }
        if (dec) {
            const l = cart.find(i => i.id === dec.dataset.dec);
            if (l) { l.qty--; if (l.qty < 1) cart.splice(cart.indexOf(l), 1); renderCart(); }
            return;
        }
        if (rm) {
            e.preventDefault();
            const l = cart.find(i => i.id === rm.dataset.rm);
            if (l) { cart.splice(cart.indexOf(l), 1); renderCart(); }
            return;
        }
    });

    $('#cartBtn').addEventListener('click', () => openCart(true));
    $('#drawerClose').addEventListener('click', () => openCart(false));
    scrim.addEventListener('click', () => openCart(false));
    $('#checkoutBtn').addEventListener('click', () => {
        if (!cart.length) { toast('Your bag is empty'); return; }
        toast('Demo store — checkout is disabled');
    });

    renderCart();

    /* ---------------------------------------------------------
       QUICK VIEW
       --------------------------------------------------------- */
    const qv = $('#qv');
    let qvId = null;

    function openQV(id) {
        const p = find(id);
        if (!p) return;
        qvId = id;
        $('#qvImg').src = p.img;
        $('#qvImg').alt = p.name;
        $('#qvImg').classList.remove('is-loaded', 'is-failed');
        $('#qvCat').textContent = p.catLabel;
        $('#qvName').textContent = p.name;
        $('#qvPrice').innerHTML = inr(p.price) + (p.was ? ` <span class="card__was">${inr(p.was)}</span>` : '');
        $('#qvDesc').textContent = p.desc;
        $('#qvSpecs').innerHTML = p.specs.map(s => `<li><span>${s[0]}</span><span>${s[1]}</span></li>`).join('');
        qv.classList.add('is-open');
        document.body.classList.add('is-locked');
        watchAll();
    }

    function closeQV() {
        qv.classList.remove('is-open');
        document.body.classList.remove('is-locked');
    }

    $$('[data-qv-close]').forEach(el => el.addEventListener('click', closeQV));
    $('#qvAdd').addEventListener('click', () => {
        if (!qvId) return;
        addToCart(qvId, true);
        closeQV();
        openCart(true);
    });

    document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        closeQV();
        openCart(false);
        if (window.__closeMenu) window.__closeMenu();
    });

    /* ---------------------------------------------------------
       FORMS
       --------------------------------------------------------- */
    $('#bespokeForm').addEventListener('submit', e => {
        e.preventDefault();
        const required = ['#bName', '#bPhone', '#bEmail'];
        let ok = true;
        required.forEach(sel => {
            const input = $(sel);
            const good = input.value.trim().length > 2 &&
                (input.type !== 'email' || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value));
            input.parentElement.classList.toggle('is-invalid', !good);
            if (!good) ok = false;
        });
        if (!ok) { toast('Please check the highlighted fields'); return; }
        e.target.reset();
        $$('.field').forEach(f => f.classList.remove('is-invalid'));
        toast('Request received — we reply within a day');
    });

    $('#newsForm').addEventListener('submit', e => {
        e.preventDefault();
        const v = $('#newsEmail').value.trim();
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) { toast('Enter a valid email'); return; }
        e.target.reset();
        toast('Welcome to the house');
    });

    /* ---------------------------------------------------------
       TOAST
       --------------------------------------------------------- */
    let toastTimer;
    function toast(msg) {
        const t = $('#toast');
        $('#toastMsg').textContent = msg;
        t.classList.add('is-on');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => t.classList.remove('is-on'), 2600);
    }

    /* ---------------------------------------------------------
       BOOT
       --------------------------------------------------------- */
    watchAll();
    observeReveals();
})();
