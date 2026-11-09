# Generics in TypeScript and Asynchronous Promise Responses

## Introduction

Generics let a function, interface, or class work with different data types while preserving useful type information. Instead of giving up and using `any`, a generic captures a type supplied by the caller and carries it through the result. This is particularly valuable when handling asynchronous data.

## Detailed Explanation

A generic function declares a type parameter, commonly written as `T`. The same `T` can describe both the input and output, allowing TypeScript to infer the relationship.

```ts
function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}

const firstName = firstItem(["Mina", "Rafi"]);
// TypeScript infers string | undefined.

const firstScore = firstItem([80, 95]);
// TypeScript infers number | undefined.
```

Promises use the same idea. `Promise<T>` represents a promise that will eventually fulfill with a value of type `T`. The generic argument describes the resolved value, not the Promise object itself.

```ts
interface Profile {
  id: number;
  name: string;
}

async function fetchProfile(): Promise<Profile> {
  const response = await fetch("/api/profile");

  if (!response.ok) {
    throw new Error("Could not load profile");
  }

  const profile: Profile = (await response.json()) as Profile;
  return profile;
}
```

Here, callers can await `fetchProfile()` and receive a `Profile`, so properties such as `id` and `name` are checked by TypeScript. A reusable helper can also preserve the result type:

```ts
async function loadData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Request failed");
  return (await response.json()) as T;
}
```

The assertion in this example tells the compiler what shape is expected; it does not validate untrusted JSON at runtime. Real applications should validate external data when necessary.

## Conclusion

Generics make reusable code flexible without losing type safety. With `Promise<T>`, they clearly document asynchronous results, improve editor support, and help errors surface during development rather than later in execution.
