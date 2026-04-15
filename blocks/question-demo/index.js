(function (blocks, blockEditor, components, element) {
    var el = element.createElement;
    var TextControl = components.TextControl;
    var MediaUpload = blockEditor.MediaUpload;
    var Button = components.Button;

    blocks.registerBlockType('groundwrk/question-demo', {

        attributes: {
            iframeUrl: { type: 'string', default: '' },
            leftImage: { type: 'string', default: '' },
            rightImage: { type: 'string', default: '' }
        },

        edit: function (props) {

            return el(
                'div',
                { className: 'hero-container position-relative d-flex' },

                // ===== LEFT IMAGE =====
                props.attributes.leftImage
                    ? el('div', {},
                        el('figure', { className: 'left-image-hero' },
                            el('img', { src: props.attributes.leftImage })
                        ),

                        el(MediaUpload, {
                            onSelect: function (media) {
                                props.setAttributes({ leftImage: media.url });
                            },
                            allowedTypes: ['image'],
                            render: function (obj) {
                                return el('div', { style: { marginTop: '10px' } },
                                    el(Button, { onClick: obj.open, isSecondary: true }, 'Replace'),
                                    el(Button, {
                                        onClick: function () {
                                            props.setAttributes({ leftImage: '' });
                                        },
                                        isDestructive: true,
                                        style: { marginLeft: '10px' }
                                    }, 'Remove')
                                );
                            }
                        })
                    )
                    : el(MediaUpload, {
                        onSelect: function (media) {
                            props.setAttributes({ leftImage: media.url });
                        },
                        allowedTypes: ['image'],
                        render: function (obj) {
                            return el(Button, { onClick: obj.open, isSecondary: true }, 'Select Left Image');
                        }
                    }),

                // ===== CENTER =====
                el(
                    'div',
                    { className: 'question-demo-wrapper' },

                    el(
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
                    )
                ),

                // ===== RIGHT IMAGE =====
                props.attributes.rightImage
                    ? el('div', { className: 'align-self-end'},
                        el('figure', { className: 'right-image-hero' },
                            el('img', { src: props.attributes.rightImage })
                        ),

                        el(MediaUpload, {
                            onSelect: function (media) {
                                props.setAttributes({ rightImage: media.url });
                            },
                            allowedTypes: ['image'],
                            render: function (obj) {
                                return el('div', { style: { marginTop: '10px' } },
                                    el(Button, { onClick: obj.open, isSecondary: true }, 'Replace'),
                                    el(Button, {
                                        onClick: function () {
                                            props.setAttributes({ rightImage: '' });
                                        },
                                        isDestructive: true,
                                        style: { marginLeft: '10px' }
                                    }, 'Remove')
                                );
                            }
                        })
                    )
                    : el(MediaUpload, {
                        onSelect: function (media) {
                            props.setAttributes({ rightImage: media.url });
                        },
                        allowedTypes: ['image'],
                        render: function (obj) {
                            return el(Button, { onClick: obj.open, isSecondary: true }, 'Select Right Image');
                        }
                    })
            );
        },

        save: function (props) {
            return el(
                'div',
                { className: 'hero-container position-relative d-flex' },

                // LEFT
                props.attributes.leftImage &&
                el('figure', { className: 'left-image-hero' },
                    el('img', {
                        src: props.attributes.leftImage,
                        loading: 'lazy'
                    })
                ),

                // CENTER
                el(
                    'div',
                    { className: 'question-demo-wrapper' },

                    el(
                        'div',
                        { className: 'question-demo-block' },

                        el('iframe', {
                            src: props.attributes.iframeUrl,
                            loading: 'lazy'
                        })
                    )
                ),

                // RIGHT
                props.attributes.rightImage &&
                el('figure', { className: 'right-image-hero' },
                    el('img', {
                        src: props.attributes.rightImage,
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