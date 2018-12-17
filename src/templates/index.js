import React from 'react';
import {
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
    RichTextField,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
    translate,
    Create,
    Delete
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/action/bookmark';
import {AutocompleteInput} from "../commands";
import RichTextInput from 'aor-rich-text-input';
import { required, minLength, maxLength, minValue, maxValue, number, regex, email, choices } from 'admin-on-rest';


export const TemplateIcon = Icon;

const TemplateTitle = translate(({ record, translate }) => <span>{translate('resources.templates.name', { smart_count: 1 })} UID:{record.templateuid}</span>);

export const TemplateList = (props) => (
    <List {...props} filters={<TemplateFilter />} sort={{ field: 'templateuid', order: 'ASC' }} perPage={25}>
        <Datagrid >
            <TextField source="templateuid" label="UID" />
            <RichTextField source="texte" style={{ maxWidth: '18em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
            <EditButton />
        </Datagrid>
    </List>
);

export const TemplateEdit = translate(({ translate, ...rest }) => (
    <Edit title={<TemplateTitle />} {...rest} >
        <SimpleForm>
            <TextInput source="templateuid" label="UID" validate={required}/>
            <RichTextInput source="texte" validate={required} addLabel={true} />
        </SimpleForm>
    </Edit>
));

export const TemplateCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="templateuid" label="UID" validate={required} />
            <RichTextInput source="texte" validate={required} />
        </SimpleForm>
    </Create>
);

const TemplateFilter = (props) => (
    <Filter {...props}>
        <TextInput label="pos.search" source="q" alwaysOn />
        <TextInput source="templateuid" label="UID" />
    </Filter>
);

export const TemplateDelete = (props) => <Delete {...props} title={<TemplateTitle />} />;


