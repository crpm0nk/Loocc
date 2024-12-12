    // Creating a plain object
    const ancestorParse = {
        name: 'John Doe',
        age: 30,
        occupation: 'Engineer'
    };

    // Retrieving a value using bracket notation
    const field = 'occupation';
    const parsedAs = ancestorParse[field];

    console.log(parsedAs); // Output: Engineer
    