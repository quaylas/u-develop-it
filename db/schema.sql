CREATE TABLE candidates (
id INTEGER PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
industry_connected BOOLEAN NOT NULL
);

CREATE TABLE parties (
    id INTEGER PRIMARY KEY,
    party_name VARCHAR(50) NOT NULL,
    party_description text
);