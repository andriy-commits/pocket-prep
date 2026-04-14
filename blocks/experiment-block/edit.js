import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    return (
        <>
            <InspectorControls>
                <PanelBody title="Experiment Settings">
                    <TextControl
                        label="Experiment Key"
                        value={attributes.experimentKey}
                        onChange={(val) => setAttributes({ experimentKey: val })}
                    />
                    <TextControl
                        label="Variant"
                        value={attributes.variant}
                        onChange={(val) => setAttributes({ variant: val })}
                    />
                </PanelBody>
            </InspectorControls>

            <div className="experiment-block">
                <p>
                    Experiment: {attributes.experimentKey} → {attributes.variant}
                </p>
                <InnerBlocks />
            </div>
        </>
    );
}