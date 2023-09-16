# Query Search and Filtered Search App

This applications assists

## Features

- Uses OpenAI GPT-3.5 Turbo or better one to understand and process user queries.
- Fetches locations based on category & attribute IDs.
- Provides a user-friendly interface to get relevant results based on user input.

## Setup & Installation

### Prerequisites

1. Bun installed.
2. An OpenAI account and API key.

### Installation

1. **Clone this repository:**  
   `git clone [this repo name]`
2. **Navigate to the project directory:**  
   `cd [this repo name]`
3. **Install the necessary dependencies:**  
   `bun i`
4. **Set up your OpenAI API key:**  
   Create a `.env` file in the root directory and add the following line:  
   `API_KEY=Your_OpenAI_API_KEY`

## Usage

- **To run the app in development mode:**  
  `bun run dev`

Once the app is running, navigate to [localhost](http://localhost:8000) in your browser.

## Returns params & greetings

```
Function Name: get_places
Arguments: {
  "categories": [
    10696
  ],
  "attributes": [
    100,
    102
  ],
  "response": "Sure, let me find a barrier-free cafe where you can go with your dog."
}
```

## License

MIT License
