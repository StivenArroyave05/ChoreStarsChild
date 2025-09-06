// i18n.js
let _locale = 'es';
let _dict   = {};

export async function loadLocale(lang) {
  try {
    const res = await fetch(`/locales/${lang}.json`);
    if (!res.ok) throw new Error('404');
    _dict = await res.json();
    _locale = lang;
  } catch (e) {
    console.warn(`i18n: no pude cargar ${lang}, usando ${_locale}`);
  }
}

export function t(key) {
  return _dict[key] || key;
}


// Aplica traducción a todos los elementos data-i18n
export function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    el.textContent = t(k);
  });
}
