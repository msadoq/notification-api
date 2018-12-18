import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import {translate} from 'admin-on-rest';
import {stringify} from 'query-string';
import {NotificationDefIcon} from "../notificationsdef";

const LinkToRelatedNotifDef = ({ template, translate }) => (
    <FlatButton
        primary
        label={translate('resources.notificationsdef.fields.notifsdef')}
        icon={<NotificationDefIcon />}
        containerElement={<Link to={{
            pathname: "/notificationsdef",
            search: stringify({ page: 1, perPage: 25, filter: JSON.stringify({ groups: template }) }),
        }} />}
    />
);

export default translate(LinkToRelatedNotifDef);
