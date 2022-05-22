const ROOT = '/website'; // https://github.com/COMP501-1107/website
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('nav').innerHTML = [
		['index.html', 'Home page'],
		['misc/topic.html', 'Technology/Topic'],
		['misc/opportunities.html', 'Opportunities'],
		['misc/risks.html', 'Risks'],
		['misc/choices.html', 'Choices'],
		['misc/ethics.html', 'Ethical Reflections'],
		['misc/references.html', 'References'],
		['misc/process.html', 'Process Support'],
		['misc/team-formation.html', 'Team Formation'],
		['misc/rubric.html', 'Assessment Rubric'],
		['misc/portfolio.html', 'Project Portfolio'],
	].map(([link, text]) => `<li><a href="${ROOT}/${link}">${text}</a></li>`).join('\n');
	document.querySelector('footer').innerHTML = `
        Group 1107 &ndash; Nate, Kishan, Blake
    `;
});
