import { isPalindrome } from './Palindrome.ts';
describe('Palindrome Test ', () => {
	it('should word noon is palindrome', () => {
		expect(isPalindrome('noon')).toBe(true);
	});

	// it('should word box is palindrome', () => {
	// 	expect(isPalindrome('box')).toBe(false);
	// });

	// it('should word neon is palindrome', () => {
	// 	expect(isPalindrome('neon')).toBe(false);
	// });
});
