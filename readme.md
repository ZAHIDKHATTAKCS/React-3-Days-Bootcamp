# ReactJs 3 Days Bootcamp by Let's Upgrade

<br>

### <p align="center">Day 1</p>

- **React Developer tool : -** is an extension, that show you which website is build by React the extension will colord on that website which is developed in React.

- **jsx : -** Javascript extended version.

- **vite : -** is the tool for using creating react application.

#### <p align="center">Create React Application Using Vite</p>


```js
    npm create vite@latest

    // after this enter y and hit enter

    // than select react as a framework

    // and than select Javascript

    // after this open the project in vs code and run 

    npm i or npm install
```

- so after this you will project will be created 

#### <p align="center">Now run application</p>

```js
npm run dev // this command is used to run the application
```

#### <p align="center">What is Component</p>

- Component is like the reuseable code of it 


<br>

### <p align="center">Day 2</p>

- props stands for Properties
- these are the arguments through which we send data from on file to another file
- props are like properties that you are send from parent component to its child component
- props is an object
- in props we can send data in the form of functions, arrays, objects and we can send data as a number without enclosing it in the double commas like

    ```js
   <Student1 Unversity="abc uni" DOB={2001} /> // here we can pass data as string in a function or as a variable etc
    ```

    ***Note*** we can also send and receive data in child component as a variable directly that method is called **Destructuring** like

    ```js
   <Student1 Unversity="abc uni" DOB={2001} /> // here we first send data as like we sending before

   // in order to receiving in the child component we have to do like

   const StudentPropsData2 = ({University}) => { // so here you will define each variable in a curly braces like here University

   return (
    <>
    
    <p>The person study at the university <strong><i>{University}</i></strong></p>
    </>
    )
    }
    ```

- in simple words destructuring mean you are not going to pass data with props but the recommended way is the using of props its because whenever you pass the data using variables directly to the child component so if you reinitialized the data of the variable in the child component so it will replace the parent data with the child data

    ```js
   <Student1 Unversity="abc uni" DOB={2001} /> // here we first send data as like we sending before

   // in order to receiving in the child component we have to do like

   const StudentPropsData2 = ({University}) => { // so here you will define each variable in a curly braces like here University

   // here if you reinitialized with a new value so it will return this value like
   University = "Agriculture University of Peshawar";
   return (
    <>
    
    <p>The person study at the university <strong><i>{University}</i></strong></p>
    </>
    )
    }
    ```

    <br>

#### <p align="center">What Is States in React</p>

- **State** A variable that holds the data that can be change over the time

#### <p align="center">What are the Hooks in React</p>

- Hooks are the special functions in React
- **useState** is a hook through the help of which we can change the state of a variable



 <br>
 
 #### <p align="center">Best extensions</p>
- ES7 React/Redux/React-Native snippets