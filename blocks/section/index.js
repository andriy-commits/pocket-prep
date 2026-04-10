(function (blocks, blockEditor, components, element) {
  var el = element.createElement;
  var RichText = blockEditor.RichText;
  var URLInputButton = blockEditor.URLInputButton;
  var useBlockProps = blockEditor.useBlockProps;

  blocks.registerBlockType('groundwrk/section', {
    edit: function (props) {
      var attrs = props.attributes;
      var setAttributes = props.setAttributes;
      var blockProps = useBlockProps({ className: 'gw-section' });

      return el(
        'section',
        blockProps,
        el(
          'div',
          { className: 'gw-section__inner' },
          el(RichText, {
            tagName: 'span',
            className: 'gw-section__eyebrow',
            value: attrs.eyebrow,
            allowedFormats: [],
            placeholder: 'Eyebrow',
            onChange: function (value) { setAttributes({ eyebrow: value }); }
          }),
          el(RichText, {
            tagName: 'h2',
            value: attrs.heading,
            allowedFormats: [],
            placeholder: 'Section heading',
            onChange: function (value) { setAttributes({ heading: value }); }
          }),
          el(RichText, {
            tagName: 'p',
            value: attrs.text,
            placeholder: 'Section text',
            onChange: function (value) { setAttributes({ text: value }); }
          }),
          el(
            'div',
            { className: 'gw-section__actions' },
            el(RichText, {
              tagName: 'span',
              value: attrs.buttonText,
              allowedFormats: [],
              placeholder: 'Button text',
              onChange: function (value) { setAttributes({ buttonText: value }); }
            }),
            el(URLInputButton, {
              url: attrs.buttonUrl,
              onChange: function (url) { setAttributes({ buttonUrl: url }); }
            })
          )
        )
      );
    },
    save: function (props) {
      var attrs = props.attributes;
      var blockProps = blockEditor.useBlockProps.save({ className: 'gw-section' });

      return el(
        'section',
        blockProps,
        el(
          'div',
          { className: 'gw-section__inner' },
          attrs.eyebrow ? el(RichText.Content, { tagName: 'span', className: 'gw-section__eyebrow', value: attrs.eyebrow }) : null,
          el(RichText.Content, { tagName: 'h2', value: attrs.heading }),
          el(RichText.Content, { tagName: 'p', value: attrs.text }),
          attrs.buttonText ? el(
            'div',
            { className: 'gw-section__actions' },
            el('a', { className: 'wp-element-button', href: attrs.buttonUrl || '#' }, attrs.buttonText)
          ) : null
        )
      );
    }
  });
})(window.wp.blocks, window.wp.blockEditor, window.wp.components, window.wp.element);
