# Type Narrowing in TypeScript: Making Union Types Safe

## Introduction

Type narrowing is the process of refining a variable from a broad type into a more specific type. It is especially useful when a function accepts a union, because the code must handle each possible value safely.

## Detailed Explanation

The `typeof` operator is useful for primitive values. In the example below, TypeScript knows that `input` is a string in the first branch and a number in the second.

```ts
function describe(input: string | number): string {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }
  return `Number: ${input.toFixed(2)}`;
}
```

For class instances, use `instanceof`. It checks whether an object was created from a particular class or appears in its prototype chain.

```ts
class Dog {
  bark(): string {
    return "Woof!";
  }
}

class Cat {
  meow(): string {
    return "Meow!";
  }
}

function makeSound(pet: Dog | Cat): string {
  if (pet instanceof Dog) {
    return pet.bark();
  }
  return pet.meow();
}
```

The `in` operator narrows object unions by checking whether a property exists.

```ts
type EmailUser = { email: string };
type PhoneUser = { phone: string };

function contact(user: EmailUser | PhoneUser): string {
  if ("email" in user) {
    return user.email;
  }
  return user.phone;
}
```

These checks happen at runtime, while TypeScript uses their results during static analysis. They reduce unsafe assumptions and make branches easier to maintain.

## Conclusion

Type narrowing connects JavaScript runtime checks with TypeScript's type system. Use `typeof` for primitive types, `instanceof` for class instances, and `in` for distinguishing object shapes. Together, they make union-based functions clearer and safer.
