export function isPalindrome(inputString: string): boolean {
	if (inputString.length === 0) {
		return true;
	} else {
		const firstChar = inputString.charAt(0);
		const lastChar = inputString.charAt(inputString.length - 1);
		const mid = inputString.substring(1, inputString.length - 1);
		return firstChar === lastChar && isPalindrome(mid);
	}
}
