import json

# JSON serialization (Python object to JSON string)
data = {
    "name": "Ali",
    "age": 30,
    "city": "Amman"
}

json_string = json.dumps(data)
print(json_string)

# JSON deserialization (JSON string to Python object)
json_data = '{"name": "Ola", "age": 35, "city": "Hebron"}'

parsed_data = json.loads(json_data)
print(parsed_data)

