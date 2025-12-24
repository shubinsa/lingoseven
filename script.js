// Список языков с кодами флагов (flag-icons использует ISO 3166-1 alpha-2)
const languagesWithFlags = {
    // Популярные
    'ru': { name: 'Русский', flag: 'ru' },
    'en': { name: 'English', flag: 'gb' },
    'zh-CN': { name: '中文 (简体)', flag: 'cn' },
    'zh-TW': { name: '中文 (繁體)', flag: 'tw' },
    'es': { name: 'Español', flag: 'es' },
    'fr': { name: 'Français', flag: 'fr' },
    'de': { name: 'Deutsch', flag: 'de' },
    'pt': { name: 'Português', flag: 'pt' },
    'it': { name: 'Italiano', flag: 'it' },
    'ja': { name: '日本語', flag: 'jp' },
    'ko': { name: '한국어', flag: 'kr' },
    'ar': { name: 'العربية', flag: 'sa' },
    'hi': { name: 'हिन्दी', flag: 'in' },
    'tr': { name: 'Türkçe', flag: 'tr' },
    // Европейские
    'uk': { name: 'Українська', flag: 'ua' },
    'pl': { name: 'Polski', flag: 'pl' },
    'nl': { name: 'Nederlands', flag: 'nl' },
    'sv': { name: 'Svenska', flag: 'se' },
    'da': { name: 'Dansk', flag: 'dk' },
    'no': { name: 'Norsk', flag: 'no' },
    'fi': { name: 'Suomi', flag: 'fi' },
    'cs': { name: 'Čeština', flag: 'cz' },
    'el': { name: 'Ελληνικά', flag: 'gr' },
    'he': { name: 'עברית', flag: 'il' },
    'ro': { name: 'Română', flag: 'ro' },
    'hu': { name: 'Magyar', flag: 'hu' },
    'bg': { name: 'Български', flag: 'bg' },
    'hr': { name: 'Hrvatski', flag: 'hr' },
    'sk': { name: 'Slovenčina', flag: 'sk' },
    'sl': { name: 'Slovenščina', flag: 'si' },
    'sr': { name: 'Srpski', flag: 'rs' },
    'lt': { name: 'Lietuvių', flag: 'lt' },
    'lv': { name: 'Latviešu', flag: 'lv' },
    'et': { name: 'Eesti', flag: 'ee' },
    'is': { name: 'Íslenska', flag: 'is' },
    'ga': { name: 'Gaeilge', flag: 'ie' },
    'cy': { name: 'Cymraeg', flag: 'gb-wls' },
    'mt': { name: 'Malti', flag: 'mt' },
    'sq': { name: 'Shqip', flag: 'al' },
    'mk': { name: 'Македонски', flag: 'mk' },
    'bs': { name: 'Bosanski', flag: 'ba' },
    'be': { name: 'Беларуская', flag: 'by' },
    'ca': { name: 'Català', flag: 'ad' },
    'gl': { name: 'Galego', flag: 'es' },
    'eu': { name: 'Euskara', flag: 'es' },
    'lb': { name: 'Lëtzebuergesch', flag: 'lu' },
    // Азиатские
    'th': { name: 'ไทย', flag: 'th' },
    'vi': { name: 'Tiếng Việt', flag: 'vn' },
    'id': { name: 'Bahasa Indonesia', flag: 'id' },
    'ms': { name: 'Bahasa Melayu', flag: 'my' },
    'tl': { name: 'Filipino', flag: 'ph' },
    'bn': { name: 'বাংলা', flag: 'bd' },
    'ta': { name: 'தமிழ்', flag: 'in' },
    'te': { name: 'తెలుగు', flag: 'in' },
    'mr': { name: 'मराठी', flag: 'in' },
    'gu': { name: 'ગુજરાતી', flag: 'in' },
    'kn': { name: 'ಕನ್ನಡ', flag: 'in' },
    'ml': { name: 'മലയാളം', flag: 'in' },
    'pa': { name: 'ਪੰਜਾਬੀ', flag: 'in' },
    'ur': { name: 'اردو', flag: 'pk' },
    'ne': { name: 'नेपाली', flag: 'np' },
    'si': { name: 'සිංහල', flag: 'lk' },
    'my': { name: 'မြန်မာ', flag: 'mm' },
    'km': { name: 'ខ្មែរ', flag: 'kh' },
    'lo': { name: 'ລາວ', flag: 'la' },
    'mn': { name: 'Монгол', flag: 'mn' },
    'ka': { name: 'ქართული', flag: 'ge' },
    'hy': { name: 'Հայերdelays', flag: 'am' },
    'az': { name: 'Azərbaycan', flag: 'az' },
    'kk': { name: 'Қазақ', flag: 'kz' },
    'uz': { name: "O'zbek", flag: 'uz' },
    'ky': { name: 'Кыргызча', flag: 'kg' },
    'tg': { name: 'Тоҷикӣ', flag: 'tj' },
    'tk': { name: 'Türkmen', flag: 'tm' },
    // Африканские и ближневосточные
    'fa': { name: 'فارسی', flag: 'ir' },
    'sw': { name: 'Kiswahili', flag: 'tz' },
    'am': { name: 'አማርኛ', flag: 'et' },
    'ha': { name: 'Hausa', flag: 'ng' },
    'ig': { name: 'Igbo', flag: 'ng' },
    'yo': { name: 'Yorùbá', flag: 'ng' },
    'zu': { name: 'isiZulu', flag: 'za' },
    'xh': { name: 'isiXhosa', flag: 'za' },
    'af': { name: 'Afrikaans', flag: 'za' },
    'so': { name: 'Soomaali', flag: 'so' },
    'mg': { name: 'Malagasy', flag: 'mg' },
    'rw': { name: 'Kinyarwanda', flag: 'rw' },
    'ny': { name: 'Chichewa', flag: 'mw' },
    'sn': { name: 'chiShona', flag: 'zw' },
    // Другие
    'eo': { name: 'Esperanto', flag: 'eu' },
    'la': { name: 'Latina', flag: 'va' },
    'haw': { name: 'ʻŌlelo Hawaiʻi', flag: 'us' },
    'mi': { name: 'Māori', flag: 'nz' },
    'sm': { name: 'Gagana Samoa', flag: 'ws' },
    'jw': { name: 'Basa Jawa', flag: 'id' },
    'su': { name: 'Basa Sunda', flag: 'id' },
    'ceb': { name: 'Cebuano', flag: 'ph' },
    'hmn': { name: 'Hmoob', flag: 'la' },
    'ht': { name: 'Kreyòl Ayisyen', flag: 'ht' },
    'co': { name: 'Corsu', flag: 'fr' },
    'fy': { name: 'Frysk', flag: 'nl' },
    'gd': { name: 'Gàidhlig', flag: 'gb-sct' },
    'ku': { name: 'Kurdî', flag: 'iq' },
    'ps': { name: 'پښتو', flag: 'af' },
    'sd': { name: 'سنڌي', flag: 'pk' },
    'yi': { name: 'ייִדיש', flag: 'il' },
    // Дополнительные из ad_templates
    'ak': { name: 'Akan', flag: 'gh' },
    'as': { name: 'অসমীয়া', flag: 'in' },
    'bo': { name: 'བོད་སྐད', flag: 'cn' },
    'ff': { name: 'Fulfulde', flag: 'sn' },
    'ln': { name: 'Lingála', flag: 'cd' },
    'om': { name: 'Oromoo', flag: 'et' },
    'or': { name: 'ଓଡ଼ିଆ', flag: 'in' },
    'qu': { name: 'Runasimi', flag: 'pe' },
    'ug': { name: 'ئۇيغۇرچە', flag: 'cn' }
};

