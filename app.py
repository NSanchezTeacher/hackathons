from flask import Flask, render_template, request, send_file
import json
import random
import itertools
from operator import itemgetter
from functools import reduce
import csv
from problems import Problems


problems = Problems()

app = Flask(__name__, template_folder='.')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ej1')
def getEj1():
    return problems.problemEj1()

@app.route('/ej1',methods=['POST'])
def setGroup():
    request_data = json.loads(request.data)
    return problems.solutionEj1(request_data)


@app.route('/getData')
def getData():
    return json.dumps(problems.getResponses())


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

