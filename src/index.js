import { addDOMObserver } from './util';

import styles from './index.module.css';

import translations from './i18n.json';


export default function ({ router, i18n: { translate: __, setTranslations } }) {
    router.addListener('courses.conferences', params => {

        setTranslations(translations);

        addDOMObserver('.close_conference_link', element => {
            let row = element.closest('.ig-row');

            if (row === null) return;

            row.querySelector('.ig-info > .has_actions').insertAdjacentHTML('beforeend', `
                <span class="label label-warning ig-row-label ${styles.endConferenceLabel}">
                    ${__('dont_forget_to_end_conference')}
                </span>
            `);
        });

    });
}
