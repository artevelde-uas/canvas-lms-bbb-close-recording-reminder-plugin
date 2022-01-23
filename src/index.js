import { router, dom } from '@artevelde-uas/canvas-lms-app';

import __ from './i18n';

import styles from './index.module.css';


export default function () {
    router.onRoute('courses.conferences', () => {
        dom.onElementAdded('.close_conference_link', element => {
            const row = element.closest('.ig-row');

            if (row === null) return;

            row.querySelector('.ig-info > .has_actions').insertAdjacentHTML('beforeend', `
                <span class="label label-warning ig-row-label ${styles.endConferenceLabel}">
                    ${__('dont_forget_to_end_conference')}
                </span>
            `);
        });

    });

    return {
        ...require('../package.json'),
        title: __('package.title'),
        description: __('package.description')
    };
}
