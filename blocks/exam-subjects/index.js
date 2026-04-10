document.addEventListener('DOMContentLoaded', function () {
    if (!window.wp || !window.wp.blocks) {
        console.error('WP blocks not loaded');
        return;
    }

    (function (blocks, blockEditor, element, components, data) {
        const el = element.createElement;
        const useBlockProps = blockEditor.useBlockProps;
        const TextControl = components.TextControl;
        const Button = components.Button;
        const createBlock = blocks.createBlock;

        blocks.registerBlockType('groundwrk/exam-subjects', {
            edit: function (props) {
                const { attributes, setAttributes, clientId } = props;

                function addNewBlock() {
                    const newBlock = createBlock('groundwrk/exam-subjects', {
                        title: 'Primary Assessment',
                        percent: '75',
                        correct: '12 of 16 Correct',
                        color: 'green'
                    });

                    const blockEditorStore = data.select('core/block-editor');
                    const blockEditorDispatch = data.dispatch('core/block-editor');

                    const currentIndex = blockEditorStore.getBlockIndex(clientId);
                    const rootClientId = blockEditorStore.getBlockRootClientId(clientId);

                    blockEditorDispatch.insertBlocks(
                        [newBlock],
                        currentIndex + 1,
                        rootClientId
                    );
                }

                let colorClass = 'exam__subject-bar-inner-green';
                if (attributes.color === 'yellow') colorClass = 'exam__subject-bar-inner-yellow';
                if (attributes.color === 'red') colorClass = 'exam__subject-bar-inner-red';

                return el(
                    'div',
                    useBlockProps(),

                    el(
                        'div',
                        { className: 'exam__subjects-list' },

                        el(
                            'div',
                            { className: 'exam__subject' },

                            el(
                                'div',
                                { className: 'exam__subject-top' },

                                el(
                                    'div',
                                    {},
                                    el(TextControl, {
                                        value: attributes.title,
                                        onChange: function (value) {
                                            setAttributes({ title: value });
                                        },
                                        placeholder: 'Title'
                                    })
                                ),

                                el(
                                    'div',
                                    {},
                                    el(TextControl, {
                                        value: attributes.percent,
                                        onChange: function (value) {
                                            setAttributes({ percent: value });
                                        },
                                        placeholder: 'Percent'
                                    })
                                )
                            ),

                            el(
                                'div',
                                { className: 'exam__subject-correct' },
                                el(TextControl, {
                                    value: attributes.correct,
                                    onChange: function (value) {
                                        setAttributes({ correct: value });
                                    },
                                    placeholder: 'Correct text'
                                })
                            ),

                            el(
                                'div',
                                { className: 'exam__subject-bar' },
                                el('div', {
                                    className: 'exam__subject-bar-inner ' + colorClass,
                                    style: { width: (attributes.percent || 0) + '%' }
                                })
                            ),

                            el(
                                'select',
                                {
                                    value: attributes.color || 'green',
                                    onChange: function (e) {
                                        setAttributes({ color: e.target.value });
                                    },
                                    style: {
                                        marginTop: '8px',
                                        width: '100%'
                                    }
                                },
                                el('option', { value: 'green' }, 'Green'),
                                el('option', { value: 'yellow' }, 'Yellow'),
                                el('option', { value: 'red' }, 'Red')
                            )
                        )
                    ),

                    el(
                        Button,
                        {
                            variant: 'primary',
                            onClick: addNewBlock,
                            style: { marginTop: '12px' }
                        },
                        'Add Item'
                    )
                );
            },

            save: function (props) {
                const { attributes } = props;
                let colorClass = 'exam__subject-bar-inner-green';

                if (attributes.color === 'yellow') {
                    colorClass = 'exam__subject-bar-inner-yellow';
                }

                if (attributes.color === 'red') {
                    colorClass = 'exam__subject-bar-inner-red';
                }

                return el(
                    'div',
                    useBlockProps.save(),

                    el(
                        'div',
                        { className: 'exam__subjects-list' },

                        el(
                            'div',
                            { className: 'exam__subject' },

                            el(
                                'div',
                                { className: 'exam__subject-top' },
                                el('div', {}, attributes.title || ''),
                                el('div', {}, (attributes.percent || '') + '%')
                            ),

                            el(
                                'div',
                                { className: 'exam__subject-correct' },
                                attributes.correct || ''
                            ),

                            el(
                                'div',
                                { className: 'exam__subject-bar' },
                                el('div', {
                                    className: 'exam__subject-bar-inner ' + colorClass,
                                    style: { width: (attributes.percent || 0) + '%' }
                                })
                            )
                        )
                    )
                );
            }
        });
    })(
        window.wp.blocks,
        window.wp.blockEditor || window.wp.editor,
        window.wp.element,
        window.wp.components,
        window.wp.data
    );
});