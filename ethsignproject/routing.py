from channels.routing import ProtocolTypeRouter, URLRouter
from ethsignproject.frontend.consumers import EthConsumer
from django.conf.urls import url

application = ProtocolTypeRouter({
    "websocket":URLRouter([
        url("^filter/$", EthConsumer),
    ])
})