// Маппер кодов Google Translate → ISO 639-1 (для hero переводов)
const googleToIsoMap = {
    'zh-CN': 'zh',
    'zh-TW': 'zh',
    'zh-HK': 'zh',
    'pt-BR': 'pt',
    'pt-PT': 'pt',
    'es-419': 'es'
};

// Хранилище переводов hero-заголовка (будет инициализировано после определения translations)
let heroTranslations = null;

// Нормализация кода языка Google → ISO
function normalizeGoogleLangCode(googleCode) {
    if (!googleCode) return 'en';
    if (googleToIsoMap[googleCode]) return googleToIsoMap[googleCode];
    return googleCode.split(/[-_]/)[0];
}

// Получение перевода hero-заголовка
function getHeroTranslation(langCode) {
    if (!heroTranslations) return null;
    const normalized = normalizeGoogleLangCode(langCode);
    return heroTranslations[normalized] || heroTranslations['en'] || null;
}

// Применение перевода к hero-заголовку с сохранением стилизации "30"
function applyHeroTranslation(langCode) {
    const heroTitle = document.getElementById('heroTitle');
    if (!heroTitle) return;

    // Убеждаемся, что переводы инициализированы
    if (!heroTranslations) {
        heroTranslations = translations;
    }

    const translation = getHeroTranslation(langCode);
    if (!translation) return;

    // Ищем "30" в переводе и оборачиваем в span
    const idx = translation.indexOf('30');
    if (idx !== -1) {
        const before = translation.substring(0, idx);
        const after = translation.substring(idx + 2);
        heroTitle.innerHTML = before + '<span class="hero-number">30</span>' + after;
    } else {
        // Если "30" нет в переводе (редкий случай) — ставим текст как есть
        heroTitle.textContent = translation;
    }
}

