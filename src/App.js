import React from 'react';
import { Layout } from './components/exports.js';
import { BurgerBuilder } from './containers/exports.js';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <BurgerBuilder/>
                </Layout>
            </div>
        );
    }
}

export default App;
