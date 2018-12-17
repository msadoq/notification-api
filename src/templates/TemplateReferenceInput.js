import React from 'react';
import { ReferenceField, TextInput } from 'admin-on-rest';

const TemplateReferenceInput = (props) => (
    <ReferenceField label="Template" source="id" reference="templates" {...props}>
        <TextInput source="templateuid" />
    </ReferenceField>
);

TemplateReferenceInput.defaultProps = {
    source: 'template_id',
    addLabel: true,
};

export default TemplateReferenceInput;
