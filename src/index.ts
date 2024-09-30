/**
 * @file This file exports a class that implements the InferenceExtension interface from the @janhq/core package.
 * The class provides methods for initializing and stopping a model, and for making inference requests.
 * It also subscribes to events emitted by the @janhq/core package and handles new message requests.
 * @version 1.0.0
 * @module inference-extension/src/index
 */

import { LocalOAIEngine } from "@janhq/core";

/**
 * A class that implements the InferenceExtension interface from the @janhq/core package.
 * The class provides methods for initializing and stopping a model, and for making inference requests.
 * It also subscribes to events emitted by the @janhq/core package and handles new message requests.
 */
export default class MLXInferenceExtension extends LocalOAIEngine {
  nodeModule: string = NODE;
  provider: string = "mlx";
  /*
   * The URL for making inference requests.
   */
  inferenceUrl = "http://127.0.0.1:3929/v1/chat/completions";

  /**
   * Subscribes to events emitted by the @janhq/core package.
   */
  async onLoad() {
    super.onLoad();
  }
}
