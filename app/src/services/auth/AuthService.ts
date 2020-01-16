export function login(email: string): void {
	window.location.assign(`/login?email=${email}`);
}

export function isAuthenticated(): boolean {
	return !!localStorage.getItem('system-admin-auth');
}
