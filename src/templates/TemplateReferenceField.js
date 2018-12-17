import React from 'react';
import { ReferenceField, TextField } from 'admin-on-rest';

const TemplateReferenceField = (props) => (
    <ReferenceField label="Template" source="template_id" reference="templates" {...props}>
        <TextField source="id" />
    </ReferenceField>
);

TemplateReferenceField.defaultProps = {
    source: 'template_id',
    addLabel: true,
};

export default TemplateReferenceField;
