import React from 'react';
import {
    AutocompleteInput,
    BooleanField,
    BooleanInput,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    EditButton,
    Filter,
    List,
    LongTextInput,
    NullableBooleanInput,
    NumberField,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
    translate
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/social/notifications';

export const TemplateIcon = Icon;

const TemplateTitle = translate(({ record, translate }) => <span>{translate('resources.templates.name', { smart_count: 1 })} "{record.name}"</span>);

export const TemplateList = (props) => (
    <List {...props} perPage={25}>
        <Datagrid >
            <TextField source="uid" />
            <TextField source="texte" style={{ maxWidth: '18em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
            <EditButton />
        </Datagrid>
    </List>
);

const detailStyle = { display: 'inline-block', verticalAlign: 'top', marginRight: '2em', minWidth: '8em' };

export const TemplateEdit = (props) => (
    <Edit {...props} >
        <SimpleForm>
            <LongTextInput source="texte" />
        </SimpleForm>
    </Edit>
);

