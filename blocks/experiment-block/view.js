document.addEventListener('DOMContentLoaded', function () {
    const experiment = window.Experiment?.initialize('API_KEY');

    if (!experiment) return;

    (async () => {
        await experiment.fetch();

        const data = {
            homepage_test: experiment.variant('homepage_test')?.value
        };

        document.querySelectorAll('.experiment-block').forEach(block => {
            const key = block.dataset.experiment;
            const variant = block.dataset.variant;

            const userVariant = data[key];

            if (userVariant && userVariant !== variant) {
                block.style.display = 'none';
            }
        });
    })();
});