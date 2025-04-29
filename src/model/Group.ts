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
}