// Для обратной совместимости
const availableLanguages = Object.fromEntries(
    Object.entries(languagesWithFlags).map(([code, data]) => [code, data.name])
);

// Google Translate инициализация
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: Object.keys(availableLanguages).join(','),
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        autoDisplay: false
    }, 'google_translate_element');
}

// Создаём кастомный селект и настраиваем логику
document.addEventListener('DOMContentLoaded', function() {
    // Создаём кастомный селект
    const customSelect = document.createElement('select');
    customSelect.id = 'customLangSelect';
    customSelect.className = 'custom-lang-select';

    // Заполняем опциями
    for (const [code, name] of Object.entries(availableLanguages)) {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = name;
        customSelect.appendChild(option);
    }

    // Определяем язык по умолчанию
    const deviceLang = navigator.language || navigator.userLanguage;
    const langCode = deviceLang.split('-')[0];

    // Если язык устройства есть в списке — выбираем его, иначе русский
    if (availableLanguages[langCode]) {
        customSelect.value = langCode;
    } else if (availableLanguages[deviceLang]) {
        customSelect.value = deviceLang;
    } else {
        customSelect.value = 'ru';
    }

    // Вставляем кастомный селект в DOM (перед google_translate_element)
    const googleContainer = document.getElementById('google_translate_element');
    if (googleContainer) {
        googleContainer.parentNode.insertBefore(customSelect, googleContainer);
    }

    // Кнопка "Применить" - активирует перевод
    const applyBtn = document.getElementById('applyLang');
    if (applyBtn) {
        applyBtn.addEventListener('click', function() {
            const selectedLang = customSelect.value;

            // Ждём пока Google Translate загрузится и применяем перевод
            const googleSelect = document.querySelector('.goog-te-combo');
            if (googleSelect) {
                googleSelect.value = selectedLang;
                googleSelect.dispatchEvent(new Event('change'));

                // После перевода применяем свой перевод hero-заголовка
                applyHeroTranslation(selectedLang);
            }
        });
    }
});

