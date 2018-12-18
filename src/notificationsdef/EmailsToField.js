import React from 'react';
import Chip from 'material-ui/Chip';
import { translate } from 'admin-on-rest';

const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};

const EmailsToField = ({ record }) => {
    return (
        <span style={styles.main}>
            {record.to.map(mailTo => (
                <Chip key={mailTo} style={styles.chip}>
                    {mailTo}
                </Chip>
            ))}
    </span>
    );
};

const TranslatedEmailsToField = translate(EmailsToField);

TranslatedEmailsToField.defaultProps = {
    addLabel: true,
    source: 'to',
};

export default TranslatedEmailsToField;
