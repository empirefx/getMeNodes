export default
{
    "$schema": "http://json-schema.org/draft-03/schema#",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "title": "Name",
            "description": "Node name",
            "required": true
        },
        "type": {
            "type": "string",
            "title": "type",
            "description": "Node type",
            "required": true,
            "enum": [
                "none",
                "City",
                "Town",
                "Field"
            ]
        },
        "resources": {
            "type": "array",
            "title": "resources",
            "items": {
                "type": "object",
                "properties": {
                    "type": {
                        "type": "string",
                        "title": "Name"
                    },
                    "qty": {
                        "type": "integer",
                        "title": "Number"
                    }
                }
            }
        },
        "buildings": {
            "type": "array",
            "title": "buildings",
            "items": {
                "type": "object",
                "properties": {
                    "type": {
                        "type": "string",
                        "title": "Name"
                    },
                    "qty": {
                        "type": "integer",
                        "title": "Number"
                    }
                }
            }
        },
        "production": {
            "type": "array",
            "title": "production",
            "items": {
                "type": "object",
                "properties": {
                    "type": {
                        "type": "string",
                        "title": "Name"
                    },
                    "qty": {
                        "type": "integer",
                        "title": "Number"
                    }
                }
            }
        },
        "actions": {
            "type": "array",
            "title": "actions",
            "items": {
                "type": "object",
                "properties": {
                    "type": {
                        "type": "string",
                        "title": "Name"
                    }
                }
            }
        }
    }
}