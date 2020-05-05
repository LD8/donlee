import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEBUG = False

# local/dev setting
if not os.environ.get('USE_PROD_DB', None):
    # SECURITY WARNING: keep the secret key used in production secret!
    SECRET_KEY = 'g*z$*p^@aasfk$7=mwm31!77ku5-l6u=fb#kxag*4u)ombxo7o'
    ALLOWED_HOSTS = [
        'localhost',
        '127.0.0.1'
    ]

# server/prod setting
else:
    SECRET_KEY = os.getenv('SECRET_KEY')

    ALLOWED_HOSTS = [
        'donlee.online',
        '13.125.96.136',
        '5.63.152.4',
        'localhost',
    ]

    SECURE_SSL_REDIRECT = True
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True
    # SECURE_HSTS_SECONDS = 600 #https://docs.djangoproject.com/en/3.0/ref/middleware/#http-strict-transport-security

    # The absolute path to the directory where collectstatic will collect static files for deployment.
    STATIC_ROOT = os.path.join(BASE_DIR, 'static')


INSTALLED_APPS = [
    'api',
    'frontend',

    # third party addon
    'rest_framework',
    'corsheaders',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',

    # django-cors-header addon
    'corsheaders.middleware.CorsMiddleware',

    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'donlee.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'donlee.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'donlee',
        'USER': 'va_db_admin',
        'PASSWORD': os.environ.get('DB_PASSWD'),
        'HOST': 'localhost',
        'PORT': '',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    # {
    #     'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    # },
    # {
    #     'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    # },
    # {
    #     'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    # },
    # {
    #     'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    # },
]


# Internationalization

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Shanghai'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# 12 files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = (
    # This lets Django's collectstatic store our bundles
    os.path.join(BASE_DIR, 'frontend/src/assets'),
)

LOCALE_PATHS = [os.path.join(BASE_DIR, 'locale')]


# for image uplaoding
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

LOGIN_URL = 'users:login'


# Enable CORS(Cross Origin Resrouce Sharing) for all domains, allow all domains to access api
CORS_ORIGIN_ALLOW_ALL = False

# Or you can whitelist them
CORS_ORIGIN_WHITELIST = [
    "https://donlee.online",
    "http://localhost:3000",
    "http://localhost:8000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:8000",
    "http://192.168.101.52:3000",
]

REST_FRAMEWORK = {
    # NOTE: it is a good idea to disable the browseable API in production with this configuration:
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    )
}

DEBUG = True
