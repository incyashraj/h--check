import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Hemja';

export const lastName = 'Pardeshi';

export const description =
	'Supply chain and strategic sourcing professional with 5+ years of global experience managing suppliers across IT, software, CapEx, and facilities categories. Proven track record of delivering multi-million-dollar cost savings, influencing engineering/design decisions, leading cross-functional teams, and ensuring supply continuity for complex new products.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/incyashraj' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/hemja-pardeshi-b77138112/'
	},
	{
		platform: Platform.Email,
		link: 'hpardesh@purdue.edu'
	}
];

export const skills = getSkills('sap', 'oracle', 'powerbi', 'tableau', 'sql');
