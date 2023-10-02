import json

# Specify the path to your JSON file
file_path = 'schedules2.json'

# List of allowed station codes
allowed_tnos = ['16349','16350','16347','16348','12625','16603','16604','12624'] 

try:
    # Read the JSON data from the file
    with open(file_path, 'r') as file:
        data = json.load(file)

    # Modify the data by filtering out trains not in the allowed station codes
    data = [train for train in data if train.get('train_number') in allowed_tnos]

    # Write the modified data back to the same file
    with open(file_path, 'w') as file:
        json.dump(data, file, indent=4)

    print(f'Modified JSON data has been saved to {file_path}')
except FileNotFoundError:
    print(f'Error: JSON file "{file_path}" not found.')
except json.JSONDecodeError as e:
    print(f'Error decoding JSON: {e}')
except Exception as e:
    print(f'An error occurred: {e}')
