import { Inter, Lusitana } from 'next/font/google';

// Importation de font il prennent en paramètre les sous ensemble, weight, subsets etc..
export const inter = Inter({subsets: ['latin']});

export const lusitana = Lusitana({ weight: ['400', '700'],
subsets: ['latin'],});