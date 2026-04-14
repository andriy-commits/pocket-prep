import { InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    return (
        <div
            className="experiment-block"
            data-experiment={attributes.experimentKey}
            data-variant={attributes.variant}
        >
            <InnerBlocks.Content />
        </div>
    );
}