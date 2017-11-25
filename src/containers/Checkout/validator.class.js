
class Validate
{
    valid = true;
    value = null;
    rules = {
        required: false,
        type: null,
        length: {
            max: null,
            min: null
        },
        contains: []
    };
    message = [];

    check(rules, value)
    {
        this.rules = rules;
        this.value = value;

        if(this.rules.required === true)
        {
            this.checkRequired();
        }

        if(this.rules.type !== undefined)
        {
            this.checkType();
        }

        if(this.rules.length !== undefined)
        {
            this.checkLength();
        }

        if(this.rules.contains !== undefined)
        {
            this.checkContains();
        }

        if(this.valid === true)
        {
            return this.valid;
        } else {
            return this.message;
        }
    }

    // Check if required
    checkRequired()
    {
        if(this.value === '')
        {
            this.valid = false;
            this.message.push(`This field is required`);
        }
    }

    // Check contains
    checkContains()
    {
        let contains = this.rules.contains;

        if(contains.length > 0)
        {
            for(let i = 0; i < contains.length; i++)
            {
                if(this.value.includes(contains[i]) !== true)
                {
                    this.valid = false;
                    this.message.push(`This string should contain ${contains[i]}`);
                }
            }
        }
    }

    // Check length
    checkLength()
    {
        if(this.rules.length.min !== undefined)
        {
            this.min();
        }

        if(this.rules.length.max !== undefined)
        {
            this.max();
        }
    }

    min()
    {
        let min = this.rules.length.min;
        if(min !== null)
        {
            if(this.value.length < min)
            {
                this.valid = false;
                this.message.push(`Character count should be greater then ${this.rules.length.min}`);
            }
        }
    }

    max()
    {
        let max = this.rules.length.max;
        if(max !== null)
        {
            if(this.value.length > max)
            {
                this.valid = false;
                this.message.push(`Character count should be smaller then ${this.rules.length.max}`);
            }
        }
    }

    // Check type
    checkType()
    {
        switch(this.rules.type)
        {
            case('string'):
                this.string();
                break;
            case('integer'):
                this.integer();
                break;
            case('object'):
                this.obj();
                break;
            case('boolean'):
                this.boolean();
                break;
            default:
                console.log('Unknown type');
        }
    }

    string()
    {
        if(isNaN(this.value) !== true)
        {
            this.valid = false;
            this.message.push(`This should be a string`);
        }
    }

    integer()
    {
        if(isNaN(this.value) !== false)
        {
            this.valid = false;
            this.message.push(`This should be a number`);
        }
    }

    obj()
    {
        if(typeof this.value !== 'object')
        {
            this.valid = false;
            this.message.push(`This should be an object`);
        }
    }

    boolean()
    {
        if(typeof this.value !== 'boolean')
        {
            this.valid = false;
            this.message.push(`This should be a boolean`);
        }
    }

    // Return valid value
    valid()
    {
        return this.valid;
    }

    // Return error messages
    withMessage()
    {
        return this.message;
    }
}

export default Validate;
