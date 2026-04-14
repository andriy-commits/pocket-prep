(function (blocks, blockEditor, components, element) {
    var el = element.createElement;
    var InnerBlocks = blockEditor.InnerBlocks;
    var InspectorControls = blockEditor.InspectorControls;
    var PanelBody = components.PanelBody;
    var TextControl = components.TextControl;

    blocks.registerBlockType('groundwrk/experiment', {
        edit: function (props) {
            return el(
                'div',
                { className: 'experiment-block' },

                el(InspectorControls, {},
                    el(PanelBody, { title: 'Experiment Settings' },
                        el(TextControl, {
                            label: 'Experiment Key',
                            value: props.attributes.experimentKey,
                            onChange: function (val) {
                                props.setAttributes({ experimentKey: val });
                            }
                        }),
                        el(TextControl, {
                            label: 'Variant',
                            value: props.attributes.variant,
                            onChange: function (val) {
                                props.setAttributes({ variant: val });
                            }
                        })
                    )
                ),

                el('p', {},
                    'Experiment: ' +
                    (props.attributes.experimentKey || '-') +
                    ' → ' +
                    (props.attributes.variant || '-')
                ),

                el(InnerBlocks)
            );
        },

        save: function (props) {
            return el(
                'div',
                {
                    className: 'experiment-block',
                    'data-experiment': props.attributes.experimentKey,
                    'data-variant': props.attributes.variant
                },
                el(InnerBlocks.Content)
            );
        }
    });

})(
    window.wp.blocks,
    window.wp.blockEditor,
    window.wp.components,
    window.wp.element
);