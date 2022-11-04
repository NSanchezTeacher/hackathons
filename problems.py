from http.client import responses

class Problems:

    respones = {
        "grupo1": [False, False, False, False, False],
        "grupo2": [False, False, False, False, False],
        "grupo3": [False, False, False, False, False],
    }

    def problemEj1(self):
        return "Genera una petición que identifique tu grupo. Pásala como post."


    def solutionEj1(self, data):
        return "Ok"


    def getResponses(self):
        return responses