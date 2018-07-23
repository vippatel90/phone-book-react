# phone-book-react

## Phone Book

created app with Add phone, edit phone and list of phones use cases

- Phone can be added by entering first name , last name, and number
- first name and number is mandatory. Used react-redux-form fro the same
- upon save, phone user will be added to local storage and same will be listed to below table.
- upon cancel button, form will be cleared
- user can edit the phone by clicking edit button in list and data will be pre-popped in form
- upon modification, same user will be updated.
- upon cancel, nothing will happen to that user




## Tech stack

- React and Redux used.
- Jest & enzyme as test framework used.
- bootstrap 4 css is used  fro styling.  you can manually add same css in public folder and then link it into the index.html.
- as of now i have given public url for bootstrap css in index.html
- local storage test cases yet to be written

## Consideration

- Some test cases are yet to be done
- If opening in IE, the use >= 12 version as i used array.findIndex method which is avaibale after 12 only.  soon will be replaced with Lodash/polyfill 

## Setup

### Step 1:

npm i

### Step 2:

```
npm run start
```
