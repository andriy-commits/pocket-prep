(function () {
    if (!window.wp || !window.wp.blocks) {
        console.error('WP blocks not loaded');
        return;
    }

    const { blocks, blockEditor, element, components } = window.wp;

    const el = element.createElement;
    const RichText = blockEditor.RichText;
    const URLInputButton = blockEditor.URLInputButton;
    const useBlockProps = blockEditor.useBlockProps;

    blocks.registerBlockType('groundwrk/exam-card', {
        edit: function (props) {
            const { attributes, setAttributes } = props;

            return el(
                'div',
                useBlockProps({
                    className: 'exam__bundle-exam exam__bundle-exam-red'
                }),

                el(RichText, {
                    tagName: 'div',
                    className: 'exam__bundle-exam-title',
                    value: attributes.title,
                    onChange: (value) => setAttributes({ title: value })
                }),

                el(RichText, {
                    tagName: 'div',
                    className: 'exam__bundle-exam-longname',
                    value: attributes.longname,
                    onChange: (value) => setAttributes({ longname: value })
                }),

                el(URLInputButton, {
                    url: attributes.url,
                    onChange: (url) => setAttributes({ url })
                })
            );
        },

        save: function (props) {
            const { attributes } = props;

            return el(
                'a',
                {
                    ...useBlockProps.save({
                        className: 'exam__bundle-exam exam__bundle-exam-red'
                    }),
                    href: attributes.url || '#'
                },

                el(RichText.Content, {
                    tagName: 'div',
                    className: 'exam__bundle-exam-title',
                    value: attributes.title
                }),

                el(RichText.Content, {
                    tagName: 'div',
                    className: 'exam__bundle-exam-longname',
                    value: attributes.longname
                })
            );
        }
    });

})();