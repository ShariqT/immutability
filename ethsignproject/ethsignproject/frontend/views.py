import json, rlp
from web3 import Web3, HTTPProvider
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

web3 = Web3(HTTPProvider("http://localhost:8545"))
if web3 is None:
    # let's try the remote Infura host instead
    web3 = Web3(HTTPProvider("https://ropsten.infura.io/4XevmelstdICBPBhZCBX"))


def index(request):
    return render(request, "frontend/index.html")

def sign(request):
    res = HttpResponse()
    res['Content-Type'] = 'application/json'

    if request.method == "POST":
        print(request.POST['acct'])
        print(web3.version.api)

        res.write(json.dumps({"success": 100}))
        return res
    else:
        return res
