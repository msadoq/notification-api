import 'babel-polyfill';
import React, {Component} from 'react';
import {Admin, Delete, Resource} from 'admin-on-rest';

import './App.css';

import authClient from './authClient';
import sagas from './sagas';
import themeReducer from './themeReducer';
import Login from './Login';
import Layout from './Layout';
import Menu from './Menu';
import {Dashboard} from './dashboard';
import customRoutes from './routes';
import translations from './i18n';

import {VisitorDelete, VisitorEdit, VisitorIcon, VisitorList} from './visitors';
import {CommandEdit, CommandIcon, CommandList} from './commands';
import {ProductCreate, ProductEdit, ProductIcon, ProductList} from './products';
import {CategoryEdit, CategoryIcon, CategoryList} from './categories';
import {ReviewEdit, ReviewIcon, ReviewList} from './reviews';
import {TemplateDelete, TemplateCreate, TemplateEdit, TemplateIcon, TemplateList} from './templates';
import {NotificationDefDelete, NotificationDefCreate, NotificationDefEdit, NotificationDefIcon, NotificationDefList} from './notificationsdef';
import restClient from './restClient';


class App extends Component {

    componentWillUnmount() {
        this.restoreFetch();
    }

    render() {
        return (
            <Admin
                title="Notification Service Admin"
                restClient={restClient}
                customReducers={{ theme: themeReducer }}
                customSagas={sagas}
                customRoutes={customRoutes}
                authClient={authClient}
                dashboard={Dashboard}
                loginPage={Login}
                appLayout={Layout}
                menu={Menu}
                messages={translations}
            >
                <Resource name="customers" list={VisitorList} edit={VisitorEdit} remove={VisitorDelete} icon={VisitorIcon} />
                <Resource name="commands" list={CommandList} edit={CommandEdit} remove={Delete} icon={CommandIcon} options={{ label: 'Orders' }}/>
                <Resource name="products" list={ProductList} create={ProductCreate} edit={ProductEdit} remove={Delete} icon={ProductIcon} />
                <Resource name="categories" list={CategoryList} edit={CategoryEdit} remove={Delete} icon={CategoryIcon} />
                <Resource name="reviews" list={ReviewList} edit={ReviewEdit} icon={ReviewIcon} />
                <Resource name="templates" list={TemplateList} create={TemplateCreate} edit={TemplateEdit} remove={TemplateDelete} icon={TemplateIcon} />
                <Resource name="notificationsdef" list={NotificationDefList} create={NotificationDefCreate} edit={NotificationDefEdit} remove={NotificationDefDelete} icon={NotificationDefIcon} />
            </Admin>
        );
    }
}

export default App;
