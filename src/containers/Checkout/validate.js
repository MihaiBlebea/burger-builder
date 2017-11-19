
class Validate
{
    valid = true;
    value = null;
    rules = {
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

        this.checkType();
        // this.checkLength();
        // this.checkContains();

        return this.valid;
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
                }
            }
        }
    }

    // Check length
    checkLength()
    {
        this.min();
        this.max();
    }

    min()
    {
        let min = this.rules.length.min;
        if(min !== null)
        {
            if(this.value.length < min)
            {
                this.valid = false;
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

        if(this.valid === false)
        {
            this.message.push(`This should be a ${this.rules.type}`);
        }
    }

    string()
    {
        if(isNaN(this.value) !== true)
        {
            this.valid = false;
        }
    }

    integer()
    {
        if(isNaN(this.value) !== false)
        {
            this.valid = false;
        }
    }

    obj()
    {
        if(typeof this.value !== 'object')
        {
            this.valid = false;
        }
    }

    boolean()
    {
        if(typeof this.value !== 'boolean')
        {
            this.valid = false;
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
