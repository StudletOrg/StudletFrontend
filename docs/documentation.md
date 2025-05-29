<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

# Studlet Frontend

This is a React frontend for the Studlet application. It is built with TypeScript programming language and Create React App script. Also it uses  uses `react-router` for client-side routing `bootstrap` for styling and `react-bootstrap` for bootstrap components in React, and `axios` for HTTP requests, and `react-cookie` for handling cookies.

Documentation is generated using [typedoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://github.com/TypeStrong/typedoc-plugin-markdown). And then it is merged using [concat-md](https://github.com/TypeStrong/concat-md) and [pandoc](https://pandoc.org/) to convert it to a pdf file.

## Folder Structure

The project is organized as follows:

- `public/`: static resources, such as images and the favicon
- `src/`: the source code for the frontend
    - `img/`: folder with images used by the typescript code
	- `model/`: data models for the app
	- `setupTests.ts`: Jest setup file
	- `App.tsx`: the main application component
	- `index.tsx`: the entry point for the app
    - `*.tsx`: other TypeScript files in the src directory with components
- `.env`: environment variables for the app (see below)

## Cloning the Repository

To clone the repository, run the following command:

```bash
git clone https://github.com/StudletOrg/StudletFrontend.git
```

## Environment Variables

The app expects the following environment variables to be set:

- `REACT_APP_API_URL`: the URL of the Studlet Backend API server

To set these variables, create a `.env` file in the root of the project and add the following lines:

```bash
REACT_APP_API_URL="http://localhost:8080"
```

## Running the App

To run the app, navigate to the root of the project and run the following command:

```bash
npm start
```

This will start the development server and open the app in a browser.

\newpage

# Table of Contents

- [Add Grade](#add-grade)
  - [AddGrade](#addgrade)
    - [Index](#index)
  - [Functions](#functions)
    - [Function: default()](#function-default)
- [Add Student To Group](#add-student-to-group)
  - [AddStudentToGroup](#addstudenttogroup)
    - [Index](#index-1)
  - [Functions](#functions-1)
    - [Function: default()](#function-default-1)
- [App Test](#app-test)
  - [App.test](#apptest)
- [App](#app)
  - [App](#app-1)
    - [Index](#index-2)
  - [Functions](#functions-2)
    - [Function: default()](#function-default-2)
- [App Navbar](#app-navbar)
  - [AppNavbar](#appnavbar)
    - [Index](#index-3)
  - [Functions](#functions-3)
    - [Function: default()](#function-default-3)
  - [Interfaces](#interfaces)
    - [Interface: ThisStudent](#interface-thisstudent)
- [Create Note](#create-note)
  - [CreateNote](#createnote)
    - [Index](#index-4)
  - [Functions](#functions-4)
    - [Function: default()](#function-default-4)
- [Dashboard](#dashboard)
  - [Dashboard](#dashboard-1)
    - [Index](#index-5)
  - [Functions](#functions-5)
    - [Function: default()](#function-default-5)
  - [Interfaces](#interfaces-1)
    - [Interface: DashboardSubjectsProp](#interface-dashboardsubjectsprop)
    - [Interface: Subject](#interface-subject)
- [Dashboard Card](#dashboard-card)
  - [DashboardCard](#dashboardcard)
    - [Index](#index-6)
  - [Functions](#functions-6)
    - [Function: default()](#function-default-6)
- [Error](#error)
  - [Error](#error-1)
    - [Index](#index-7)
  - [Functions](#functions-7)
    - [Function: default()](#function-default-7)
- [Font Size Changer](#font-size-changer)
  - [FontSizeChanger](#fontsizechanger)
    - [Index](#index-8)
  - [Functions](#functions-8)
    - [Function: default()](#function-default-8)
  - [Type Aliases](#type-aliases)
    - [Type Alias: FontSizeType](#type-alias-fontsizetype)
- [Grades](#grades)
  - [Grades](#grades-1)
    - [Index](#index-9)
  - [Functions](#functions-9)
    - [Function: default()](#function-default-9)
- [Group Details](#group-details)
  - [GroupDetails](#groupdetails)
    - [Index](#index-10)
  - [Functions](#functions-10)
    - [Function: default()](#function-default-10)
- [Home](#home)
  - [Home](#home-1)
    - [Index](#index-11)
  - [Functions](#functions-11)
    - [Function: default()](#function-default-11)
- [Login Form](#login-form)
  - [LoginForm](#loginform)
    - [Index](#index-12)
  - [Functions](#functions-12)
    - [Function: default()](#function-default-12)
- [Logo](#logo)
  - [Logo](#logo-1)
    - [Index](#index-13)
  - [Functions](#functions-13)
    - [Function: default()](#function-default-13)
- [Studlet Frontend](#studlet-frontend)
  - [Folder Structure](#folder-structure)
  - [Cloning the Repository](#cloning-the-repository)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Register Form](#register-form)
  - [RegisterForm](#registerform)
    - [Index](#index-14)
  - [Functions](#functions-14)
    - [Function: default()](#function-default-14)
  - [Interfaces](#interfaces-2)
    - [Interface: RegisterData](#interface-registerdata)
  - [Type Aliases](#type-aliases-1)
    - [Type Alias: RegisterFormProps](#type-alias-registerformprops)
    - [Type Alias: RoleType](#type-alias-roletype)
- [Side Menu](#side-menu)
  - [SideMenu](#sidemenu)
    - [Index](#index-15)
  - [Functions](#functions-15)
    - [Function: default()](#function-default-15)
- [Student Groups](#student-groups)
  - [StudentGroups](#studentgroups)
    - [Index](#index-16)
  - [Functions](#functions-16)
    - [Function: default()](#function-default-16)
- [Teacher Grades](#teacher-grades)
  - [TeacherGrades](#teachergrades)
    - [Index](#index-17)
  - [Functions](#functions-17)
    - [Function: default()](#function-default-17)
- [User Details](#user-details)
  - [UserDetails](#userdetails)
    - [Index](#index-18)
  - [Functions](#functions-18)
    - [Function: default()](#function-default-18)
  - [Interfaces](#interfaces-3)
    - [Interface: Student](#interface-student)
- [Validation](#validation)
  - [Validation](#validation-1)
    - [Index](#index-19)
  - [Variables](#variables)
    - [Variable: emailRegex](#variable-emailregex)
    - [Variable: passwordRegex](#variable-passwordregex)
- [Documents](#documents)
  - [Studlet Frontend](#studlet-frontend-1)
    - [Folder Structure](#folder-structure-1)
    - [Cloning the Repository](#cloning-the-repository-1)
    - [Environment Variables](#environment-variables-1)
    - [Running the App](#running-the-app-1)
- [Index](#index-20)
  - [index](#index)
- [Model](#model)
  - [Grade](#grade)
    - [model/Grade](#modelgrade)
    - [Interfaces](#interfaces-4)
  - [Group](#group)
    - [model/Group](#modelgroup)
    - [Interfaces](#interfaces-5)
  - [Student](#student)
    - [model/Student](#modelstudent)
    - [Interfaces](#interfaces-6)
- [studlet v0.1.0](#studlet-v010)
  - [Documents](#documents-1)
  - [Modules](#modules)

\newpage

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Add Grade


<a name="addgradereadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / AddGrade

## AddGrade

### Index

#### Functions

- [default](#addgradefunctionsdefaultmd)

## Functions


<a name="addgradefunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [AddGrade](#addgradereadmemd) / default

### Function: default()

> **default**(): `Element`

A React component for adding a grade for a specific student in a specific group.

This component retrieves the group ID and student ID from the URL parameters,
allows the user to select a grade from a dropdown, and submits the grade to the server.
It handles success and error messages based on the submission result.

#### Returns

`Element`

The rendered component.

#### Component

#### Example

```ts
// Usage
<AddGrade />
```

#### State

gradeValue - The selected grade value, which can be a number or an empty string.

#### State

success - A message indicating successful grade addition, or null if no message.

#### State

error - A message indicating an error during grade addition, or null if no message.

#### Defined in

[src/AddGrade.tsx:29](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/AddGrade.tsx#L29)

# Add Student To Group


<a name="addstudenttogroupreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / AddStudentToGroup

## AddStudentToGroup

### Index

#### Functions

- [default](#addstudenttogroupfunctionsdefaultmd)

## Functions


<a name="addstudenttogroupfunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [AddStudentToGroup](#addstudenttogroupreadmemd) / default

### Function: default()

> **default**(): `Element`

A React component for adding a student to a specific group.

This component retrieves the group ID and field of study ID from the URL parameters,
allows the user to search for students by name, last name and email, and submits the selected
student to the server to be added to the group.
It handles success and error messages based on the submission result.

#### Returns

`Element`

The rendered component.

#### Component

#### State

message - A message indicating successful student addition, or null if no message.

#### State

error - A message indicating an error during student addition, or null if no message.

#### State

students - An array of students to be displayed in the list.

#### State

filterText - The text entered by the user to filter the student list.

#### Defined in

[src/AddStudentToGroup.tsx:28](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/AddStudentToGroup.tsx#L28)

# App Test


<a name="apptestreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / App.test

## App.test

# App


<a name="appreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / App

## App

### Index

#### Functions

- [default](#appfunctionsdefaultmd)

## Functions


<a name="appfunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [App](#appreadmemd) / default

### Function: default()

> **default**(): `Element`

The main application component.

This component is the root of the application and is responsible
for rendering the main layout.

#### Returns

`Element`

The main application component.

#### Defined in

[src/App.tsx:79](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/App.tsx#L79)

# App Navbar


<a name="appnavbarreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / AppNavbar

## AppNavbar

### Index

#### Interfaces

- [ThisStudent](#appnavbarinterfacesthisstudentmd)

#### Functions

- [default](#appnavbarfunctionsdefaultmd)

## Functions


<a name="appnavbarfunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [AppNavbar](#appnavbarreadmemd) / default

### Function: default()

> **default**(`props`): `null` \| `ReactElement`\<`any`, `any`\>

A navigation bar component that is used in the main application layout.

This component assumes that the user is already authenticated and that the
authentication token is stored in the local storage under the key 'jwtToken'.

The component displays the user name and a logout button. When the logout
button is clicked, the component removes the authentication token from the
local storage and calls the `onLogout` function if it is provided.

#### Parameters

• **props**: `AppNavbarProps`

The component props.

#### Returns

`null` \| `ReactElement`\<`any`, `any`\>

A navigation bar React element.

#### Defined in

[src/AppNavbar.tsx:55](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/AppNavbar.tsx#L55)

## Interfaces


<a name="appnavbarinterfacesthisstudentmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [AppNavbar](#appnavbarreadmemd) / ThisStudent

### Interface: ThisStudent

Represents a student with personal information and roles.

 ThisStudent

#### Properties

##### dateofbirth

> **dateofbirth**: `Date`

The date of birth of the student.

###### Defined in

[src/AppNavbar.tsx:36](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/AppNavbar.tsx#L36)

***

##### email

> **email**: `string`

The email address of the student.

###### Defined in

[src/AppNavbar.tsx:35](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/AppNavbar.tsx#L35)

***

##### firstname

> **firstname**: `string`

The first name of the student.

###### Defined in

[src/AppNavbar.tsx:33](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/AppNavbar.tsx#L33)

***

##### id

> **id**: `number`

The unique identifier for the student.

###### Defined in

[src/AppNavbar.tsx:37](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/AppNavbar.tsx#L37)

***

##### lastname

> **lastname**: `string`

The last name of the student.

###### Defined in

[src/AppNavbar.tsx:34](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/AppNavbar.tsx#L34)

***

##### roles

> **roles**: [`string`]

An array of roles assigned to the student (e.g., ["student", "member"]).

###### Defined in

[src/AppNavbar.tsx:38](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/AppNavbar.tsx#L38)

# Create Note


<a name="createnotereadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / CreateNote

## CreateNote

### Index

#### Functions

- [default](#createnotefunctionsdefaultmd)

## Functions


<a name="createnotefunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [CreateNote](#createnotereadmemd) / default

### Function: default()

> **default**(): `Element`

A React component for creating a new note for a specific group.

This component retrieves the group ID from the URL parameters,
allows the user to enter a title and content for the note, and submits the note to the server.
It handles success and error messages based on the submission result.

#### Returns

`Element`

The rendered component.

#### Component

#### Example

```ts
// Usage
<CreateNote />
```

#### State

title - The title of the note, which can be an empty string.

#### State

content - The content of the note, which can be an empty string.

#### State

groups - The list of groups associated with the user.

#### State

selectedGroupId - The ID of the selected group, which can be null.

#### State

success - A message indicating successful note creation, or null if no message.

#### State

error - A message indicating an error during note creation, or null if no message.

#### Defined in

[src/CreateNote.tsx:40](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/CreateNote.tsx#L40)

# Dashboard


<a name="dashboardreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / Dashboard

## Dashboard

### Index

#### Interfaces

- [DashboardSubjectsProp](#dashboardinterfacesdashboardsubjectspropmd)
- [Subject](#dashboardinterfacessubjectmd)

#### Functions

- [default](#dashboardfunctionsdefaultmd)

## Functions


<a name="dashboardfunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [Dashboard](#dashboardreadmemd) / default

### Function: default()

> **default**(): `Element`

#### Returns

`Element`

#### Defined in

[src/Dashboard.tsx:51](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/Dashboard.tsx#L51)

## Interfaces


<a name="dashboardinterfacesdashboardsubjectspropmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [Dashboard](#dashboardreadmemd) / DashboardSubjectsProp

### Interface: DashboardSubjectsProp

#### Properties

##### subjects?

> `optional` **subjects**: [`Subject`](#dashboardinterfacessubjectmd)[]

###### Defined in

[src/Dashboard.tsx:36](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/Dashboard.tsx#L36)


<a name="dashboardinterfacessubjectmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [Dashboard](#dashboardreadmemd) / Subject

### Interface: Subject

#### Properties

##### id

> **id**: `number`

###### Defined in

[src/Dashboard.tsx:31](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/Dashboard.tsx#L31)

***

##### nazwa

> **nazwa**: `string`

###### Defined in

[src/Dashboard.tsx:32](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/Dashboard.tsx#L32)

# Dashboard Card


<a name="dashboardcardreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / DashboardCard

## DashboardCard

### Index

#### Functions

- [default](#dashboardcardfunctionsdefaultmd)

## Functions


<a name="dashboardcardfunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [DashboardCard](#dashboardcardreadmemd) / default

### Function: default()

> **default**(`props`): `Element`

A React component that renders a card for displaying grades or related information.

This component accepts props to customize the title, body content, CSS class, and inline styles.

#### Parameters

• **props**: `GradesCardProps`

The properties for the DashboardCard component.

#### Returns

`Element`

The rendered card component.

#### Component

#### Defined in

[src/DashboardCard.tsx:30](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/DashboardCard.tsx#L30)

# Error


<a name="errorreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / Error

## Error

### Index

#### Functions

- [default](#errorfunctionsdefaultmd)

## Functions


<a name="errorfunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [Error](#errorreadmemd) / default

### Function: default()

> **default**(): `Element`

Renders a 404 error page with a link to navigate back to the home page.

This component displays a message indicating that the requested page
could not be found, along with a navigation link for the user to 
return to the home page.

#### Returns

`Element`

A JSX element representing the 404 error page.

#### Defined in

[src/Error.tsx:12](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/Error.tsx#L12)

# Font Size Changer


<a name="fontsizechangerreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / FontSizeChanger

## FontSizeChanger

### Index

#### Type Aliases

- [FontSizeType](#fontsizechangertype-aliasesfontsizetypemd)

#### Functions

- [default](#fontsizechangerfunctionsdefaultmd)

## Functions


<a name="fontsizechangerfunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [FontSizeChanger](#fontsizechangerreadmemd) / default

### Function: default()

> **default**(`props`): `Element`

A React component for changing the font size of the application.

This component allows users to select a font size from three options: normal, large, and extra-large.
The selected font size is stored in a cookie, which persists across sessions.

#### Parameters

• **props**: `FontSizeChangerProps`

The properties for the FontSizeChanger component.

#### Returns

`Element`

The rendered font size changer component.

#### Component

#### Defined in

[src/FontSizeChanger.tsx:37](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/FontSizeChanger.tsx#L37)

## Type Aliases


<a name="fontsizechangertype-aliasesfontsizetypemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [FontSizeChanger](#fontsizechangerreadmemd) / FontSizeType

### Type Alias: FontSizeType

> **FontSizeType**: `"normal"` \| `"large"` \| `"extralarge"`

Represents the available font size options.

#### Defined in

[src/FontSizeChanger.tsx:13](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/FontSizeChanger.tsx#L13)

# Grades


<a name="gradesreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / Grades

## Grades

### Index

#### Functions

- [default](#gradesfunctionsdefaultmd)

## Functions


<a name="gradesfunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [Grades](#gradesreadmemd) / default

### Function: default()

> **default**(): `Element`

A React component that displays all grades for the current student.

This component fetches the current user's data and their associated grades from the API.
It groups the grades by their respective group IDs and displays them in a structured format.

#### Returns

`Element`

The rendered component displaying the student's grades.

#### Component

#### Defined in

[src/Grades.tsx:50](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/Grades.tsx#L50)

# Group Details


<a name="groupdetailsreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / GroupDetails

## GroupDetails

### Index

#### Functions

- [default](#groupdetailsfunctionsdefaultmd)

## Functions


<a name="groupdetailsfunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [GroupDetails](#groupdetailsreadmemd) / default

### Function: default()

> **default**(): `Element`

GroupDetails component that displays information about a specific group.

This component fetches and displays details of a group, including the group ID,
number of students, subject, professor information, grades, and announcements.
It handles loading states and error handling for API requests.

#### Returns

`Element`

The rendered GroupDetails component, which shows group 
                       information, grades, and announcements.

#### Component

#### Defined in

[src/GroupDetails.tsx:27](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/GroupDetails.tsx#L27)

# Home


<a name="homereadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / Home

## Home

### Index

#### Functions

- [default](#homefunctionsdefaultmd)

## Functions


<a name="homefunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [Home](#homereadmemd) / default

### Function: default()

> **default**(): `Element`

Home component that determines whether to display the Dashboard or the LoginForm.

This component checks for the presence and validity of a JWT token in cookies
to determine if the user is logged in. If the token is valid, it renders the 
Dashboard; otherwise, it renders the LoginForm.

#### Returns

`Element`

The rendered Home component, which conditionally displays 
                       either the Dashboard or the LoginForm based on the user's 
                       authentication status.

#### Component

#### Defined in

[src/Home.tsx:19](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/Home.tsx#L19)

# Login Form


<a name="loginformreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / LoginForm

## LoginForm

### Index

#### Functions

- [default](#loginformfunctionsdefaultmd)

## Functions


<a name="loginformfunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [LoginForm](#loginformreadmemd) / default

### Function: default()

> **default**(): `Element`

LoginForm component for user authentication.

This component allows users to log in by providing their email and password.
It handles form submission, validation, and error display.

#### Returns

`Element`

The rendered LoginForm component.

#### Component

#### Defined in

[src/LoginForm.tsx:28](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/LoginForm.tsx#L28)

# Logo


<a name="logoreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / Logo

## Logo

### Index

#### Functions

- [default](#logofunctionsdefaultmd)

## Functions


<a name="logofunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [Logo](#logoreadmemd) / default

### Function: default()

> **default**(): `Element`

Logo component that displays the application logo and name.

This component renders an image and a text label side by side, 
representing the branding of the application.

#### Returns

`Element`

The rendered Logo component, which includes an image 
                       and the application name.

#### Component

#### Defined in

[src/Logo.tsx:13](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/Logo.tsx#L13)


<a name="readmemd"></a>

**studlet v0.1.0** • [**Docs**](#modulesmd)

***

# Studlet Frontend

This is a React frontend for the Studlet platform. It is built with Create React App and uses React Router for client-side routing.

## Folder Structure

The project is organized as follows:

- `public/`: static resources, such as images and the favicon
- `src/`: the source code for the frontend
    - `img/`: folder with images used by the typescript code
	- `model/`: data models for the app
	- `setupTests.ts`: Jest setup file
	- `App.tsx`: the main application component
	- `index.tsx`: the entry point for the app
    - `*.tsx`: other TypeScript files in the src directory with components
- `.env`: environment variables for the app (see below)

## Cloning the Repository

To clone the repository, run the following command:

```bash
git clone https://github.com/StudletOrg/StudletFrontend.git
```

## Environment Variables

The app expects the following environment variables to be set:

- `REACT_APP_API_URL`: the URL of the Studlet Backend API server

To set these variables, create a `.env` file in the root of the project and add the following lines:

```bash
REACT_APP_API_URL="http://localhost:8080"
```

## Running the App

To run the app, navigate to the root of the project and run the following command:

```bash
npm start
```

This will start the development server and open the app in a browser.

# Register Form


<a name="registerformreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / RegisterForm

## RegisterForm

### Index

#### Interfaces

- [RegisterData](#registerforminterfacesregisterdatamd)

#### Type Aliases

- [RegisterFormProps](#registerformtype-aliasesregisterformpropsmd)
- [RoleType](#registerformtype-aliasesroletypemd)

#### Functions

- [default](#registerformfunctionsdefaultmd)

## Functions


<a name="registerformfunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [RegisterForm](#registerformreadmemd) / default

### Function: default()

> **default**(`props`): `Element`

RegisterForm component for user registration.

This component provides a form for users to register by entering their 
personal information and account credentials. It includes validation 
for the input fields and handles form submission.

#### Parameters

• **props**: [`RegisterFormProps`](#registerformtype-aliasesregisterformpropsmd)

The props for the RegisterForm component.

#### Returns

`Element`

The rendered RegisterForm component.

#### Component

#### Defined in

[src/RegisterForm.tsx:61](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/RegisterForm.tsx#L61)

## Interfaces


<a name="registerforminterfacesregisterdatamd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [RegisterForm](#registerformreadmemd) / RegisterData

### Interface: RegisterData

Interface representing the data required for user registration.

This interface defines the structure of the registration data, 
including personal information and account credentials.

 RegisterData

#### Properties

##### confirmPassword

> **confirmPassword**: `string`

The password confirmation for validation.

###### Defined in

[src/RegisterForm.tsx:27](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/RegisterForm.tsx#L27)

***

##### email

> **email**: `string`

The email address of the user.

###### Defined in

[src/RegisterForm.tsx:25](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/RegisterForm.tsx#L25)

***

##### firstName

> **firstName**: `string`

The first name of the user.

###### Defined in

[src/RegisterForm.tsx:23](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/RegisterForm.tsx#L23)

***

##### lastName

> **lastName**: `string`

The last name of the user.

###### Defined in

[src/RegisterForm.tsx:24](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/RegisterForm.tsx#L24)

***

##### password

> **password**: `string`

The password chosen by the user.

###### Defined in

[src/RegisterForm.tsx:26](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/RegisterForm.tsx#L26)

***

##### role

> **role**: [`RoleType`](#registerformtype-aliasesroletypemd)

The role assigned to the user (e.g., student, teacher, moderator).

###### Defined in

[src/RegisterForm.tsx:28](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/RegisterForm.tsx#L28)

## Type Aliases


<a name="registerformtype-aliasesregisterformpropsmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [RegisterForm](#registerformreadmemd) / RegisterFormProps

### Type Alias: RegisterFormProps

> **RegisterFormProps**: `object`

Type representing the props for the RegisterForm component.

#### Type declaration

##### onCancel()?

> `optional` **onCancel**: () => `void`

###### Returns

`void`

##### onRegister()?

> `optional` **onRegister**: (`data`) => `void`

###### Parameters

• **data**: [`RegisterData`](#registerforminterfacesregisterdatamd)

###### Returns

`void`

#### Defined in

[src/RegisterForm.tsx:38](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/RegisterForm.tsx#L38)


<a name="registerformtype-aliasesroletypemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [RegisterForm](#registerformreadmemd) / RoleType

### Type Alias: RoleType

> **RoleType**: `"student"` \| `"teacher"` \| `"moderator"`

Type representing the possible roles for a user.

#### Defined in

[src/RegisterForm.tsx:48](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/RegisterForm.tsx#L48)

# Side Menu


<a name="sidemenureadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / SideMenu

## SideMenu

### Index

#### Functions

- [default](#sidemenufunctionsdefaultmd)

## Functions


<a name="sidemenufunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [SideMenu](#sidemenureadmemd) / default

### Function: default()

> **default**(`props`): `null` \| `ReactElement`\<`any`, `any`\>

SideMenu component that renders the navigation menu.

This component displays a vertical navigation menu based on the user's 
roles. It includes default menu options and additional options for 
professors. The active link is highlighted based on the current location.

#### Parameters

• **props**

#### Returns

`null` \| `ReactElement`\<`any`, `any`\>

The rendered SideMenu component containing navigation links.

#### Component

#### Defined in

[src/SideMenu.tsx:44](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/SideMenu.tsx#L44)

# Student Groups


<a name="studentgroupsreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / StudentGroups

## StudentGroups

### Index

#### Functions

- [default](#studentgroupsfunctionsdefaultmd)

## Functions


<a name="studentgroupsfunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [StudentGroups](#studentgroupsreadmemd) / default

### Function: default()

> **default**(): `Element`

StudentGroups component that displays the groups a student is assigned to.

This component fetches and displays the student's groups, including details 
about the group number, professor, and student count. It handles loading 
states and displays a message if no groups are found.

#### Returns

`Element`

The rendered StudentGroups component, which shows 
                       the student's assigned groups.

#### Component

#### Defined in

[src/StudentGroups.tsx:48](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/StudentGroups.tsx#L48)

# Teacher Grades


<a name="teachergradesreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / TeacherGrades

## TeacherGrades

### Index

#### Functions

- [default](#teachergradesfunctionsdefaultmd)

## Functions


<a name="teachergradesfunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [TeacherGrades](#teachergradesreadmemd) / default

### Function: default()

> **default**(): `Element`

A component that displays the grades of students in selected groups.

This component fetches groups and their associated students with grades from an API.
It allows teachers to view, add, edit, and remove grades for students.

#### Returns

`Element`

The rendered TeacherGrades component.

#### Component

#### Defined in

[src/TeacherGrades.tsx:70](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/TeacherGrades.tsx#L70)

# User Details


<a name="userdetailsreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / UserDetails

## UserDetails

### Index

#### Interfaces

- [Student](#userdetailsinterfacesstudentmd)

#### Functions

- [default](#userdetailsfunctionsdefaultmd)

## Functions


<a name="userdetailsfunctionsdefaultmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [UserDetails](#userdetailsreadmemd) / default

### Function: default()

> **default**(): `Element`

A component that displays the details of the current user (student).

This component fetches the current user's data from an API and displays
the user's details including ID, name, date of birth, email, and roles.

#### Returns

`Element`

The rendered UserDetails component.

#### Component

#### Defined in

[src/UserDetails.tsx:35](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/UserDetails.tsx#L35)

## Interfaces


<a name="userdetailsinterfacesstudentmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [UserDetails](#userdetailsreadmemd) / Student

### Interface: Student

Represents a student user.
 Student

#### Properties

##### dateofbirth

> **dateofbirth**: `string`

The date of birth of the student as a string.

###### Defined in

[src/UserDetails.tsx:22](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/UserDetails.tsx#L22)

***

##### email

> **email**: `string`

The email address of the student.

###### Defined in

[src/UserDetails.tsx:21](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/UserDetails.tsx#L21)

***

##### firstname

> **firstname**: `string`

The first name of the student.

###### Defined in

[src/UserDetails.tsx:19](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/UserDetails.tsx#L19)

***

##### id

> **id**: `number`

The unique identifier for the student.

###### Defined in

[src/UserDetails.tsx:18](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/UserDetails.tsx#L18)

***

##### lastname

> **lastname**: `string`

The last name of the student.

###### Defined in

[src/UserDetails.tsx:20](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/UserDetails.tsx#L20)

***

##### roles

> **roles**: `string`[]

An array of roles assigned to the student.

###### Defined in

[src/UserDetails.tsx:23](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/UserDetails.tsx#L23)

# Validation


<a name="validationreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / Validation

## Validation

### Index

#### Variables

- [emailRegex](#validationvariablesemailregexmd)
- [passwordRegex](#validationvariablespasswordregexmd)

## Variables


<a name="validationvariablesemailregexmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [Validation](#validationreadmemd) / emailRegex

### Variable: emailRegex

> `const` **emailRegex**: `RegExp`

A regular expression for validating email addresses.

This regex checks for the following criteria:
- Starts with alphanumeric characters, dots, underscores, percent signs, plus signs, or hyphens.
- Followed by the "@" symbol.
- Contains a domain name with alphanumeric characters and dots.
- Ends with a top-level domain of at least two alphabetic characters.

#### Constant

#### Defined in

[src/Validation.ts:12](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/Validation.ts#L12)


<a name="validationvariablespasswordregexmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [Validation](#validationreadmemd) / passwordRegex

### Variable: passwordRegex

> `const` **passwordRegex**: `RegExp`

A regular expression for validating passwords.

This regex checks for the following criteria:
- At least 8 characters long.
- Contains at least one letter (uppercase or lowercase).
- Contains at least one digit.

#### Constant

#### Defined in

[src/Validation.ts:24](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/Validation.ts#L24)

# Documents


<a name="documentsreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / README

## Studlet Frontend

This is a React frontend for the Studlet platform. It is built with Create React App and uses React Router for client-side routing.

### Folder Structure

The project is organized as follows:

- `public/`: static resources, such as images and the favicon
- `src/`: the source code for the frontend
    - `img/`: folder with images used by the typescript code
	- `model/`: data models for the app
	- `setupTests.ts`: Jest setup file
	- `App.tsx`: the main application component
	- `index.tsx`: the entry point for the app
    - `*.tsx`: other TypeScript files in the src directory with components
- `.env`: environment variables for the app (see below)

### Cloning the Repository

To clone the repository, run the following command:

```bash
git clone https://github.com/StudletOrg/StudletFrontend.git
```

### Environment Variables

The app expects the following environment variables to be set:

- `REACT_APP_API_URL`: the URL of the Studlet Backend API server

To set these variables, create a `.env` file in the root of the project and add the following lines:

```bash
REACT_APP_API_URL="http://localhost:8080"
```

### Running the App

To run the app, navigate to the root of the project and run the following command:

```bash
npm start
```

This will start the development server and open the app in a browser.

# Index


<a name="indexreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / index

## index

# Model

## Grade


<a name="modelgradereadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / model/Grade

### model/Grade

#### Index

##### Interfaces

- [Grade](#modelgradeinterfacesgrademd)

### Interfaces


<a name="modelgradeinterfacesgrademd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [model/Grade](#modelgradereadmemd) / Grade

#### Interface: Grade

Represents a student's grade in a specific subject.

 Grade

##### Properties

###### grade

> **grade**: `number`

The numerical value of the grade.

####### Defined in

[src/model/Grade.ts:12](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Grade.ts#L12)

***

###### id

> **id**: `number`

The unique identifier for the grade entry.

####### Defined in

[src/model/Grade.ts:10](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Grade.ts#L10)

***

###### subject

> **subject**: `string`

The name of the subject for which the grade is assigned.

####### Defined in

[src/model/Grade.ts:11](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Grade.ts#L11)

## Group


<a name="modelgroupreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / model/Group

### model/Group

#### Index

##### Interfaces

- [Group](#modelgroupinterfacesgroupmd)
- [Note](#modelgroupinterfacesnotemd)

### Interfaces


<a name="modelgroupinterfacesgroupmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [model/Group](#modelgroupreadmemd) / Group

#### Interface: Group

Represents a group of students in a specific subject.

 Group

##### Properties

###### groupId

> **groupId**: `number`

The unique identifier for the group.

####### Defined in

[src/model/Group.ts:41](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Group.ts#L41)

***

###### groupNumber

> **groupNumber**: `string`

The number assigned to the group.

####### Defined in

[src/model/Group.ts:42](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Group.ts#L42)

***

###### notes?

> `optional` **notes**: [`Note`](#modelgroupinterfacesnotemd)[]

An optional array of notes related to the group.

####### Defined in

[src/model/Group.ts:50](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Group.ts#L50)

***

###### professor

> **professor**: `object`

The professor associated with the group.

####### email

> **email**: `null` \| `string`

####### firstName

> **firstName**: `null` \| `string`

####### lastName

> **lastName**: `null` \| `string`

####### Defined in

[src/model/Group.ts:43](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Group.ts#L43)

***

###### studentCount

> **studentCount**: `number`

The number of students in the group.

####### Defined in

[src/model/Group.ts:48](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Group.ts#L48)

***

###### subject

> **subject**: `string`

The subject associated with the group.

####### Defined in

[src/model/Group.ts:49](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Group.ts#L49)


<a name="modelgroupinterfacesnotemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [model/Group](#modelgroupreadmemd) / Note

#### Interface: Note

Represents a note created by an author.

 Note

##### Properties

###### author

> **author**: `object`

The author of the note.

####### firstName

> **firstName**: `string`

####### id

> **id**: `number`

####### lastName

> **lastName**: `string`

####### Defined in

[src/model/Group.ts:19](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Group.ts#L19)

***

###### content

> **content**: `null` \| `string`

The content of the note. Can be null if no content is provided.

####### Defined in

[src/model/Group.ts:18](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Group.ts#L18)

***

###### creationDate

> **creationDate**: `string`

The date when the note was created, in ISO 8601 format.

####### Defined in

[src/model/Group.ts:17](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Group.ts#L17)

***

###### id

> **id**: `number`

The unique identifier for the note.

####### Defined in

[src/model/Group.ts:15](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Group.ts#L15)

***

###### title

> **title**: `string`

The title of the note.

####### Defined in

[src/model/Group.ts:16](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Group.ts#L16)

## Student


<a name="modelstudentreadmemd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / model/Student

### model/Student

#### Index

##### Interfaces

- [Student](#modelstudentinterfacesstudentmd)

### Interfaces


<a name="modelstudentinterfacesstudentmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

[studlet v0.1.0](#modulesmd) / [model/Student](#modelstudentreadmemd) / Student

#### Interface: Student

Represents a student with personal information.

 Student

##### Properties

###### email

> **email**: `string`

The email address of the student.

####### Defined in

[src/model/Student.ts:14](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Student.ts#L14)

***

###### firstname

> **firstname**: `string`

The first name of the student.

####### Defined in

[src/model/Student.ts:12](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Student.ts#L12)

***

###### id

> **id**: `number`

The unique identifier for the student.

####### Defined in

[src/model/Student.ts:11](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Student.ts#L11)

***

###### lastname

> **lastname**: `string`

The last name of the student.

####### Defined in

[src/model/Student.ts:13](https://github.com/StudletOrg/StudletFrontend/blob/724c01c07762c8985a8ada77613a875789478613/src/model/Student.ts#L13)


<a name="modulesmd"></a>

[**studlet v0.1.0**](#readmemd) • **Docs**

***

# studlet v0.1.0

## Documents

- [README](#documentsreadmemd)

## Modules

- [AddGrade](#addgradereadmemd)
- [AddStudentToGroup](#addstudenttogroupreadmemd)
- [App](#appreadmemd)
- [App.test](#apptestreadmemd)
- [AppNavbar](#appnavbarreadmemd)
- [CreateNote](#createnotereadmemd)
- [Dashboard](#dashboardreadmemd)
- [DashboardCard](#dashboardcardreadmemd)
- [Error](#errorreadmemd)
- [FontSizeChanger](#fontsizechangerreadmemd)
- [Grades](#gradesreadmemd)
- [GroupDetails](#groupdetailsreadmemd)
- [Home](#homereadmemd)
- [index](#indexreadmemd)
- [index](#indexreadmemd)
- [LoginForm](#loginformreadmemd)
- [Logo](#logoreadmemd)
- [model/Grade](#modelgradereadmemd)
- [model/Group](#modelgroupreadmemd)
- [model/Student](#modelstudentreadmemd)
- [RegisterForm](#registerformreadmemd)
- [SideMenu](#sidemenureadmemd)
- [StudentGroups](#studentgroupsreadmemd)
- [TeacherGrades](#teachergradesreadmemd)
- [UserDetails](#userdetailsreadmemd)
- [Validation](#validationreadmemd)
