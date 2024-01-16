from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Todo(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    memo = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def _str_(self):
        return self.title

    def get_id(self):
        return self.id

    def get_title(self):
        return self.title

    def set_title(self, title):
        self.title = title

    def get_memo(self):
        return self.memo

    def set_memo(self, memo):
        self.memo = memo

    def get_created(self):
        return self.created

    def set_created(self, created):
        self.created = created

    def get_completed(self):
        return self.completed

    def set_completed(self, completed):
        self.completed = completed

    def get_user(self):
        return self.user

    def set_user(self, user):
        self.user = user
