from django.urls import path, include
from rest_framework.schemas import get_schema_view
from rest_framework import routers
from tasks import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path(
        'openapi/',
        get_schema_view(
            title="Tasks API",
            description="API para gestionar tareas",
            version="1.0.0"
        ),
        name="openapi-schema"
    )

]