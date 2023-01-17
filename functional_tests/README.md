## Executable Functional Tests

#### Setup

Ensure the executable is built:

    deno compile --unstable --allow-env --allow-read --allow-write --allow-ffi --allow-net --output /tmp/example-host-application ../mod.ts

Install requirements:

    pip3 install -r pip-requirements.txt

#### Testing

**NOTE**: The below won't work due to
https://github.com/flowscripter/example-host-application/issues/3 - instead for
now:

    export EXECUTABLE="deno run --allow-net ../mod.ts"
    behave

Run the functional tests:

    export EXECUTABLE=/tmp/example-host-application
    behave

To run with logging output from the test steps (this is the best set of
arguments I can find):

    behave --no-logcapture --no-color --logging-level=DEBUG
