import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { title, longname, url } = attributes;

    return (
        <div {...useBlockProps({ className: 'exam__bundle-exam exam__bundle-exam-red' })}>
            <RichText
                tagName="div"
                className="exam__bundle-exam-title"
                value={title}
                onChange={(value) => setAttributes({ title: value })}
                placeholder="Title..."
            />
            <RichText
                tagName="div"
                className="exam__bundle-exam-longname"
                value={longname}
                onChange={(value) => setAttributes({ longname: value })}
                placeholder="Long name..."
            />
        </div>
    );
}