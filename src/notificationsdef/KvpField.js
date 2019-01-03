import React from 'react';
import {
    TextInput,
    Datagrid, translate, List, SimpleForm
} from "admin-on-rest";
import { Field } from 'redux-form'

const KvpField = ( { record } ) => {
    console.log('----------------',record);
    return (
        <div>
            {Object.keys(record.kvp).map(key => ([
                <Field name={key} />
            ]))}
        </div>
    )
};

const TranslatedKvpField = translate(KvpField);

TranslatedKvpField.defaultProps = {
    addLabel: true,
    source: 'kvp',
};

export default TranslatedKvpField;


