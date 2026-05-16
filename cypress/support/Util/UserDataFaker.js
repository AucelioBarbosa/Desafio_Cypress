import { faker } from '@faker-js/faker';


export const UserDataFake ={
    NAME_USER: faker.person.fullName(),
    LAST_NAME_USER: faker.person.lastName(),
    SEXTYPE_USER: faker.person.sexType(),
    EMAIL_USER: faker.internet.email(),
    PASSWORD_USER: faker.internet.password(),
    ADDRESS_USER: faker.location.streetAddress(),
    CITY_USER: faker.location.city(),
    STATE_USER: faker.location.state(),
    COUNTRY_USER: faker.location.country(),
    ZIPCODE_USER: faker.location.zipCode(),
    MOBILE_USER: faker.phone.number('##########')

}