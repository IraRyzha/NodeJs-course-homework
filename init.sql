CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS Users (
    ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    Name VARCHAR(100) NOT NULL,                     
    Password VARCHAR(255) NOT NULL             
);