// Локализация заголовка по параметру ?lang=
const translations = {
    "en": "30 minutes a day is all you need to learn a language",
    "af": "30 minute per dag is al wat jy nodig het om 'n taal te leer",
    "ak": "Dɔnhwere 30 da biara na ɛhia wo sɛ wosua kasa",
    "am": "ቋንቋ ለመማር በቀን 30 ደቂቃ ብቻ ነው የሚያስፈልግዎት",
    "ar": "30 دقيقة يومياً هي كل ما تحتاجه لتعلّم لغة",
    "as": "এটা ভাষা শিকিবৰ বাবে দিনে 30 মিনিটহে প্ৰয়োজন",
    "az": "Dil öyrənmək üçün gündə cəmi 30 dəqiqə kifayətdir",
    "be": "30 хвілін у дзень – і гэтага дастаткова, каб вывучыць мову",
    "bg": "Само 30 минути на ден са ви нужни, за да научите език",
    "bn": "একটি ভাষা শিখতে প্রতিদিন মাত্র 30 মিনিটই যথেষ্ট",
    "bo": "སྐད་ཡིག་ཞིག་སློབ་བར་ཉིན་རེར་སྐར་མ 30 ཙམ་གྱིས་འགྲོ་གི་རེད",
    "bs": "Samo 30 minuta dnevno je sve što vam treba za učenje jezika",
    "ca": "Només necessites 30 minuts al dia per aprendre un idioma",
    "cs": "30 minut denně stačí, abyste se naučili jazyk",
    "da": "30 minutter om dagen er alt, hvad du behøver for at lære et sprog",
    "de": "30 Minuten am Tag reichen, um eine Sprache zu lernen",
    "el": "30 λεπτά την ημέρα είναι το μόνο που χρειάζεστε για να μάθετε μια γλώσσα",
    "eo": "30 minutoj tage sufiĉas por lerni lingvon",
    "es": "Solo necesitas 30 minutos al día para aprender un idioma",
    "et": "30 minutit päevas on kõik, mida keele õppimiseks vajad",
    "eu": "Egunean 30 minutu besterik ez duzu behar hizkuntza bat ikasteko",
    "fa": "روزانه 30 دقیقه برای یادگیری یک زبان کافی است",
    "ff": "Siifen 30 ñalawma tan waɗi kala koɗɗaaɗo ngam janngude ɗemngal",
    "fi": "30 minuuttia päivässä riittää kielen oppimiseen",
    "fr": "30 minutes par jour suffisent pour apprendre une langue",
    "gl": "Só precisas 30 minutos ao día para aprender un idioma",
    "gu": "ભાષા શીખવા માટે તમને દિવસના ફક્ત 30 મિનિટ જ જોઈએ",
    "ha": "Mintuna 30 a rana kaɗai kake buƙata don koyon harshe",
    "he": "30 דקות ביום זה כל מה שצריך כדי ללמוד שפה",
    "hi": "किसी भाषा को सीखने के लिए रोज़ 30 मिनट ही काफ़ी हैं",
    "hr": "30 minuta dnevno je sve što ti treba za učenje jezika",
    "ht": "30 minit pa jou se tout sa ou bezwen pou aprann yon lang",
    "hu": "Napi 30 perc is elég egy nyelv elsajátításához",
    "hy": "Օրը 30 րոպեն բավական է լեզու սովորելու համար։",
    "id": "30 menit sehari sudah cukup untuk belajar bahasa",
    "ig": "Naanị nkeji 30 kwa ụbọchị ka ị chọrọ iji mụta asụsụ",
    "is": "30 mínútur á dag er allt sem þú þarft til að læra tungumál",
    "it": "30 minuti al giorno sono tutto ciò che ti serve per imparare una lingua",
    "ja": "語学習得に必要なのは、1日30分だけ",
    "jv": "30 menit saben dina wis cukup kanggo sinau basa",
    "ka": "ენის სასწავლად დღეში 30 წუთი საკმარისია",
    "kk": "Тілді үйрену үшін күніне 30 минут жеткілікті",
    "km": "30 នាទីក្នុងមួយថ្ងៃគឺគ្រប់គ្រាន់សម្រាប់រៀនមួយភាសា",
    "kn": "ಒಂದು ಭಾಷೆ ಕಲಿಯಲು ನಿಮಗೆ ಬೇಕಾಗಿರುವುದು ದಿನಕ್ಕೆ 30 ನಿಮಿಷ ಮಾತ್ರ",
    "ko": "언어 학습에 하루 30분이면 충분합니다",
    "ku": "30 خولەک لە ڕۆژێکدا هەموو ئەوەیە کە پێویستتە بۆ فێربوونی زمانێک",
    "ky": "Тил үйрөнүү үчүн күнүнө 30 мүнөт гана жетиштүү",
    "lb": "30 Minutte pro Dag reechen, fir eng Sprooch ze léieren",
    "ln": "Miniti 30 na mokolo nde esengeli mpo oyekola monɔkɔ",
    "lo": "30 ນາທີຕໍ່ມື້ກໍພໍແລ້ວສຳລັບການຮຽນພາສາ",
    "lt": "Kalbai išmokti tereikia 30 minučių per dieną",
    "lv": "Valodas apguvei pietiek ar 30 minūtēm dienā",
    "mg": "30 minitra isan'andro ihany no ilainao hianarana fiteny",
    "mi": "30 meneti i te rā, kua rahi mō te ako i tētahi reo",
    "mk": "30 минути дневно е сè што ви треба за да научите јазик",
    "ml": "ഒരു ഭാഷ പഠിക്കാൻ ഒരു ദിവസം 30 മിനിറ്റ് മാത്രം മതി",
    "mn": "Хэл сурахад танд өдөрт ердөө 30 минут л хэрэгтэй",
    "mr": "एखादी भाषा शिकण्यासाठी दररोज 30 मिनिटे पुरेशी आहेत",
    "ms": "30 minit sehari sudah cukup untuk belajar bahasa",
    "mt": "30 minuta kuljum huma biżżejjed biex titgħallem lingwa",
    "my": "ဘာသာစကားတစ်ခုကို သင်ယူရန် နေ့စဉ် 30 မိနစ်ပဲ လိုအပ်သည်",
    "ne": "भाषा सिक्न दिनमा 30 मिनेट मात्रै पर्याप्त छ",
    "nl": "30 minuten per dag is alles wat je nodig hebt om een taal te leren",
    "no": "30 minutter om dagen er alt du trenger for å lære et språk",
    "om": "Afaan barachuuf guyyaa daqiiqaa 30 qofti siif gaha",
    "or": "ଦିନକୁ 30 ମିନିଟ ହିଁ ଭାଷା ଶିଖିବାକୁ ପର୍ଯ୍ୟାପ୍ତ",
    "pa": "ਕਿਸੇ ਭਾਸ਼ਾ ਨੂੰ ਸਿੱਖਣ ਲਈ ਰੋਜ਼ 30 ਮਿੰਟ ਕਾਫ਼ੀ ਹਨ",
    "pl": "30 minut dziennie wystarczy, by nauczyć się języka",
    "ps": "د ژبې زده کړې لپاره یوازې په ورځ کې ۳۰ دقیقې پکار دي",
    "pt": "30 minutos por dia é tudo o que precisa para aprender um idioma",
    "qu": "Simita yachaypaqqa, sapa p'unchaw 30 minutullañam",
    "ro": "30 de minute pe zi sunt tot ce îți trebuie ca să înveți o limbă",
    "ru": "30 минут в день – всё, что нужно, чтобы выучить язык",
    "rw": "Aminota 30 ku munsi ni yo ukeneye ngo wige ururimi",
    "si": "භාෂාවක් ඉගෙනීමට ඔබට අවශ්‍ය සියල්ල දිනකට මිනිත්තු 30කි",
    "sk": "Na učenie jazyka ti stačí 30 minút denne",
    "sl": "30 minut na dan je vse, kar potrebujete za učenje jezika",
    "sn": "Maminitsi 30 pazuva ndizvo zvese zvaunoda kudzidza mutauro",
    "so": "30 daqiiqo maalintii ayaa kugu filan inaad luqad barato",
    "sq": "30 minuta në ditë janë gjithçka të duhet për të mësuar një gjuhë",
    "sr": "Samo 30 minuta dnevno je dovoljno za učenje jezika",
    "su": "30 menit sapoé waé cukup pikeun diajar basa",
    "sv": "30 minuter om dagen är allt du behöver för att lära dig ett språk",
    "sw": "Dakika 30 kwa siku ndizo unazohitaji tu kujifunza lugha",
    "ta": "ஒரு மொழியைக் கற்க தினமும் 30 நிமிடங்கள் போதும்",
    "te": "ఒక భాష నేర్చుకోవడానికి రోజుకు 30 నిమిషాలే చాలు",
    "tg": "30 дақиқа дар як рӯз барои омӯхтани забон кофӣ аст",
    "th": "วันละ 30 นาที ก็เพียงพอสำหรับการเรียนภาษา",
    "tk": "Dil öwrenmek üçin günde 30 minut ýeterlik",
    "tl": "30 minuto lang sa isang araw ang kailangan mo para matuto ng wika",
    "tr": "Bir dil öğrenmek için günde sadece 30 dakikaya ihtiyacınız var",
    "ug": "بىر تىلنى ئۆگىنىش ئۈچۈن كۈنگە 30 مىنۇتلا يېتەرلىك",
    "uk": "30 хвилин на день – усе, що потрібно, щоб вивчити мову",
    "ur": "زبان سیکھنے کے لیے روزانہ 30 منٹ ہی کافی ہیں",
    "uz": "Til o'rganish uchun kuniga 30 daqiqa kifoya",
    "vi": "30 phút mỗi ngày là đủ để bạn học một ngôn ngữ",
    "xh": "Imizuzu engama-30 ngemini yiyo konke okufunayo ukufunda ulwimi",
    "yo": "Ìṣẹ́jú 30 lóòjọ́ ni o nílò láti kọ́ èdè kan",
    "zh": "每天30分钟，轻松掌握一门语言",
    "zu": "Amaminithi angu-30 ngosuku yikho konke okudingayo ukuze ufunde ulimi"
};

