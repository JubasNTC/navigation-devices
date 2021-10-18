SELECT 'CREATE DATABASE nd_db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'nd_db')\gexec