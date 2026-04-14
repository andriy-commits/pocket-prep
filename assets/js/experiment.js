const experiment = window.Experiment.initialize('API_KEY');

(async () => {
    await experiment.fetch();

    window.__experimentData = {
        homepage_test: experiment.variant('homepage_test')?.value
    };

    document.dispatchEvent(new Event('experimentReady'));
})();

document.addEventListener('experimentReady', () => {
    document.querySelectorAll('.experiment-block').forEach(block => {
        const key = block.dataset.experiment;
        const variant = block.dataset.variant;

        const userVariant = window.__experimentData?.[key];

        if (userVariant && userVariant !== variant) {
            block.style.display = 'none';
        }
    });
});