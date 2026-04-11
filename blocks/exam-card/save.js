import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { title, longname, url } = attributes;

    return (
        <a {...useBlockProps.save({
            className: 'exam__bundle-exam exam__bundle-exam-red',
            href: url
        })}>
            <RichText.Content
                tagName="div"
                className="exam__bundle-exam-title"
                value={title}
            />
            <RichText.Content
                tagName="div"
                className="exam__bundle-exam-longname"
                value={longname}
            />
        </a>
    );
}