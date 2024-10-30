CREATE TABLE IF NOT EXISTS Users (
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS UserPreferences (
    PreferenceID SERIAL PRIMARY KEY,
    Description VARCHAR(255),
    LanguageCode VARCHAR(100),
    UserId INT,
    FOREIGN KEY (UserId) REFERENCES Users(ID) ON DELETE CASCADE
);

INSERT INTO Users (ID, Name, Email) VALUES (1, 'ryzha', 'ryzha@');
INSERT INTO Users (ID, Name, Email) VALUES (2, 'other', 'other@');
INSERT INTO UserPreferences (PreferenceID, Description, LanguageCode, UserId) VALUES (1, '123', 'description', 1);

-- DELETE FROM Users WHERE ID = 1;

CREATE OR REPLACE PROCEDURE add_user(p_user JSON)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO Users (ID, Name, Email)
    VALUES (
        (p_user->>'ID')::INT,
        p_user->>'Name',
        p_user->>'Email'
    );
END;
$$;

CALL add_user('{"ID": "3", "Name": "user", "Email": "email@"}'::json);

-- ALTER TABLE users ADD UNIQUE (name)
-- ALTER TABLE users ALTER COLUMN name SET NOT NULL;