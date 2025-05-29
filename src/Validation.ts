/**
 * A regular expression for validating email addresses.
 * 
 * This regex checks for the following criteria:
 * - Starts with alphanumeric characters, dots, underscores, percent signs, plus signs, or hyphens.
 * - Followed by the "@" symbol.
 * - Contains a domain name with alphanumeric characters and dots.
 * - Ends with a top-level domain of at least two alphabetic characters.
 * 
 * @constant {RegExp}
 */
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * A regular expression for validating passwords.
 * 
 * This regex checks for the following criteria:
 * - At least 8 characters long.
 * - Contains at least one letter (uppercase or lowercase).
 * - Contains at least one digit.
 * 
 * @constant {RegExp}
 */
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
