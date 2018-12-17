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
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
    translate,
    Create
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/communication/comment';
import TemplateReferenceField from '../templates/TemplateReferenceField';
import { required, minLength, maxLength, minValue, maxValue, number, regex, email, choices } from 'admin-on-rest';

export const NotificationDefIcon = Icon;

const NotificationDefTitle = translate(({ record, translate }) => <span>{translate('resources.notificationsdef.name', { smart_count: 1 })} UID:{record.uid}</span>);


export const NotificationDefList = (props) => (
    <List {...props} filters={<NotificationDefFilter />} sort={{ field: 'uid', order: 'ASC' }} perPage={25}>
        <Datagrid >
            <TextField source="uid" />
            <TemplateReferenceField />
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
            <TextInput source="object" validate={required}/>
            <TextInput source="from" validate={[required, email]}/>
            <TextInput source="to" validate={[required, email]}/>
        </SimpleForm>
    </Edit>
));

export const NotificationDefCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="object" validate={required}/>
            <TextInput source="from" validate={[required, email]}/>
            <TextInput source="to" validate={[required, email]}/>
            <ReferenceInput source="id" reference="templates" allowEmpty>
                <SelectInput source="uid" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);


const NotificationDefFilter = (props) => (
    <Filter {...props}>
        <TextInput label="pos.search" source="q" alwaysOn />
        <TextInput source="uid" />
        <TextInput source="object" />
        <TextInput source="from"/>
        <TextInput source="to"/>
    </Filter>
);


