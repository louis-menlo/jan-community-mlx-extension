from sys import argv
from python import Python
def main():
    # Start a python server that return SSE 
    print("Hello Mojo 🔥!")
    Python.add_to_path(".")
    Python.add_to_path("./deps")
    var argparse = Python.import_module("argparse")
    var mlx_lm = Python.import_module("mlx_lm.server")
    var argv = argv()
    var parser = argparse.ArgumentParser()

    parser = argparse.ArgumentParser(description="MLX Http Server.")
    parser.add_argument(
        "--model",
        default=argv[1],
        help="The path to the MLX model weights, tokenizer, and config",
    )
    parser.add_argument(
        "--adapter-path",
        help="Optional path for the trained adapter weights and config.",
    )
    parser.add_argument(
        "--host",
        default="127.0.0.1",
        help="Host for the HTTP server (default: 127.0.0.1)",
    )
    parser.add_argument(
        "--port",
        default=8080,
        help="Port for the HTTP server (default: 8080)",
    )
    parser.add_argument(
        "--trust-remote-code",
        action="store_true",
        help="Enable trusting remote code for tokenizer",
    )
    parser.add_argument(
        "--log-level",
        default="INFO",
        choices=["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"],
        help="Set the logging level (default: INFO)",
    )
    parser.add_argument(
        "--cache-limit-gb",
        default=None,
        help="Set the MLX cache limit in GB",
        required=False,
    )
    parser.add_argument(
        "--chat-template",
        default="",
        help="Specify a chat template for the tokenizer",
        required=False,
    )
    parser.add_argument(
        "--use-default-chat-template",
        action="store_true",
        help="Use the default chat template",
    )
    args = parser.parse_args()
    mlx_lm.run("127.0.0.1", 3929, mlx_lm.ModelProvider(args))
    
