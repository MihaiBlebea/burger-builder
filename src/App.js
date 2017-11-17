import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './hoc/exports.js';
// import { BurgerBuilder, Home } from './containers/exports.js';
import routes from './routes.js';

class App extends React.Component {
    render()
    {
        let routeMap = routes.map((route, index)=> {
            return <Route key={index} path={route.link} exact component={route.component} />
        });

        return (
            <div className="App">
                <Layout>
                    {routeMap}
                </Layout>
            </div>
        );
    }
}

export default App;
