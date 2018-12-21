import React from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';
import {translate} from 'admin-on-rest'
import {map} from 'lodash';

const ParameterTable = ({record}) => {
    console.log('record: ----------------', record);
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>Key</TableHeaderColumn>
                    <TableHeaderColumn>Value</TableHeaderColumn>
                    <TableHeaderColumn>Type</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {map(record.parameters,(val, key) => (
                    <TableRow key={key}>
                        <TableRowColumn>
                            <div>{val.key}</div>
                        </TableRowColumn>
                        <TableRowColumn>
                            <div>{val.value}</div>
                        </TableRowColumn>
                        <TableRowColumn>
                            <div>{val.type}</div>
                        </TableRowColumn>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
};

const TranslatedParameterTable = translate(ParameterTable);

TranslatedParameterTable.defaultProps = {
    addLabel: true,
    source: 'parameters',
};

export default TranslatedParameterTable;