import json
import os
import copy

class Problems:
    
    groups = []

    def __init__(self) -> None:
        # Opening JSON file
        path = os.path.dirname(__file__)
        with open(path + '/problems.json', encoding='utf-8') as fh:
            # returns JSON object as 
            # a dictionary
            self.createGroups(json.load(fh))


    def createGroups(self, data):
        for i in range(1, data["groups"]+1):
            self.groups.append({
                "group": "Grupo " + str(i),
                "groupId": "GR" + str(i),
                "exercices": copy.deepcopy(data["exercices"])
            })
        


    def resolve(self, group, exercice, solution):
        for gr in self.groups:
            if gr["groupId"] == group:
                for ex in gr["exercices"]:
                    if ex["id"] == exercice:
                        ex["resolved"] = self.checkSolution(ex["solution"], solution)
                        break    
        
        return "Ok"

    
    def checkSolution(self, solution, alSolution):
        if isinstance(solution, list) and isinstance(alSolution, list):
            solution.sort() 
            alSolution.sort()

        elif isinstance(solution, dict) and isinstance(alSolution, dict):
            solution = json.dumps(solution, sort_keys=True) 
            alSolution =  json.dumps(alSolution, sort_keys=True)

        if solution == alSolution:
            return True

        return False

    def getData(self):
        data = self.groups.copy()
        for ex in data: 
            if "solution" in ex["exercices"]:
                del ex["exercices"]['solution']

        return data