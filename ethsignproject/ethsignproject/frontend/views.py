import json, rlp, base64
from web3 import Web3, HTTPProvider
from django.shortcuts import render
from django.http import HttpResponse, Http404
from ethsignproject.frontend.models import URLShortcut
from django.conf import settings
# Create your views here.

#web3 = Web3(HTTPProvider("http://localhost:8545"))
#if web3 is None:
    # let's try the remote Infura host instead
web3 = Web3(HTTPProvider("https://ropsten.infura.io/4XevmelstdICBPBhZCBX"))


def index(request):
    return render(request, "frontend/index.html")


def bytes_to_int(bytes):
    result = 0

    for b in bytes:
        result = result * 256 + int(b)

    return result

def sign(request):
    res = HttpResponse()
    res['Content-Type'] = 'application/json'

    if request.method == "POST":
        print(request.POST['acct'])
        print(web3.version.api)
        record = URLShortcut(tx=request.POST['tx'], acct=request.POST['acct'])
        record.save()
        print("saved record is {}".format(record.pk))
        return_dict = {}
        return_dict["shortcut"] = base64.urlsafe_b64encode(bytes([record.pk])).decode()
        return_dict["transaction"] = request.POST['tx']
        return_dict["success"] = True
        print(return_dict["shortcut"])
        res.write(json.dumps(return_dict))
        return res
    else:
        return Http404()

def resolve(request, shortcode):
    record_id = base64.urlsafe_b64decode(shortcode)
    record = URLShortcut.objects.get(pk= bytes_to_int(record_id))
    blockchain_info = web3.eth.getTransaction(record.tx)
    print(blockchain_info)
    message = web3.toText(blockchain_info['input'])
    return render(request, "frontend/message.html", {"record": record, "message": message})
