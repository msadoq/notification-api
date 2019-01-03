import React from 'react';
import {
    Create,
    Datagrid,
    Delete,
    Edit,
    EditButton,
    email,
    Filter,
    List,
    ReferenceInput,
    required,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
    translate,
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/communication/comment';
import TemplateReferenceField from '../templates/TemplateReferenceField';
import EmailsToField from './EmailsToField';
import ParameterTable from './ParameterTable'

export const NotificationDefIcon = Icon;

const NotificationDefTitle = translate(({ record, translate }) => <span>{translate('resources.notificationsdef.name', { smart_count: 1 })} UID:{record.notifdefuid}</span>);

const NotificationDefFilter = (props) => (
    <Filter {...props}>
        <TextInput label="pos.search" source="q" alwaysOn />
        <TextInput source="notifdefuid" label="UID" />
        <TextInput source="object" />
        <TextInput source="from"/>
    </Filter>
);

export const NotificationDefList = (props) => (
    <List {...props} filters={<NotificationDefFilter />} sort={{ field: 'notifdefuid', order: 'ASC' }} perPage={25}>
        <Datagrid >
            <TextField source="notifdefuid" label="UID" />
            <TemplateReferenceField label="Template UID"/>
            <TextField source="object" />
            <TextField source="from"/>
            <EmailsToField />
            <EditButton />
        </Datagrid>
    </List>
);

export const NotificationDefEdit = translate(({ translate, ...rest }) => (
    <Edit title={<NotificationDefTitle />} {...rest} >
        <SimpleForm>
            <TextInput source="notifdefuid" label="UID" validate={required}/>
            <ReferenceInput  label="Template UID" source="template_id" reference="templates" allowEmpty>
                <SelectInput optionText="templateuid" />
            </ReferenceInput>
            <TextInput source="object" validate={required }/>
            <TextInput source="from" validate={[required, email]}/>
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



export const NotificationDefDelete = (props) => <Delete {...props} title={<NotificationDefTitle />} />;


