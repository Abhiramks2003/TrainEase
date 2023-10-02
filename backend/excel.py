import csv
import json

# Define the CSV file and JSON file paths
csv_file = 'maindata.csv'  # Replace with your CSV file path
json_file = 'output.json'  # Replace with your desired JSON file path

# Read the CSV file and convert it to a list of dictionaries
data = []
with open(csv_file, 'r') as csvf:
    csv_reader = csv.DictReader(csvf)
    for row in csv_reader:
        data.append(row)

# Write the list of dictionaries to a JSON file
with open(json_file, 'w') as jsonf:
    json.dump(data, jsonf, indent=4)

print(f'CSV file "{csv_file}" has been converted to JSON and saved as "{json_file}"')
