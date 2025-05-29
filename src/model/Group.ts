/**
 * Represents a note created by an author.
 * 
 * @interface Note
 * @property {number} id - The unique identifier for the note.
 * @property {string} title - The title of the note.
 * @property {string} creationDate - The date when the note was created, in ISO 8601 format.
 * @property {string | null} content - The content of the note. Can be null if no content is provided.
 * @property {Object} author - The author of the note.
 * @property {number} author.id - The unique identifier for the author.
 * @property {string} author.firstName - The first name of the author.
 * @property {string} author.lastName - The last name of the author.
 */
export interface Note {
    id: number;
    title: string;
    creationDate: string;
    content: string | null;
    author: {
        id: number;
        firstName: string;
        lastName: string;
    };
}

/**
 * Represents a group of students in a specific subject.
 * 
 * @interface Group
 * @property {number} groupId - The unique identifier for the group.
 * @property {string} groupNumber - The number assigned to the group.
 * @property {Object} professor - The professor associated with the group.
 * @property {string | null} professor.firstName - The first name of the professor. Can be null if not provided.
 * @property {string | null} professor.lastName - The last name of the professor. Can be null if not provided.
 * @property {string | null} professor.email - The email address of the professor. Can be null if not provided.
 * @property {number} studentCount - The number of students in the group.
 * @property {string} subject - The subject associated with the group.
 * @property {Note[]} [notes] - An optional array of notes related to the group.
 */
export interface Group {
    groupId: number;
    groupNumber: string;
    professor: {
        firstName: string | null;
        lastName: string | null;
        email: string | null;
    };
    studentCount: number;
    subject: string;
    notes?: Note[];
}