// Получаем язык из URL параметра ?lang=
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang');

if (lang && translations[lang]) {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        // Оборачиваем "30" в span с классом hero-number для стилизации
        const translatedText = translations[lang].replace(/30/g, '<span class="hero-number" translate="no">30</span>');
        heroTitle.innerHTML = translatedText;
    }
}

// Мобильное меню
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// FAQ аккордеон
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Закрываем все остальные
        faqItems.forEach(faq => faq.classList.remove('active'));

        // Открываем текущий, если он был закрыт
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Закрываем мобильное меню после клика
            if (navLinks.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
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
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Добавляем класс для анимации
document.querySelectorAll('.step, .testimonial-card, .faq-item').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// Анимация для секции "How it works"
document.querySelectorAll('.step-detailed, .bonus-block, .summary-block').forEach(el => {
    observer.observe(el);
});

// Слайдер
const slider = document.querySelector('.slider');
if (slider) {
    const track = slider.querySelector('.slider-track');
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.slider-btn-prev');
    const nextBtn = slider.querySelector('.slider-btn-next');
    const dotsContainer = slider.querySelector('.slider-dots');

    let currentIndex = 0;
    let slidesPerView = 3;
    let slideWidth = 0;
    let gap = 24;

    // Определяем количество видимых слайдов
    function updateSlidesPerView() {
        if (window.innerWidth <= 768) {
            slidesPerView = 1;
        } else if (window.innerWidth <= 1024) {
            slidesPerView = 2;
        } else {
            slidesPerView = 3;
        }
    }

    // Создаём точки
    function createDots() {
        dotsContainer.innerHTML = '';
        const totalDots = Math.ceil(slides.length - slidesPerView + 1);
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('button');
            dot.classList.add('slider-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    // Обновляем активную точку
    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Вычисляем ширину слайда
    function calculateSlideWidth() {
        if (slides.length > 0) {
            slideWidth = slides[0].offsetWidth + gap;
        }
    }

    // Переход к слайду
    function goToSlide(index) {
        const maxIndex = slides.length - slidesPerView;
        currentIndex = Math.max(0, Math.min(index, maxIndex));
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updateDots();
    }

    // Следующий слайд
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // Предыдущий слайд
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // Инициализация
    function initSlider() {
        updateSlidesPerView();
        calculateSlideWidth();
        createDots();
        goToSlide(0);
    }

    // События
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Свайп на мобильных
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let startTranslate = 0;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        startTranslate = currentIndex * slideWidth;
        track.style.transition = 'none';
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const diff = startX - currentX;
        track.style.transform = `translateX(-${startTranslate + diff}px)`;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        track.style.transition = 'transform 0.3s ease';
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        } else {
            goToSlide(currentIndex);
        }
        isDragging = false;
    });

    // Ресайз
    window.addEventListener('resize', () => {
        updateSlidesPerView();
        calculateSlideWidth();
        createDots();
        goToSlide(currentIndex);
    });

    // Запуск
    initSlider();
}

