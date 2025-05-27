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