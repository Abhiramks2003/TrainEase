import json

# List of JSON files to combine
json_files = [
    "12075.json",
    "12076.json",
    "12081.json",
    "12082.json",
    "12624.json",
    "12625.json",
    "16347.json",
    "16348.json",
    "16349.json",
    "16350.json",
    "16603.json",
    "16604.json"
]


# Initialize an empty list to store the combined data
combined_data = []

# Read and merge JSON files
for file_path in json_files:
    with open(file_path, "r") as file:
        data = json.load(file)
        combined_data.extend(data)

# Write to a single JSON file
with open("combined1.json", "w") as combined_file:
    json.dump(combined_data, combined_file, indent=2)
