import React from 'react';
import {ArrayInput, SimpleFormIterator, DateInput, TextInput} from 'admin-on-rest';
import './backlinks.json';
// import { map } from 'lodash';
//
// const ParameterTable = ({record}) => {
//     console.log('record: ----------------', record);
//     return (
//         <ArrayInput source="parameters">
//             <SimpleFormIterator>
//                 {map(record.parameters,(val, key) => (
//                     <TextInput source="id"/>
//                 ))}
//             </SimpleFormIterator>
//         </ArrayInput>
//     )
// };
//
// const TranslatedParameterTable = translate(ParameterTable);
//
// TranslatedParameterTable.defaultProps = {
//     addLabel: true,
//     source: 'parameters',
// };
//
// export default TranslatedParameterTable;

const ParameterTable = () => {
    return (
        <ArrayInput source="backlinks">
            <SimpleFormIterator>
                <DateInput source="date" />
                <TextInput source="url" />
            </SimpleFormIterator>
        </ArrayInput>
    )
};

export default ParameterTable;
