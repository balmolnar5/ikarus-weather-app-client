/**
 * Create a new tuple from a "string enum"'s values (__not to be confused__ with
 * enums declared with the `enum` keyword).
 *
 * @param enumeration - The enum object. Must have `string` keys to ensure
 * correct order at runtime. Values must be unique `string`s.
 *
 * @throws {@link ArgumentError}
 * Fail fast on developer errors, i.e, the enum has:
 *  - a number-like key (e.g., `3`, `"3"`)
 *  - a duplicate value
 *
 * Number keys get coerced into strings, so TypeScript doesn't complain.
 * Duplicate values can't be type-checked either.
 *
 * @example
 * ```ts
 * const ICE_CREAM_FLAVOR = {
 *   CHOCOLATE = "chocolate",
 *   VANILLA = "vanilla",
 *   STRAWBERRY = "strawberry"
 * } as const;
 *
 * const ICE_CREAM_FLAVORS = enumAsTuple(ICE_CREAM_FLAVOR);
 * //    ^? readonly ["chocolate" | "vanilla", "strawberry"]
 * ```
 */
export function enumAsTuple<T extends string>(
  enumeration: Readonly<Record<string, T>>,
): readonly [T] {
  const array: string[] = [];

  for (const [k, v] of Object.entries(enumeration)) {
    if (!isNaN(Number(k))) {
      throw new Error("Enum must have only string keys.");
    }

    if (array.includes(v)) {
      throw new Error("Enum must have unique values.");
    }

    array.push(v);
  }

  return array as [T];
}
