<script>
	import CommonPage from '$lib/components/CommonPage.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
</script>

<CommonPage title="Connect">
	<div class="connect-container">
		<div class="connect-header">
			<h2>Let's Connect!</h2>
			<p class="description">
				I'm always happy to help students and professionals with supply chain, procurement, and career guidance.
				Schedule a call with me to discuss:
			</p>
		</div>

		<div class="topics">
			<Chip size="0.9em">Career Guidance</Chip>
			<Chip size="0.9em">Supply Chain Insights</Chip>
			<Chip size="0.9em">Procurement Strategies</Chip>
			<Chip size="0.9em">Graduate School Advice</Chip>
		</div>

		<div class="scheduling-section">
			<h3>Schedule a Call</h3>
			<p class="scheduling-note">Choose a time that works best for you:</p>

			<!-- Calendly inline widget begin -->
			<div class="calendly-inline-widget"
				data-url="https://calendly.com/hemaja31/30min"
				style="min-width:320px;height:700px;">
			</div>
			<!-- Calendly inline widget end -->
		</div>

		<div class="contact-options">
			<h3>Other Ways to Connect</h3>
			<div class="contact-links">
				<a href="mailto:hpardesh@purdue.edu" class="contact-link">
					<i class="i-carbon-email"></i>
					<span>Email Me</span>
				</a>
				<a href="https://www.linkedin.com/in/hemja-pardeshi-b77138112/" target="_blank" rel="noopener" class="contact-link">
					<i class="i-carbon-logo-linkedin"></i>
					<span>LinkedIn</span>
				</a>
			</div>
		</div>
	</div>
</CommonPage>

<style lang="scss">
	.connect-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}

	.connect-header {
		text-align: center;
		margin-bottom: 30px;

		h2 {
			font-size: 2em;
			margin-bottom: 15px;
			color: var(--accent-text);
		}

		.description {
			font-size: 1.1em;
			color: var(--secondary-text);
			line-height: 1.6;
		}
	}

	.topics {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		justify-content: center;
		margin-bottom: 40px;
	}

	.scheduling-section {
		margin-bottom: 40px;

		h3 {
			font-size: 1.5em;
			margin-bottom: 10px;
			color: var(--accent-text);
		}

		.scheduling-note {
			color: var(--secondary-text);
			margin-bottom: 20px;
		}
	}


	.contact-options {
		margin-top: 40px;

		h3 {
			font-size: 1.5em;
			margin-bottom: 20px;
			text-align: center;
			color: var(--accent-text);
		}
	}

	.contact-links {
		display: flex;
		gap: 20px;
		justify-content: center;
		flex-wrap: wrap;
	}

	.contact-link {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 15px 30px;
		background: var(--main-hover);
		border: 1px solid var(--border);
		border-radius: 8px;
		text-decoration: none;
		color: var(--main-text);
		transition: all 0.3s ease;

		i {
			font-size: 1.5em;
			color: var(--accent-text);
		}

		span {
			font-weight: 500;
		}

		&:hover {
			background: var(--accent-text);
			color: white;
			transform: translateY(-2px);
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

			i {
				color: white;
			}
		}
	}

	@media (max-width: 768px) {
		.connect-header h2 {
			font-size: 1.5em;
		}

		.calendly-inline-widget {
			height: 600px !important;
		}

		.contact-link {
			padding: 12px 20px;
		}
	}
</style>