// Изменение хедера при скролле
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Анимация чисел в статистике
function animateNumbers() {
    const stats = document.querySelectorAll('.stat-number');

    stats.forEach(stat => {
        const text = stat.textContent;
        const hasK = text.includes('K');
        const hasPlus = text.includes('+');
        const number = parseFloat(text.replace(/[K+]/g, ''));

        let current = 0;
        const increment = number / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }

            let display = current.toFixed(current >= 100 ? 0 : 1);
            if (hasK) display += 'K';
            if (hasPlus) display += '+';
            stat.textContent = display;
        }, 30);
    });
}

// Запускаем анимацию чисел при видимости секции
const heroSection = document.querySelector('.hero');
const heroObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateNumbers();
        heroObserver.unobserve(heroSection);
    }
}, { threshold: 0.5 });

heroObserver.observe(heroSection);

// ========== Слайдер отзывов ==========
const testimonialsTrack = document.querySelector('.testimonials-track');
const testimonialsPrevBtn = document.querySelector('.testimonials-btn-prev');
const testimonialsNextBtn = document.querySelector('.testimonials-btn-next');

if (testimonialsTrack && testimonialsPrevBtn && testimonialsNextBtn) {
    let testimonialsPosition = 0;
    const testimonialCards = testimonialsTrack.querySelectorAll('.testimonial-card');
    const cardWidth = 350 + 24; // ширина карточки + gap
    const visibleCards = Math.floor((window.innerWidth - 120) / cardWidth);
    const maxPosition = Math.max(0, (testimonialCards.length - visibleCards) * cardWidth);

    function updateTestimonialsPosition() {
        testimonialsTrack.style.transform = `translateX(-${testimonialsPosition}px)`;
    }

    testimonialsNextBtn.addEventListener('click', () => {
        testimonialsPosition = Math.min(testimonialsPosition + cardWidth * 2, maxPosition);
        updateTestimonialsPosition();
    });

    testimonialsPrevBtn.addEventListener('click', () => {
        testimonialsPosition = Math.max(testimonialsPosition - cardWidth * 2, 0);
        updateTestimonialsPosition();
    });

    // Свайп для мобильных
    let touchStartX = 0;
    let touchEndX = 0;

    testimonialsTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    testimonialsTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                testimonialsPosition = Math.min(testimonialsPosition + cardWidth, maxPosition);
            } else {
                testimonialsPosition = Math.max(testimonialsPosition - cardWidth, 0);
            }
            updateTestimonialsPosition();
        }
    }, { passive: true });
}

