'use strict';

import React from 'react';
import ViewSavedList from '../containers/ViewSavedList';
import ViewSaveForm from '../containers/ViewSaveForm';
import Footer from '../components/Footer';

const App = () => (
    <div className="container">
        <h1>Saved list</h1>
        <ViewSaveForm />
        <ViewSavedList />
        <Footer />
    </div>
);

export default App;
