# Task 1

Implement the **_getPromise(delay, message)_** function, which takes an integer number **_delay_** (between 0 and 2000) and string message and returns a Promise that waits for specified amount of time (using delay argument) and resolves with the message.

# Task 2

Write an **_add(x, y)_** function that takes two arguments - **_x_** and **_y_**. The function should return a Promise that resolves with the sum of the two arguments if they are Numbers, or rejects with the message "Error!" otherwise.

# Task 3

Implement the **_getAge()_** function to get user age. To find his age you need to call a **_getUser()_** async function that returns a user object in **format {role: "somerole", id: 1}**. To get the actual user info you need to call another async function **_getUserProfile(id),_** which uses id returned from the previous function and returns user info as an object **{name: "Tom", age: 24}**. The **_getAge()_** must return the age of the user.

# Task 4

Implement the **_take()_** function that converts a sequence of iterated values into a sequence of length **_n_**.

**Example usage:**  
const arr = ['a', 'b', 'c', 'd'];  
for (const x of take(2, arr)) {  
 console.log(x);  
}

// Output:  
// a  
// b

# Task 5

Please, implement a function **_accountPatients_** that takes a count of free beds in a hospital and **returns two functions:**

- the first one for **adding** a patient
- the second one for **discharging** a patient

Function **_accountPatients_** should keep track of free beds in a hospital and every time when a patient is admitted or discharged, print the count to the console like in examples:

> "A patient was discharged, 25 beds are available"

> "A patient was admitted, 20 beds are available"

When there are no beds available:

> "Can not admit a patient, no beds available" should be printed.

When there is an attempt to discharge a patient when there are no patients:

> "There are no patients to discharge" should be printed.

# Task 6

Write a **_checkAdult(age)_** function whose input parameter is the age of the user age. The function checks whether the set age parameter is set correctly.

**If it is set incorrectly**, the corresponding error should be generated and displayed in the console:

- if the age value has not been set, you need to create the following error: _"Please, enter your age",_
- If you set a negative age value, you need to create the following error: _"Please, enter positive number",_
- if a non-numeric value of age was specified, you need to create the following error: _"Please, enter number",_
- if the integer value of age was not specified, you need to create the following error: _"Please, enter Integer number",_
- If the user is under 18, you need to create the following error: _"Access denied - you are too young!"._

**If there is no error**, the message _“Access allowed”_ is displayed in the console.

In the function, implement the handling of possible exceptions, providing the output to the console of the name and description of the error.

Regardless of whether the age parameter was set correctly or incorrectly, the message _“Age verification complete”_ should be displayed at the end of the test.

**Function usage example:**  
checkAdult(15); // Error Access denied - you are too young!  
 // Age verification complete  
checkAdult(25); // Access allowed  
 // Age verification complete
