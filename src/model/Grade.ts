/**
 * Represents a student's grade in a specific subject.
 * 
 * @interface Grade
 * @property {number} id - The unique identifier for the grade entry.
 * @property {string} subject - The name of the subject for which the grade is assigned.
 * @property {number} grade - The numerical value of the grade.
 */
export interface Grade {
    id: number;
    subject: string;
    grade: number;
}
