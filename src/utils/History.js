import { createBrowserHistory } from 'history';

const baseNode = document.getElementsByTagName('base')[0];
const baseUrl = baseNode && baseNode.getAttribute('href');

let history = createBrowserHistory({
    basename: baseUrl
});

export default history;