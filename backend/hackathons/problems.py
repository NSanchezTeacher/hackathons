import json
import os

class Problems:
    
    exercices = None

    def __init__(self) -> None:
        # Opening JSON file
        path = os.path.dirname(__file__)
        with open(path + '/problems.json', encoding='utf-8') as fh:
            # returns JSON object as 
            # a dictionary
            self.exercices = json.load(fh)



    def resolve(self):
        for ex in self.exercices["exercices"]:
            ex["resolved"] = True
            break
        return "Ok"

    
    def getData(self):
        data = self.exercices.copy()
        for ex in data["exercices"]:
            if ("solution" in ex):
                del ex['solution']

        return data

    