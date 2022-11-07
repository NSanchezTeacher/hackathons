from flask import Flask, render_template, request, send_file
import json
from hackathons.problems import Problems
from flask_cors import CORS, cross_origin
#from flask_sock import Sock

problems = Problems()

app = Flask(__name__)
CORS(app)
#sock = Sock(app)

@app.route('/resolve',methods=['POST'])
def setGroup():
    group = request.headers.get("group")
    data = request.json
    return problems.resolve(group, data["exercice"], data["solution"])


@app.route('/getData')
def getData():
    return problems.getData()

'''
Para web socketes
@sock.route('/getData')
def echo(ws):
    while True:
        data = ws.receive()
        ws.send(problems.getData())'''

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

