export const javascript =[
    {   
        id:new Date(),
        heading:'Sort an array of objects by multiple fields',
        keywords:['array', 'sorting', 'multiple', 'Object'],
        code_input:`
        var data = [
            {"id":"1", "city":"Melbourne", "state":"VIC","zip":"75201","price":"162500"},
            {"id":"2","city":"Surry Hills", "state":"NSW", "zip":"90210", "price":"319250"},
            {"id":"3", "city":"Howthorn", "state":"VIC", "zip":"75000", "price":"556699"},
            {"id":"4", "city":"Brisbane", "state":"QLD", "zip":"00010", "price":"962500"}
            ];
        `,
        code_output:`
        [   {"id":"4", "city":"Brisbane", "state":"QLD", "zip":"00010", "price":"962500"},
            {"id":"3", "city":"Howthorn", "state":"VIC", "zip":"75000", "price":"556699"}
            {"id":"1", "city":"Melbourne", "state":"VIC","zip":"75201","price":"162500"},
            {"id":"2","city":"Surry Hills", "state":"NSW", "zip":"90210", "price":"319250"}
        ]
        `,
        body_code:`
        function multiSort(fields) {
            return function (a, b) {
                return fields
                    .map(function (item) {
                        var dir = 1;
                        if (item[0] === '-') {
                           dir = -1;
                           item=item.substring(1);
                        }
                        if (a[item] > b[item]) return dir;
                        if (a[item] < b[item]) return -(dir);
                        return 0;
                    })
                    .reduce(function firstNonZeroValue (p,n) {
                        return p ? p : n;
                    }, 0);
            };
        }

        //calling
        data.sort(multiSort(['city', '-price']));
        `,
        body_text:`
        Below is the main logic to Sort an array of objects by multiple fields. You can pass the number of fields in array you want to sort.
        By default it's in accending order, Prepend minus to specify descending order.
        `,
        rel:'logic',
        body_code_family:'language-javascript',
        input_code_family:'language-javascript',
        output_code_family:'language-javascript',

    }]