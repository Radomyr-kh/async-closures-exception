export default function checkAdult(age) {
  try {
    switch (true) {
      case age === undefined:
        throw new Error('Please, enter your age');
      case age < 0:
        throw new Error('Please, enter positive number');
      case isNaN(age):
        throw new Error('Please, enter number');
      case !Number.isInteger(age):
        throw new Error('Please, enter Integer number');
      case age < 18:
        throw new Error('Access denied - you are too young!');
      default:
        console.log('Access allowed');
    }
  } catch (error) {
    console.log(error.name + ' ' + error.message);
  } finally {
    console.log('Age verification complete');
  }
}
