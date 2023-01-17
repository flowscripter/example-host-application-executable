# example-host-application

[![version](https://img.shields.io/github/v/release/flowscripter/example-host-application?sort=semver)](https://github.com/flowscripter/example-host-application/releases)
[![build](https://img.shields.io/github/actions/workflow/status/flowscripter/example-host-application/release-deno-executable.yml)](https://github.com/flowscripter/example-host-application/actions/workflows/release-deno-executable.yml)
[![coverage](https://codecov.io/gh/flowscripter/example-host-application/branch/main/graph/badge.svg?token=EMFT2938ZF)](https://codecov.io/gh/flowscripter/example-host-application)
[![dependencies](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Fupdates%2Fhttps%2Fraw.githubusercontent.com%2Fflowscripter%2Fexample-host-application%2Fmain%2Fmod.ts)](https://github.com/flowscripter/example-host-application/blob/main/deps.ts)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/raw.githubusercontent.com/flowscripter/example-host-application/main/mod.ts)
[![license: MIT](https://img.shields.io/github/license/flowscripter/example-host-application)](https://github.com/flowscripter/example-host-application/blob/main/LICENSE)

> Example host application executable for the
> [dynamic-plugin-framework](https://github.com/flowscripter/dynamic-plugin-framework).

## Binary Executable Usage

**NOTE**: The below won't work due to
https://github.com/flowscripter/example-host-application/issues/3 - instead for
now:

    deno run --allow-net https://deno.land/x/flowscripter_example_host_application/mod.ts

Download and extract zip from:
https://github.com/flowscripter/example-host-application/releases

Run the executable: `./example-host-application`

## Development

Run: `deno run --unstable --allow-net mod.ts`

Test: `deno test -A --unstable`

Lint: `deno fmt mod.ts deps.ts src/ tests/`

Compile: `deno compile --unstable --allow-net mod.ts`

## Functional Tests

Refer to [functional_tests/README.md](functional_tests/README.md)

## Documentation

### Framework API

Refer to the
[dynamic-plugin-framework](https://github.com/flowscripter/dynamic-plugin-framework)
for an overview of what this example is demonstrating.

### API

Link to auto-generated API docs for the library:

[API Documentation](https://doc.deno.land/https/raw.githubusercontent.com/flowscripter/example-host-application/main/mod.ts)

## License

MIT © Flowscripter
