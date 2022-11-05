from flask import Flask, render_template, request, send_file
import json
from problems import Problems
from flask_cors import CORS, cross_origin


problems = Problems()

app = Flask(__name__)
CORS(app)

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
    print(json.dumps(problems.getResponses()))
    return json.dumps(problems.getResponses())


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

