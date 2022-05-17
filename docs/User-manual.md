# User Manual

After the setup process has finished, the next step will be to use the application, this can be accomplished by executing the command `npm start` in the application's root directory.

It will give you a welcome message and will ask you to enter the Social Security Number (SSN) to be validated, once typed, press the `Enter` button and the console show ***Valid*** if the SSN fulfill the requirements or ***Invalid*** otherwise.

## Requirements

The valid SSN (Social Security Number) must satisfy the following conditions:

- It should have 9 digits.
- It should be divided into 3 parts by hyphen (-).
- The first part should have 3 digits and should not be 000, 666, or between 900 and 999.
- The second part should have 2 digits and it should be from 01 to 99.
- The third part should have 4 digits and it should be from 0001 to 9999.
