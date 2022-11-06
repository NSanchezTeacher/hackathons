import backend.requests as requests
import json
import csv
import itertools


#Ejercicio 1
#x = requests.post('http://localhost:5000/ej1', data = json.dumps({"group": "grupo1"}))

#Ejercicio 2
#numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
#x = requests.post('http://localhost:5000/ej2', data = json.dumps({"group": "grupo1", "data": numbers}))


#Ejercicio 3
'''x = requests.get('http://localhost:5000/ej3')
open('business2.csv', 'wb').write(x.content)
reader = csv.reader(open('business.csv', 'r'))
d = []
for row in reader:
    d.append(row)  

x = requests.post('http://localhost:5000/ej3', data = json.dumps({"group": "grupo1", "data": d}))'''

#Ejercicio 4
#elements = ["Queso", "Jamon", "Pan", "Agua", "Pasta", "Arroz", "Jabón", "Iogur", "Leche", "Harina"]
#elements = list(itertools.combinations(elements, 2))
#elements = [(key, list(value)) for key, value in itertools.groupby(elements, lambda x: x[0])]
#x = requests.post('http://localhost:5000/ej4', data = json.dumps({"group": "grupo1", "data": elements}))

#Ejercicio 5
lines = []
reader = csv.reader(open('business.csv', 'r'))
for line in reader:
    for elem in line:
        if "2012" in elem:
            lines.append(line)
x = requests.post('http://localhost:5000/ej5', data = json.dumps({"group": "grupo1", "data": lines}))