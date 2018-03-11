from django.urls import path
from . import views
urlpatterns = [
    path(r'', views.index, name='index'),
    path(r'sign', views.sign, name="sign"),
    path(r'r/<str:shortcode>', views.show, name='show'),
    path(r'resolve/<str:shortcode>', views.resolve, name='resolve'),
]