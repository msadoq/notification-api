import React from 'react';
import {
    choices,
    Create,
    Datagrid,
    DateField,
    DateInput,
    Delete,
    Edit,
    EditButton,
    email,
    Filter,
    List,
    LongTextInput,
    maxLength,
    maxValue,
    minLength,
    minValue,
    NullableBooleanInput,
    number,
    NumberField,
    NumberInput,
    ReferenceField,
    ReferenceInput,
    regex,
    required,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
    translate
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/communication/comment';
import TemplateReferenceField from '../templates/TemplateReferenceField';

export const NotificationDefIcon = Icon;

const NotificationDefTitle = translate(({ record, translate }) => <span>{translate('resources.notificationsdef.name', { smart_count: 1 })} UID:{record.notifdefuid}</span>);


export const NotificationDefList = (props) => (
    <List {...props} filters={<NotificationDefFilter />} sort={{ field: 'notifdefuid', order: 'ASC' }} perPage={25}>
        <Datagrid >
            <TextField source="notifdefuid" label="UID" />
            <TemplateReferenceField label="Template UID"/>
            <TextField source="object" />
            <TextField source="from"/>
            <TextField source="to"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const NotificationDefEdit = translate(({ translate, ...rest }) => (
    <Edit title={<NotificationDefTitle />} {...rest} >
        <SimpleForm>
            <TextInput source="notifdefuid" label="UID" validate={required}/>
            <TemplateReferenceField label="Template UID"/>
            <TextInput source="object" validate={required }/>
            <TextInput source="from" validate={[required, email]}/>
            <TextInput source="to" validate={[required, email]}/>
        </SimpleForm>
    </Edit>
));

export const NotificationDefCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="notifdefuid" label="UID" validate={required}/>
            <TextInput source="object" validate={required}/>
            <TextInput source="from" validate={[required, email]}/>
            <TextInput source="to" validate={[required, email]}/>
            <ReferenceInput  label="Template UID" source="template_id" reference="templates" allowEmpty>
                <SelectInput optionText="templateuid" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);


const NotificationDefFilter = (props) => (
    <Filter {...props}>
        <TextInput label="pos.search" source="q" alwaysOn />
        <TextInput source="notifdefuid" />
        <TextInput source="object" />
        <TextInput source="from"/>
        <TextInput source="to"/>
    </Filter>
);

export const NotificationDefDelete = (props) => <Delete {...props} title={<NotificationDefTitle />} />;


