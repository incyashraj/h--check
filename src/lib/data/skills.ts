import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'ERP & Tools', slug: 'erp-tools' }),
	defineSkillCategory({ name: 'Analytics & BI', slug: 'analytics' }),
	defineSkillCategory({ name: 'Procurement Platforms', slug: 'procurement' }),
	defineSkillCategory({ name: 'Procurement Skills', slug: 'proc-skills' }),
	defineSkillCategory({ name: 'Technical Skills', slug: 'tech-skills' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'sap',
		color: 'blue',
		description: 'Enterprise resource planning system for procurement and supply chain management',
		logo: Assets.SAP,
		name: 'SAP',
		category: 'erp-tools'
	}),
	defineSkill({
		slug: 'oracle',
		color: 'red',
		description: 'Oracle ERP Cloud for procurement, finance, and supply chain operations',
		logo: Assets.Oracle,
		name: 'Oracle',
		category: 'erp-tools'
	}),
	defineSkill({
		slug: 'powerbi',
		color: 'yellow',
		description: 'Business intelligence and analytics platform for data visualization and reporting',
		logo: Assets.PowerBI,
		name: 'Power BI',
		category: 'analytics'
	}),
	defineSkill({
		slug: 'tableau',
		color: 'orange',
		description: 'Data visualization and business intelligence tool for analytics',
		logo: Assets.Tableau,
		name: 'Tableau',
		category: 'analytics'
	}),
	defineSkill({
		slug: 'sql',
		color: 'blue',
		description: 'Structured Query Language for database management and analysis',
		logo: Assets.PostgreSQL,
		name: 'SQL',
		category: 'tech-skills'
	}),
	defineSkill({
		slug: 'gepsmart',
		color: 'green',
		description: 'Cloud-native procurement software for sourcing and contract management',
		logo: Assets.GEPSmart,
		name: 'GEP Smart',
		category: 'procurement'
	}),
	defineSkill({
		slug: 'jaggaer',
		color: 'purple',
		description: 'Procurement and supply chain platform',
		logo: Assets.Jaggaer,
		name: 'Jaggaer',
		category: 'procurement'
	}),
	defineSkill({
		slug: 'ivalua',
		color: 'cyan',
		description: 'Source-to-Pay platform for procurement and supplier management',
		logo: Assets.Ivalua,
		name: 'Ivalua',
		category: 'procurement'
	}),
	defineSkill({
		slug: 'coupa',
		color: 'red',
		description: 'Cloud platform for business spend management',
		logo: Assets.Coupa,
		name: 'Coupa',
		category: 'procurement'
	}),
	defineSkill({
		slug: 'ariba',
		color: 'blue',
		description: 'SAP Ariba procurement and supply chain collaboration platform',
		logo: Assets.Ariba,
		name: 'Ariba',
		category: 'procurement'
	}),
	defineSkill({
		slug: 'negotiation',
		color: 'green',
		description: 'Strategic negotiation for supplier contracts and cost optimization',
		logo: Assets.Unknown,
		name: 'Negotiation',
		category: 'proc-skills'
	}),
	defineSkill({
		slug: 'costmodelling',
		color: 'orange',
		description: 'Should-cost analysis and TCO modeling for procurement decisions',
		logo: Assets.Unknown,
		name: 'Cost Modelling',
		category: 'proc-skills'
	}),
	defineSkill({
		slug: 'rfx',
		color: 'purple',
		description: 'RFI, RFQ, and RFP management for supplier selection',
		logo: Assets.Unknown,
		name: 'RFx Management',
		category: 'proc-skills'
	}),
	defineSkill({
		slug: 'srm',
		color: 'blue',
		description: 'Supplier Relationship Management and performance tracking',
		logo: Assets.Unknown,
		name: 'SRM',
		category: 'proc-skills'
	}),
	defineSkill({
		slug: 'excel',
		color: 'green',
		description: 'Advanced Excel for data analysis and reporting',
		logo: Assets.Excel,
		name: 'Excel',
		category: 'analytics'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