// ========== Плавающая кнопка выбора языка ==========

// Определяем язык системы пользователя
function getSystemLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const shortLang = browserLang.split('-')[0];

    // Проверяем полный код (например zh-CN)
    if (languagesWithFlags[browserLang]) {
        return browserLang;
    }
    // Проверяем короткий код (например ru)
    if (languagesWithFlags[shortLang]) {
        return shortLang;
    }
    // По умолчанию английский (основной язык страницы)
    return 'en';
}

// Инициализация плавающей кнопки
function initLangFloatBtn() {
    const langFloatBtn = document.getElementById('langFloatBtn');
    const langFloatMenu = document.getElementById('langFloatMenu');
    const langFlag = document.getElementById('langFlag');
    const langMenuInner = document.getElementById('langMenuInner');

    if (!langFloatBtn || !langFloatMenu || !langFlag || !langMenuInner) return;

    // Определяем текущий язык
    const currentLang = getSystemLanguage();
    const currentFlagCode = languagesWithFlags[currentLang]?.flag || 'gb';

    // Устанавливаем флаг системного языка
    langFlag.className = `fi fi-${currentFlagCode}`;

    // Генерируем список языков
    langMenuInner.innerHTML = '';
    Object.entries(languagesWithFlags).forEach(([code, data]) => {
        const btn = document.createElement('button');
        btn.className = 'lang-option';
        btn.dataset.lang = code;
        btn.innerHTML = `<span class="fi fi-${data.flag}"></span> ${data.name}`;
        langMenuInner.appendChild(btn);
    });

    // Открытие/закрытие меню
    langFloatBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langFloatMenu.classList.toggle('active');
    });

    // Закрытие при клике вне меню
    document.addEventListener('click', (e) => {
        if (!langFloatMenu.contains(e.target) && !langFloatBtn.contains(e.target)) {
            langFloatMenu.classList.remove('active');
        }
    });

    // Выбор языка
    langMenuInner.addEventListener('click', (e) => {
        const option = e.target.closest('.lang-option');
        if (!option) return;

        const selectedLang = option.dataset.lang;
        const selectedFlag = languagesWithFlags[selectedLang]?.flag;

        // Обновляем флаг кнопки
        if (selectedFlag) {
            langFlag.className = `fi fi-${selectedFlag}`;
        }

        // Закрываем меню
        langFloatMenu.classList.remove('active');

        // Если выбран английский (исходный язык страницы) — сбрасываем перевод
        if (selectedLang === 'en') {
            // Удаляем cookie Google Translate
            document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
            document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + window.location.hostname;
            // Переходим на страницу без параметра lang
            window.location.href = window.location.pathname;
            return;
        }

        // Применяем перевод через Google Translate
        const googleSelect = document.querySelector('.goog-te-combo');
        if (googleSelect) {
            googleSelect.value = selectedLang;
            googleSelect.dispatchEvent(new Event('change'));
        }

        // Применяем свой перевод hero-заголовка
        applyHeroTranslation(selectedLang);
    });
}

