import json
import os

def combine_json_lists(folder1, folder2, output_folder):
    for filename in os.listdir(folder1):
        if filename.endswith('.json'):
            with open(os.path.join(folder1, filename), 'r') as f1, \
                 open(os.path.join(folder2, filename), 'r') as f2:
                data1 = json.load(f1)
                data2 = json.load(f2)
            print (type(data1))
            print (type(data2))
            # Combine the data and remove duplicates
            combined_data = data1 + data2

            # Write the combined data to a new file in the output folder
            with open(os.path.join(output_folder, filename), 'w') as f_out:
                json.dump(combined_data, f_out, indent=4)

# Call the function
combine_json_lists('intro to react/vite-project/logs', 'intro to react/fun-with-react/logs', 'intro to react/newData')
