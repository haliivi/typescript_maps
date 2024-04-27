import faker from '@faker-js/faker';

class User {
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };

    constructor() {}
}
