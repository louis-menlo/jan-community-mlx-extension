Certainly! I'll create a README.md file for your project based on the information provided in the existing files. Here's the content for your README.md:

# MLX Inference Extension for Jan

This project is an MLX-based inference extension for Jan, utilizing the MLX machine learning framework to provide efficient inference capabilities.

## Overview

This extension integrates MLX models with Jan, allowing users to perform inference tasks using MLX's optimized machine learning capabilities. It's designed to work seamlessly with the Jan platform, providing a bridge between Jan's core functionality and MLX's powerful inference capabilities.

## Features

- MLX model integration with Jan
- Local inference using MLX
- Support for chat completions
- Easy model loading and unloading

## Prerequisites

- Mojo programming language
- Python 3.9 or later
- Jan platform
- MLX framework

## Installation

## Build from source

1. Ensure you have the Magic package installed.

```
curl -ssL https://magic.modular.com/b0c196c1-61fc-4bd7-909b-9936aecb3d43 | bash
```
2. Set up a conda environment using the provided `environment.yml` file:

```
magic shell
```
3. Install npm dependencies

```
yarn
```

3. Build the package:

```
yarn build
```

## Usage

To use this extension with Jan:

1. From Jan Extensions Setting Page
2. Install Extension
3. Select jan-community-mlx-extension-0.0.1.tgz

## Development

To set up the development environment:

1. Install dependencies:

```
yarn
```

2. Build the TypeScript code:

```
yarn build
```

## Running the Server

To start the MLX inference server:

```
./run.sh
```

This script will set up the necessary environment and start the Mojo-based server.

## Configuration

The extension can be configured through the `src/index.ts` file. You can modify the `inferenceUrl` and other parameters as needed.

## License

This project is licensed under the Apache License 2.0 with LLVM Exceptions. See the LICENSE file for details.

## Contributing

Contributions to this project are welcome. Please ensure that your code adheres to the existing style and that all tests pass before submitting a pull request.

## Support

For issues and feature requests, please use the GitHub issue tracker for this repository.

