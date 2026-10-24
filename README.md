# @x12i/ai-input usage example

Deterministic, lossless input preparation and conversion for AI model requests.

This consuming application demonstrates **round-trip a structured ai input without losing fields** using the published npm package, pinned to `1.1.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- A consumer needs the following capability: Deterministic, lossless input preparation and conversion for AI model requests.
- A AI integration needs to reuse the capabilities of @x12i/ai-input inside a larger application.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/ai-input)
- [Implementation monorepo](https://github.com/x12i/ai-input)
- [Reviewed package source](https://github.com/x12i/ai-input/tree/1b3588d1e1f9ebd602d159ed1b6524f8163f41b6/.)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
