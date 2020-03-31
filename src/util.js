import watched from 'watched';


export function addDOMObserver(query, addedHandler, removedHandler = null) {
    let nodeList = watched(document.body).querySelectorAll(query);
    let elements = document.querySelectorAll(query);

    if (elements.length > 0) {
        elements.forEach(element => {
            addedHandler(element);
        });
    }

    nodeList.on('added', elements => {
        elements.forEach(element => {
            addedHandler(element);
        });
    });

    nodeList.on('removed', elements => {
        elements.forEach(element => {
            removedHandler(element);
        });
    });
}
