import { AppActions } from '../../actions';
import { APP_CHANGE_LOCALE, Locale } from '../../actions/changeLocale';

export interface AppState {
    locale: Locale;
}

const initialState: AppState = {
    locale: 'pl'
};

export const app = (state = initialState, action: AppActions): AppState => {
    switch (action.type) {
        case APP_CHANGE_LOCALE:
            return {
                ...state,
                locale: action.locale
            };
        default:
            return state;
    }
};
