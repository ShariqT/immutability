from django.db import models
import uuid
class URLShortcut(models.Model):
    acct = models.TextField(max_length=500)
    tx = models.TextField(max_length=500)
