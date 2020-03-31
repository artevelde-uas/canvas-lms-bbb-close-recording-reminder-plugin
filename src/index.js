import { addDOMObserver } from './util';


export default function ({ router }) {
    router.addListener('courses.conferences', params => {

        addDOMObserver('.close_conference_link', element => {
            let row = element.closest('.ig-row');

            if (row === null) return;

            row.querySelector('.ig-info > .has_actions').insertAdjacentHTML('beforeend', `
                <span class="label label-warning ig-row-label">
                    Don't forget to end this conference!
                </span>
            `);
        });

    });
}
