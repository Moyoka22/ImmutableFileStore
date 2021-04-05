Implement Manager and Workers

Manager talks to Adapter to get operations.
Manager talks to workers to perform file operations such as retrieving file contents.

Adapter talks to Reader to parse file contents.
Adapter talks to Writer to create new file contents.
Adapter sits between Reader, Writer and Manager.
Adapter sits between Model and Manager.
