import { Action } from 'redux';

export const APP_CHANGE_LOCALE = 'APP_CHANGE_LOCALE';

export type Locale = 'en' | 'pl';

export interface ChangeLocale extends Action {
    type: typeof APP_CHANGE_LOCALE;
    locale: Locale;
}

export function changeLocale(locale: Locale = 'pl'): ChangeLocale {
    return {
        type: APP_CHANGE_LOCALE,
        locale
    };
}
