web: gunicorn --bind localhost:8000 trendallarchive trendallarchive.wsgi
python manage.py collectstatic --noinput
manage.py migrate