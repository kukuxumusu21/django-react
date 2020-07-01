from rest_framework import routers
from .api import RegisterViewSet

router = routers.DefaultRouter()
router.register('api/reg', RegisterViewSet, 'backend')

urlpatterns = router.urls
