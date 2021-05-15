**Prerequisites**

- Yarn installed (`brew install yarn`)
- VS code
  - Install the Eslint extension
  - Install the Prettier extension, and set it to format on save

---

#### My prefered conventions

**Naming things**

As always with naming, please think about the reader and put a lot of effort to get it good.

- Variables
  - They should be self-descriptive, avoid abbreviations
  - Example: `const carColor = 'red'`
- Variables storing components
  - Please use Pascal-case
  - Example: `let Conversation = <SomeComponent />`
- File-level constants
  - Use screaming snake case (all capital letters)
  - Example: `const MINUTES = 45`
- Boolean values
  - Use prefixes like "is", "has" or "should"
  - For plural, use prefixes like "isAny", "isEvery"
  - Examples: `let isCarVisible` `let isAnyCarVisible` `let isEveryCarVisible`
- Functions
  - Try to tell what the function is doing by giving the function name a verb as prefix
  - Example: `const getFormattedNumber = () ⇒ {}`

---

**Named parameters**

Prefer naming the parameters. It's an easy opportunity to be extra clear to the reader what's going on.

Even if TS offers great info about possible arguments, most of the time you have to interact with the editor to get this info.

```jsx
// OK
const something = (car, driver) => {}
something('Volvo', 'Hans')

// Better
const something = ({ car, driver }) => {}
something({ car: 'Volvo', driver: 'Hans' })
```

---

**React**

- Try to write idiomatic React, i.e. follow conventions (kind of) and not being _too_ inventive.
- Try to avoid too big components (i.e. > ~250 LOC). The main reason for this restriction is to make it easy for the reader to quickly grasp what's going, as well as a forcing factor to use composition / write declaratively.

**Components last**

Avoid putting any code below the component definition in a file. Styling, functions, types etc all sit in-between all imports and the component.

---

**Custom hooks for readability**

Whenever your `useEffect` or similar hook start to get big or complex, don't hesitate to make it a custom hook which gives you the opportunity to name it.

```jsx
// before
function Example() {
  useEffect(() => {
    document.title = new Date().toLocaleDateString()
  }, [])
  return null
}

// after
const useSetTodaysDateInTitle = () => {
  useEffect(() => {
    document.title = new Date().toLocaleDateString()
  }, [])
}

function Example() {
  useSetTodaysDateInTitle()
  return null
}
```

**Checking if variable equals any of multiple values**

In the cases when a variable could equal any of 2 or more values, consider `includes` over the OR operator:

```jsx
// OK
if (myVariable === someValue || myVariable === otherValue || myVariable === thirdValue) {
}

// Perhaps slightly better
if ([someValue, otherValue, thirdValue].includes(myVariable)) {
}
```

---

**Type alias**

- Prefer type alias over of inlining the types, particularly when we have more than two parameters / props.
- The above is for both readability and re-usability reasons.

---

### Preferred tools

**VS Code**

- General tip: hide the sidebar and learn all necessary shortcuts to work without a mouse/trackpad
- Must-have extensions:
  - Eslint
  - Prettier
  - GitLens
- Nice-to-have extensions
  - Bracket Pair Colorizer 2
  - Turbo Console Log
  - Subtle Match Brackets
  - Highlight Matching Tag
  - Image Preview
  - Version lens
  - Settings Sync
  - CSS in JS
  - Lorem Ipsum
  - Apollo GraphQL

**Technologies / libraries**

- GraphQL
  - Apollo
- Axios
- i18next
- query-string
- react-router-last-location
- styled-components
