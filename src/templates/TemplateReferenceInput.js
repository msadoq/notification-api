import React from 'react';
import { ReferenceField, TextField } from 'admin-on-rest';

const TemplateReferenceField = (props) => (
    <ReferenceField label="Template" source="id" reference="templates" {...props}>
        <TextField source="uid" />
    </ReferenceField>
);

TemplateReferenceField.defaultProps = {
    source: 'template_id',
    addLabel: true,
};

export default TemplateReferenceField;
