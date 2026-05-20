import faker from 'faker-br';

class Data {

    fullNameUser() {
        return this.nameUser() + ' ' + this.lastNameUser()
    }

    nameUser() {
        return faker.name.firstName()
    }

    lastNameUser() {
        return faker.name.lastName()
    }

    emailUser() {
        return faker.internet.email()
    }

    passwordUser() {

        return 'test@' + faker.random.number(8)
    }

    titleUser() {
        const titles = ['Mr', 'Mrs']
        return faker.random.arrayElement(titles)
    }

    birhdayUser() {
        return faker.random.number({ min: 1, max: 28 })
    }

    birthmonthUser() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return faker.random.arrayElement(months)
    }

    birthyearUser() {
        return faker.random.number({ min: 1900, max: 2021 }).toString();
    }

    addressUser() {
        return faker.address.streetAddress()
    }

    address2User() {
        return faker.address.secondaryAddress()
    }

    countryUser() {
        const country = ['India','United States', 'Canada','Australia', 'Israel', 'New Zealand','Singapore']
        return faker.random.arrayElement(country)
    }

    stateUser() {
        return faker.address.state()
    }

    cityUser() {
        return faker.address.city()
    }

    zipCodUser() {
        return faker.address.zipCode()
    }

    mobileUser() {
        return faker.phone.phoneNumber()
    }



}
export default new Data()