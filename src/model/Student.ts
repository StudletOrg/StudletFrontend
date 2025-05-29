/**
 * Represents a student with personal information.
 * 
 * @interface Student
 * @property {number} id - The unique identifier for the student.
 * @property {string} firstname - The first name of the student.
 * @property {string} lastname - The last name of the student.
 * @property {string} email - The email address of the student.
 */
export interface Student {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}
