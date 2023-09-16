export const functions = [
    {
        "name": "get_places",
        "description": "Fetch locations by category & attribute IDs.",
        "parameters": {
            "type": "object",
            "properties": {
                "category": {
                    "type": "number",
                    "description": "IDs: monuments (10695), gastronomy (10696), culture (10697)."
                },
                "attribute": {
                    "type": "number",
                    "description": "IDs: barrier-free (100), no fee (101), animals (102)."
                },
                "response": {
                    "type": "string",
                    "description": "Some kind response/explanation."
                }
                
            },
            "required": ["category", "attribute", "response"]
        },
    },
];
export const chat = [
    { role: 'system', content: 'you are a phone app that can help with query search and filtered search. if user asks to help or to look for something, assist' },
    { role: 'user', content: 'i am looking for a barrier free cafe' },
];