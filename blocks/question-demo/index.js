(function (blocks, blockEditor, components, element) {
    var el = element.createElement;
    var TextControl = components.TextControl;

    blocks.registerBlockType('groundwrk/question-demo', {
        edit: function (props) {

            return el(
                'div',
                { className: 'question-demo-block' },

                el(TextControl, {
                    label: 'Iframe URL',
                    value: props.attributes.iframeUrl,
                    onChange: function (val) {
                        props.setAttributes({ iframeUrl: val });
                    }
                }),

                props.attributes.iframeUrl
                    ? el('iframe', {
                        src: props.attributes.iframeUrl,
                        style: {
                            width: '100%',
                            height: '500px',
                            border: '1px solid #ddd',
                            marginTop: '15px'
                        }
                    })
                    : el('p', {}, 'Paste iframe URL above')
            );
        },

        save: function (props) {
            return el(
                'div',
                { className: 'question-demo-wrapper' }, // 👈 новый wrapper

                el(
                    'div',
                    { className: 'question-demo-block' },
                    el('iframe', {
                        src: props.attributes.iframeUrl,
                        loading: 'lazy'
                    })
                )
            );
        }
    });

})(
    window.wp.blocks,
    window.wp.blockEditor,
    window.wp.components,
    window.wp.element
);