import React from 'react';
import './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends React.Component
{
    render()
    {
        let ingredient = null;
        switch (this.props.type)
        {
            case ('bread-bottom'):
                ingredient = (
                    <div className={'BreadBottom'}></div>
                );
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={'BreadTop'}>
                        <div className={'Seeds1'}></div>
                        <div className={'Seeds2'}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = (
                    <div onClick={this.props.click} className={'Meat'}></div>
                );
                break;
            case ('cheese'):
                ingredient = (
                    <div onClick={this.props.click} className={'Cheese'}></div>
                );
                break;
            case ('bacon'):
                ingredient = (
                    <div onClick={this.props.click} className={'Bacon'}></div>
                );
                break;
            case ('salad'):
                ingredient = (
                    <div onClick={this.props.click} className={'Salad'}></div>
                );
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

// Valdiate props
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;
