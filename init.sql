CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS Users (
    ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    Name VARCHAR(100)
);

INSERT INTO Users (Name) VALUES ('ryzha');
INSERT INTO Users (Name) VALUES ('other');

CREATE OR REPLACE PROCEDURE add_user(p_user JSON)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO Users (Name)
    VALUES (
        p_user->>'Name'
    );
END;
$$;

CALL add_user('{"Name": "user1"}'::json);
CALL add_user('{"Name": "user2"}'::json);
CALL add_user('{"Name": "user3"}'::json);
