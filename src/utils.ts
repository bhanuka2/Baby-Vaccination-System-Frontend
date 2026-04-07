import { Vaccine } from './types';

export const calcAge = (dob: string): string => {
    const now = new Date(), birth = new Date(dob);
    const months = (now.getFullYear() - birth.getFullYear()) * 12 + now.getMonth() - birth.getMonth();
    if (Number.isNaN(months)) return "-";
    return months < 12 ? `${months}m` : `${Math.floor(months / 12)}y ${months % 12}m`;
};

export const progressPct = (vaccines: Vaccine[]): number => {
    if (!vaccines || vaccines.length === 0) return 0;
    return Math.round((vaccines.filter(v => v.status === "done").length / vaccines.length) * 100);
};
