// ОВОЩНЫЕ ПЕРЕВОДЫ
const translations = {
    ru: {
        about: "О нас",
        contactEmail: "Написать в электронную почту",
        catalog: "Каталог",
        contacts: "Контакты",
        heroTitle: "Свежая Зелень <br>прямо с грядки",
        heroSub: "Натуральные фермерские продукты без химии. Быстрая Авиа Доставка !",
        viewCatalog: "Выбрать овощи",
        aboutTitle: "Наша философия",
        aboutSub: "Выращено с любовью к земле",
        aboutText1: "мы OOO “Zoroshop” ,,,,, под брендом UzHerbs24/7  поставляем свежую зелень в упакованном виде,,,",
        aboutText2: "Каждый овощ собирается вручную в день доставки, чтобы сохранить максимум витаминов и свежести. Мы уверены в качестве каждого продукта, потому что выращиваем его сами.",
        feature1: "100% органические",
        feature2: "Быстрая Авиа Доставка",
        feature3: "Выращено с заботой",
        catalogTitle: "Свежая зелень Круглый год 24/7",
        catalogSub: "Свежесобранные овощи этой недели",
        badgeFresh: "Свежий урожай",
        badgeOrganic: "Био",
        badgePopular: "Популярное",
        badgeNew: "Новинка",
        badgeSeason: "Сезонное",
        product1Name: "Помидоры Черри",
        product1Desc: "Сладкие мини-томаты, собраны сегодня утром. Идеальны для салатов и закусок.",
        product2Name: "Морковь Нантская",
        product2Desc: "Сочная, хрустящая, сладкая морковь. Без нитратов, выращена на натуральном компосте.",
        product3Name: "Огурцы Корнишоны",
        product3Desc: "Маленькие хрустящие огурчики, идеальны для маринования и свежих салатов.",
        product4Name: "Перец Болгарский",
        product4Desc: "Красный, жёлтый, зелёный. Сладкий, мясистый, богат витамином C.",
        product5Name: "Картофель Молодой",
        product5Desc: "Нежный молодой картофель с тонкой кожурой. Варится быстро, идеален для пюре.",
        weight: "~20 шт/кг",
        catalogNote: "Цены указаны за 1 кг. Минимальный заказ — 2 кг. Доставка бесплатна от 1000 ₽.",
        contactsTitle: "Заказать овощи",
        contactsSub: "Свяжитесь с нами в мессенджере",
        contactTelegram: "Написать в Telegram",
        contactWhatsApp: "Написать в WhatsApp",
        infoTime: "Время приёма заказов",
        infoTimeDetail: "Ежедневно 8:00–21:00",
        infoDelivery: "Быстрая Авиа доставка",
        infoDeliveryDetail: "В течение 24 часов",
        infoPayment: "Оплата",
        infoPaymentDetail: "По контракту",
        footerText: "© 2026 Ферма 'UzHerbs24/7'. <br>Все овощи выращены с заботой о природе.",
        footerBottom: "Мы не используем ГМО, химикаты и искусственные удобрения."
    },
    en: {
        about: "About",
        contactEmail: "Write an email",
        catalog: "Catalog",
        contacts: "Contacts",
        heroTitle: "Fresh Greens <br>straight from the garden",
        heroSub: "Natural farm products, chemical-free. Fast Air Delivery!",
        viewCatalog: "Choose vegetables",
        aboutTitle: "Our philosophy",
        aboutSub: "Grown with love for the land",
        aboutText1: "We are Zoroshop LLC. Under our UzHerbs24/7 brand, we supply packaged fresh greens.",
        aboutText2: "Every vegetable is harvested by hand on the day of delivery to preserve maximum vitamins and freshness. We are confident in the quality of each product because we grow it ourselves.",
        feature1: "100% organic",
        feature2: "Fast Air Delivery",
        feature3: "Grown with care",
        catalogTitle: "Fresh Greens. Year-round, 24/7.",
        catalogSub: "Freshly picked vegetables this week",
        badgeFresh: "Fresh harvest",
        badgeOrganic: "Bio",
        badgePopular: "Popular",
        badgeNew: "New",
        badgeSeason: "Seasonal",
        product1Name: "Cherry Tomatoes",
        product1Desc: "Sweet mini tomatoes, picked this morning. Perfect for salads and snacks.",
        product2Name: "Nantes Carrots",
        product2Desc: "Juicy, crunchy, sweet carrots. Nitrate-free, grown on natural compost.",
        product3Name: "Gherkin Cucumbers",
        product3Desc: "Small crispy cucumbers, ideal for pickling and fresh salads.",
        product4Name: "Bell Pepper",
        product4Desc: "Red, yellow, green. Sweet, fleshy, rich in vitamin C.",
        product5Name: "New Potatoes",
        product5Desc: "Tender young potatoes with thin skin. Cooks quickly, perfect for mash.",
        weight: "~20 pcs/kg",
        catalogNote: "Prices are per 1 kg. Minimum order — 2 kg. Free delivery from 1000 ₽.",
        contactsTitle: "Order vegetables",
        contactsSub: "Contact us in messenger",
        contactTelegram: "Write in Telegram",
        contactWhatsApp: "Write in WhatsApp",
        infoTime: "Order acceptance time",
        infoTimeDetail: "Daily 8:00–21:00",
        infoDelivery: "Fast Air Delivery",
        infoDeliveryDetail: "Within 24 hours",
        infoPayment: "Payment",
        infoPaymentDetail: "Under the contract",
        footerText: "© 2026 Farm 'UzHerbs24/7'. <br>All vegetables grown with care for nature.",
        footerBottom: "We do not use GMOs, chemicals or artificial fertilizers."
    }
};

let currentLang = localStorage.getItem('lang') || 'ru';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#lang-${lang}`).classList.add('active');
}

// Инициализация языка
updateLanguage(currentLang);

// Обработчики переключения языка
document.getElementById('lang-ru').addEventListener('click', () => updateLanguage('ru'));
document.getElementById('lang-en').addEventListener('click', () => updateLanguage('en'));

// Мобильное меню
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const langSwitch = document.querySelector('.lang-switch');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    langSwitch.style.display = langSwitch.style.display === 'flex' ? 'none' : 'flex';
    
    if (window.innerWidth <= 768) {
        if (navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.gap = '6px';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'white';
            navLinks.style.padding = '10px 0 20px';
            navLinks.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
            navLinks.style.zIndex = '1000';
            navLinks.style.borderTop = '2px solid var(--fresh-green)';
            
            langSwitch.style.position = 'absolute';
            langSwitch.style.top = '150px';
            langSwitch.style.right = '10px';
            langSwitch.style.zIndex = '1000';
        }
    }
});

// Плавная навигация
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Закрываем мобильное меню после клика
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
                langSwitch.style.display = 'none';
            }
        }
    });
});

// Активное меню при скролле
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollPos >= top && scrollPos <= bottom) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .info-card, .contact-card').forEach(el => {
    observer.observe(el);
});