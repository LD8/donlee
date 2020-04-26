from django.contrib import admin
from django.urls import path, include
from . import settings
from django.contrib.staticfiles.urls import static, staticfiles_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include('landing.urls')),
    path('api/', include('api.urls')),
    path('', include('frontend.urls')),
    # path('frontend/', include('frontend.urls')),

]

urlpatterns += staticfiles_urlpatterns()
# this basically tells 'urlpatterns' what media url to add and where media files are
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 