// Инициализируем после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    initLangFloatBtn();
    // Инициализируем переводы hero-заголовка
    heroTranslations = translations;
});

// ========== Интерактивная смена пар флагов ==========
const flagPairs = [
    ['cn', 'cz'],  // Китайский + Чешский
    ['jp', 'es'],  // Японский + Испанский
    ['de', 'kr'],  // Немецкий + Корейский
    ['fr', 'ru'],  // Французский + Русский
    ['gb', 'jp'],  // Английский + Японский
    ['it', 'pl'],  // Итальянский + Польский
    ['pt', 'nl'],  // Португальский + Нидерландский
    ['ar', 'se'],  // Арабский + Шведский
    ['tr', 'ua'],  // Турецкий + Украинский
    ['gr', 'fi'],  // Греческий + Финский
];

let currentPairIndex = 0;
let autoChangeInterval;

function initFlagsPairAnimation() {
    const flagsPair = document.getElementById('flagsPair');
    const flagLeft = document.getElementById('flagLeft');
    const flagRight = document.getElementById('flagRight');

    if (!flagsPair || !flagLeft || !flagRight) return;

    function changePair(newIndex) {
        // Добавляем класс анимации
        flagLeft.classList.add('changing');
        flagRight.classList.add('changing');

        setTimeout(() => {
            // Меняем флаги
            const pair = flagPairs[newIndex];
            flagLeft.className = `fi fi-${pair[0]} flag-main`;
            flagRight.className = `fi fi-${pair[1]} flag-main`;

            // Небольшая задержка для плавности
            setTimeout(() => {
                flagLeft.classList.remove('changing');
                flagRight.classList.remove('changing');
            }, 50);
        }, 300);
    }

    function nextPair() {
        currentPairIndex = (currentPairIndex + 1) % flagPairs.length;
        changePair(currentPairIndex);
    }

    // Клик для смены пары
    flagsPair.addEventListener('click', () => {
        // Сбрасываем автосмену
        clearInterval(autoChangeInterval);
        nextPair();
        // Перезапускаем автосмену
        autoChangeInterval = setInterval(nextPair, 3000);
    });

    // Автоматическая смена каждые 3 секунды
    autoChangeInterval = setInterval(nextPair, 3000);

    // Останавливаем при уходе со страницы
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(autoChangeInterval);
        } else {
            autoChangeInterval = setInterval(nextPair, 3000);
        }
    });
}

document.addEventListener('DOMContentLoaded', initFlagsPairAnimation);

// ========== Динамический размер флагов в карусели ==========
function initFlagsScaleEffect() {
    const carousels = document.querySelectorAll('.flags-carousel');

    if (!carousels.length) return;

    function updateFlagsScale() {
        carousels.forEach(carousel => {
            const rect = carousel.getBoundingClientRect();
            const centerY = rect.top + rect.height / 2;
            const flags = carousel.querySelectorAll('.fi');

            flags.forEach(flag => {
                const flagRect = flag.getBoundingClientRect();
                const flagCenterY = flagRect.top + flagRect.height / 2;

                // Расстояние от центра карусели (0 = в центре, 1 = на краю)
                const distance = Math.abs(flagCenterY - centerY) / (rect.height / 2);

                // Scale: 1.3 в центре, 0.6 на краях
                const scale = Math.max(0.6, 1.3 - distance * 0.7);

                // Opacity: 1 в центре, 0.5 на краях
                const opacity = Math.max(0.5, 1 - distance * 0.5);

                flag.style.transform = `scale(${scale})`;
                flag.style.opacity = opacity;
            });
        });

        requestAnimationFrame(updateFlagsScale);
    }

    updateFlagsScale();
}

document.addEventListener('DOMContentLoaded', initFlagsScaleEffect);
