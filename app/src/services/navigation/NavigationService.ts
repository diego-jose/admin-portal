import { createHashHistory } from 'history';

export function goToRoute(path: string): void {
	const history = createHashHistory();
	history.push(path);
}
