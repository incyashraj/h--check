import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Masters in Global Supply Chain Management (STEM)',
		description: 'Awarded Scholarship',
		location: 'West Lafayette, USA',
		logo: Assets.Purdue,
		name: '',
		organization: 'Purdue University, Daniels School of Business',
		period: { from: new Date(2024, 7, 1), to: new Date(2025, 11, 1) },
		shortDescription: 'STEM Masters program with scholarship',
		slug: 'purdue-masters',
		subjects: ['Supply Chain Management', 'Strategic Sourcing', 'Procurement', 'Analytics', 'Operations']
	},
	{
		degree: 'Bachelors in Textile Technology',
		description: '',
		location: 'Mumbai, India',
		logo: Assets.VJTI,
		name: '',
		organization: 'VJTI, University of Mumbai',
		period: { from: new Date(2015, 3, 1), to: new Date(2019, 3, 1) },
		shortDescription: 'Bachelors degree in Textile Technology',
		slug: 'vjti-bachelors',
		subjects: ['Textile Engineering', 'Manufacturing', 'Quality Control', 'Supply Chain']
	}
];

export const title = 'Education';
