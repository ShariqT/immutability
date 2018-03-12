from channels.generic.websocket import JsonWebsocketConsumer
from web3 import Web3, HTTPProvider
from datetime import datetime
import pytz

web3 = Web3(HTTPProvider("https://ropsten.infura.io/4XevmelstdICBPBhZCBX"))


class EthConsumer(JsonWebsocketConsumer):
    lastBlock = None

    def connect(self):
        self.accept()
        self.send_json({"ack":True})
        self.send_block_info(web3.eth.blockNumber)

    def receive_json(self,content):
        print("check" in content.keys())
        print("content is {}".format(content))
        if "send" in content.keys():
            self.send_block_info(web3.eth.blockNumber)
        elif "check" in content.keys():
            print("got a check message")
            block_info = web3.eth.getBlock(web3.eth.blockNumber)
            if block_info is None:
                self.send_json({"current":True})
            else:

                if block_info['timestamp'] > self.lastBlock:
                    self.send_block_info(web3.eth.blockNumber)
                else:
                    self.send_json({"current":True})
        else:
            self.close()
    
    def disconnect(self, close_code):
        self.send_json({"cls":True})
        super(EthConsumer, self).disconnect(close_code)

    def send_block_info(self, block_number):
        ret_dict = {}
        if block_number is not None:
            block_info = web3.eth.getBlock(block_number)
            if block_info is not None:
                print("got a block...")
                print(block_info['timestamp'])
                self.lastBlock = block_info['timestamp']
                ret_dict['time'] = datetime.fromtimestamp(block_info['timestamp'], pytz.timezone("US/Pacific"))
                ret_dict['time'] = ret_dict['time'].strftime("%Y-%m-%d %H:%m")
                ret_dict['transactions'] = []
                tx_info = None
                for i in range(0, len(block_info['transactions'])):
                    tx_info = web3.eth.getTransaction(block_info['transactions'][i])
                    if tx_info is not None:
                        ret_dict['transactions'].append( {"to": tx_info['to'], "from": tx_info['from'], "data": tx_info["input"], "value": tx_info['value'] })
            else:
                ret_dict["error"] = "no blocks"
        self.send_json(ret_dict)