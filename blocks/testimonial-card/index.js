(function () {
    if (!window.wp || !window.wp.blocks) {
        console.error('WP blocks not loaded');
        return;
    }

    const { blocks, blockEditor, element, components } = window.wp;

    const el = element.createElement;
    const RichText = blockEditor.RichText;
    const useBlockProps = blockEditor.useBlockProps;
    const SelectControl = components.SelectControl;
    const TextControl = components.TextControl;
    const MediaUpload = blockEditor.MediaUpload;
    const MediaUploadCheck = blockEditor.MediaUploadCheck;
    const Button = components.Button;
    const InspectorControls = blockEditor.InspectorControls;
    const PanelBody = components.PanelBody;

    blocks.registerBlockType('groundwrk/testimonial-card', {
        edit: function (props) {
            const { attributes, setAttributes } = props;

            return el(
                'div',
                useBlockProps({
                    className: `quote quote--${attributes.variant}`
                }),

                el(
                    InspectorControls,
                    {},
                    el(
                        PanelBody,
                        { title: 'Settings', initialOpen: true },

                        el(SelectControl, {
                            label: 'Color',
                            value: attributes.variant,
                            options: [
                                { label: 'Red', value: 'red' },
                                { label: 'Green', value: 'green' },
                                { label: 'Purple', value: 'purple' },
                                { label: 'Blue', value: 'blue' }
                            ],
                            onChange: function (val) {
                                setAttributes({ variant: val });
                            }
                        }),

                        el(TextControl, {
                            label: 'Name',
                            value: attributes.name,
                            onChange: function (val) {
                                setAttributes({ name: val });
                            }
                        }),

                        el(TextControl, {
                            label: 'Exam',
                            value: attributes.exam,
                            onChange: function (val) {
                                setAttributes({ exam: val });
                            }
                        })
                    )
                ),

                // ICON
                el(
                    'div',
                    { className: 'quote__icon' },

                    attributes.icon
                        ? el(
                            'div',
                            { className: 'quote__icon-controls-wrap' },

                            el('img', {
                                src: attributes.icon,
                                alt: '',
                                style: {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    display: 'block'
                                }
                            }),

                            el(
                                'div',
                                {
                                    className: 'quote__icon-buttons',
                                    style: { marginTop: '10px', textAlign: 'center' }
                                },

                                el(
                                    MediaUploadCheck,
                                    {},
                                    el(MediaUpload, {
                                        onSelect: function (media) {
                                            setAttributes({ icon: media.url });
                                        },
                                        allowedTypes: ['image'],
                                        render: function (obj) {
                                            return el(
                                                Button,
                                                {
                                                    onClick: obj.open,
                                                    isSecondary: true
                                                },
                                                'Replace Icon'
                                            );
                                        }
                                    })
                                ),

                                el(
                                    Button,
                                    {
                                        isDestructive: true,
                                        onClick: function () {
                                            setAttributes({ icon: '' });
                                        },
                                        style: { marginLeft: '8px' }
                                    },
                                    'Remove Icon'
                                )
                            )
                        )
                        : el(
                            MediaUploadCheck,
                            {},
                            el(MediaUpload, {
                                onSelect: function (media) {
                                    setAttributes({ icon: media.url });
                                },
                                allowedTypes: ['image'],
                                render: function (obj) {
                                    return el(
                                        Button,
                                        {
                                            onClick: obj.open,
                                            isSecondary: true
                                        },
                                        'Select Icon'
                                    );
                                }
                            })
                        )
                ),

                // TEXT
                el(
                    'div',
                    { className: 'quote__text' },

                    el(RichText, {
                        tagName: 'div',
                        className: 'quote__text-inner',
                        value: attributes.text,
                        onChange: function (val) {
                            setAttributes({ text: val });
                        },
                        placeholder: 'Enter quote...'
                    })
                ),

                // BYLINE
                el(
                    'div',
                    { className: 'quote__byline' },

                    el(
                        'div',
                        { className: 'quote__byline-name' },
                        attributes.name || 'Name'
                    ),

                    attributes.exam
                        ? el('div', { className: 'quote__byline-mdash' }, '—')
                        : null,

                    attributes.exam
                        ? el(
                            'div',
                            { className: 'quote__byline-exam' },
                            attributes.exam
                        )
                        : null
                )
            );
        },

        save: function (props) {
            const { attributes } = props;

            return el(
                'div',
                useBlockProps.save({
                    className: `quote quote--${attributes.variant}`
                }),

                attributes.icon
                    ? el(
                        'div',
                        { className: 'quote__icon' },
                        el('img', {
                            src: attributes.icon,
                            alt: '',
                            loading: 'lazy'
                        })
                    )
                    : null,

                el(
                    'div',
                    { className: 'quote__text' },

                    el(RichText.Content, {
                        tagName: 'div',
                        className: 'quote__text-inner',
                        value: attributes.text
                    })
                ),

                el(
                    'div',
                    { className: 'quote__byline' },

                    el(
                        'div',
                        { className: 'quote__byline-name' },
                        attributes.name
                    ),

                    attributes.exam
                        ? el('div', { className: 'quote__byline-mdash' }, '—')
                        : null,

                    attributes.exam
                        ? el(
                            'div',
                            { className: 'quote__byline-exam' },
                            attributes.exam
                        )
                        : null
                )
            );
        }
    });
})();