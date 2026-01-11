import { createI18n, type I18n } from 'vue-i18n'
import en from '../locales/en.json'
import ru from '../locales/ru.json'
import kz from '../locales/kz.json'

type MessageSchema = typeof en

export const i18n: I18n<MessageSchema> = createI18n<[MessageSchema], 'en' | 'ru' | 'kz'>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ru,
    kz,
  },
})
