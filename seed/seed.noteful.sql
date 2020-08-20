BEGIN;

INSERT INTO folders (folder_name)
VALUES
    ('Test Folder 1'),
    ('Test Folder 2'),
    ('Test Folder 3'),
    ('Test Folder 4')
;

INSERT INTO notes (note_name, content, folder_id)
VALUES
    ('Note 1', 'Note content', 1),
    ('Note 2', 'Note content', 2),
    ('Note 3', 'Note content', 3),
    ('Note 4', 'Note content', 4),
    ('Note 5', 'Note content', 1),
    ('Note 6', 'Note content', 2),
    ('Note 7', 'Note content', 3),
    ('Note 8', 'Note content', 4)
;

COMMIT;