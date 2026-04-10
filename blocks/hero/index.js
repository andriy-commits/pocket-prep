(function (blocks, blockEditor, components, element) {
    var el = element.createElement;
    var RichText = blockEditor.RichText;
    var URLInputButton = blockEditor.URLInputButton;
    var InnerBlocks = blockEditor.InnerBlocks;
    var useBlockProps = blockEditor.useBlockProps;

    blocks.registerBlockType('groundwrk/hero', {
        edit: function (props) {
            var attrs = props.attributes;
            var setAttributes = props.setAttributes;
            var blockProps = useBlockProps({ className: 'gw-hero' });

            return el(
                'section',
                blockProps,
                el(
                    'div',
                    { className: 'gw-hero__inner' },

                    /* LEFT */
                    el(
                        'div',
                        { className: 'gw-hero__left' },

                        el(RichText, {
                            tagName: 'a',
                            className: 'exam__banner-bundle',
                            value: attrs.bannerText,
                            placeholder: 'Banner text',
                            onChange: function (value) {
                                setAttributes({ bannerText: value });
                            }
                        }),

                        el(URLInputButton, {
                            url: attrs.bannerUrl,
                            onChange: function (url) {
                                setAttributes({ bannerUrl: url });
                            }
                        }),

                        el(RichText, {
                            tagName: 'h1',
                            value: attrs.heading,
                            placeholder: 'Hero heading',
                            onChange: function (value) {
                                setAttributes({ heading: value });
                            }
                        }),

                        el(RichText, {
                            tagName: 'p',
                            value: attrs.text,
                            placeholder: 'Hero text',
                            onChange: function (value) {
                                setAttributes({ text: value });
                            }
                        }),

                        el(
                            'div',
                            { className: 'gw-hero__actions' },
                            el(RichText, {
                                tagName: 'span',
                                value: attrs.buttonText,
                                placeholder: 'Button text',
                                onChange: function (value) {
                                    setAttributes({ buttonText: value });
                                }
                            }),
                            el(URLInputButton, {
                                url: attrs.buttonUrl,
                                onChange: function (url) {
                                    setAttributes({ buttonUrl: url });
                                }
                            })
                        )
                    ),

                    /* RIGHT IMAGE через Gutenberg */
                    el(
                        'div',
                        { className: 'gw-hero__right' },
                        el(InnerBlocks, {
                            allowedBlocks: ['core/image'],
                            template: [['core/image']],
                            templateLock: false
                        })
                    )
                )
            );
        },

        save: function (props) {
            var attrs = props.attributes;
            var blockProps = blockEditor.useBlockProps.save({ className: 'gw-hero' });

            return el(
                'section',
                blockProps,
                el(
                    'div',
                    { className: 'gw-hero__inner' },

                    /* LEFT */
                    el(
                        'div',
                        { className: 'gw-hero__left' },

                        attrs.bannerText &&
                        el(
                            'a',
                            {
                                href: attrs.bannerUrl || '#',
                                className: 'exam__banner-bundle'
                            },
                            attrs.bannerText
                        ),

                        el(RichText.Content, {
                            tagName: 'h1',
                            value: attrs.heading
                        }),

                        el(RichText.Content, {
                            tagName: 'p',
                            value: attrs.text
                        }),

                        attrs.buttonText &&
                        el(
                            'div',
                            { className: 'gw-hero__actions' },
                            el(
                                'a',
                                {
                                    className: 'wp-element-button',
                                    href: attrs.buttonUrl || '#'
                                },
                                attrs.buttonText
                            )
                        )
                    ),

                    /* RIGHT */
                    el(
                        'div',
                        { className: 'gw-hero__right' },
                        el(InnerBlocks.Content)
                    )
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