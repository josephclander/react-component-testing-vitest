# Case Study: Behaviour Driven Development - React, TypeScript & Testing Library

A simple app template for a dice roller with a test on the component.
The intention is to demonstrate how to use a Testing Library for front-end testing and how Behaviour-Driven Development differs from regular Test-Driven Development.

### Link to YouTube video explanation
[<img width="400" alt="youtube thumbnail" src="https://i3.ytimg.com/vi/P-jFbmFXFeE/maxresdefault.jpg">](https://www.youtube.com/watch?v=P-jFbmFXFeE&list=PLCG3irSwSz6gDZUJ51CJyFt2jjbC5MPDm&index=1)

### Screenshots
<img width="700" alt="Screenshot app component" src="https://github.com/josephclander/react-component-testing-vitest/assets/19231569/a21405e1-8ff2-46bd-bb3a-c9732bde2c1c">
<img width="700" alt="Screenshot app component test" src="https://github.com/josephclander/react-component-testing-vitest/assets/19231569/d2dbda43-b4d9-4107-b282-eb08ce2e4be6">
<img width="300" alt="Screenshot app" src="https://github.com/josephclander/react-component-testing-vitest/assets/19231569/fdad4774-dedb-4d0e-b987-2776551b222f">

## Testing with Behaviour-Driven Development

### Example test for the dice roller

```typescript
test("Dice value is between 1 and 6 when clicked", () => {
  render(<Dice />);
  const button = screen.getByRole("button");
  const heading = screen.getByRole("heading");
  userEvent.click(button);
  // return value parsing '0' if null
  const diceValue = parseInt(heading.textContent ?? "0", 10);
  // produces number between 1 and 6
  expect(diceValue).toBeGreaterThanOrEqual(1);
  expect(diceValue).toBeLessThanOrEqual(6);
});
```

The key difference is the perspective from which you check for the expected behaviour.

For standard TDD where you are look for specific elements you may access them via their class names or ids. If solely on the backend, you may test the output of a given function. However, for BDD, you want to render the page so we have see what the user sees.

These are the key lines that I had to think about:

```javascript
const button = screen.getByRole("button");
const heading = screen.getByRole("heading");
```

Rather than accessing the button by using its class name, you use the 'role'. This is because the user will not see a class name, but they will see a button. This subtle change in perspective will mean you will more likely be testing the functionality of your app to correctly test for the behaviour of the user.
