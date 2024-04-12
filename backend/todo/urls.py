from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('todo', views.TodoViewSet, basename='todo')

urlpatterns = [  
    # path('todo/', TodoList.as_view(), name='todo-list'),
    # path('todo/<int:pk>/', TodoDetail.as_view(), name='todo-detail'),
]

urlpatterns += router.urls
